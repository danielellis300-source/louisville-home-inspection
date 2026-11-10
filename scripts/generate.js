/* ════════════════════════════════════════════════════════════
   Site generator — Louisville Home Inspection Services
   Run: node scripts/generate.js
   Produces:
     - <slug>.html  (city landing pages, from city-data.js)
     - blog/<slug>.html + blog/index.html (from blog-data.js)
     - sitemap.xml, robots.txt, _redirects
   The homepage (index.html) is hand-authored, except for the blocks
   between <!-- GENERATED:name --> and <!-- /GENERATED:name --> markers,
   which are refilled on every run (pricing table, mobile call bar, the
   price sentences in the FAQ, and the FAQPage schema, which is rebuilt
   from the visible FAQ text).
   ════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const config = require('./site-config');
const articles = require('./blog-data');
const {
  renderArticlePage, renderBlogIndexPage, renderPricingSection, renderMobileCallBar,
  pricingFaqAnswer, radonFaqSentence
} = require('./template');
const { generateCityPages } = require('./generate-cities');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('wrote', path.relative(ROOT, filePath));
}

function generateArticles() {
  const articlesBySlug = new Map(articles.map(a => [a.slug, a]));
  articles.forEach(article => {
    const html = renderArticlePage(article, articlesBySlug);
    writeFile(path.join(BLOG_DIR, `${article.slug}.html`), html);
  });
  return articlesBySlug;
}

function generateBlogIndex() {
  const html = renderBlogIndexPage(articles);
  writeFile(path.join(BLOG_DIR, 'index.html'), html);
}

// Refill the GENERATED blocks in the hand-authored homepage so shared
// components (and published prices) never drift from the other pages.
function fillBlock(html, name, content) {
  const re = new RegExp(`(<!-- GENERATED:${name}(?: [^>]*)?-->)[\\s\\S]*?(\\s*<!-- /GENERATED:${name} -->)`);
  if (!re.test(html)) throw new Error(`index.html is missing the GENERATED:${name} markers`);
  return html.replace(re, (m, open, close) => `${open}\n${content}${close}`);
}

// Visible HTML -> the plain text Google sees in the FAQPage schema.
function toPlainText(fragment) {
  return fragment
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .replace(/ ([.,;:!?])/g, '$1')
    .trim();
}

// Build the FAQPage schema from the visible FAQ section, so the two can
// never disagree (Google ignores FAQ markup that doesn't match the page).
function renderHomepageFaqSchema(html) {
  const items = [...html.matchAll(/<div class="faq-item">[\s\S]*?<button class="faq-question"[^>]*>([\s\S]*?)<\/button>[\s\S]*?<div class="faq-answer-inner">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
  if (items.length === 0) throw new Error('index.html: no FAQ items found to build the FAQPage schema from');
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(([, q, a]) => ({
      "@type": "Question",
      "name": toPlainText(q),
      "acceptedAnswer": { "@type": "Answer", "text": toPlainText(a) }
    }))
  };
  const json = JSON.stringify(schema, null, 2).split('\n').map(l => '  ' + l).join('\n');
  return `  <script type="application/ld+json">\n${json}\n  </script>`;
}

function updateHomepageBlocks() {
  const file = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const priceLink = '<a href="#pricing" style="color:#374151; text-decoration:underline;">See the full price list</a>.';
  const blocks = {
    'pricing': renderPricingSection(),
    'mobile-cta': renderMobileCallBar(),
    'faq-cost': `              ${pricingFaqAnswer()} ${priceLink}`,
    'faq-radon-price': `              ${radonFaqSentence()}`
  };
  Object.entries(blocks).forEach(([name, content]) => { html = fillBlock(html, name, content); });
  // Last, so it picks up the FAQ text filled in above.
  html = fillBlock(html, 'faq-schema', renderHomepageFaqSchema(html));
  writeFile(file, html);
}

function generateSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];

  // Homepage
  urls.push({ loc: `${config.domain}/`, lastmod: today, priority: '1.0' });

  // City landing pages
  config.cities
    .filter(c => c.file !== '/')
    .forEach(c => urls.push({ loc: `${config.domain}${c.file}`, lastmod: today, priority: '0.8' }));

  // Blog index
  urls.push({ loc: `${config.domain}/blog/`, lastmod: today, priority: '0.7' });

  // Blog articles
  articles.forEach(a => urls.push({ loc: `${config.domain}/blog/${a.slug}`, lastmod: a.date, priority: '0.6' }));

  const body = urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
  writeFile(path.join(ROOT, 'sitemap.xml'), xml);
}

function generateRobots() {
  const robotsPath = path.join(ROOT, 'robots.txt');
  const content = `User-agent: *
Allow: /

Sitemap: ${config.domain}/sitemap.xml
`;
  writeFile(robotsPath, content);
}

// Cloudflare Pages auto-redirects `/page.html` -> `/page` with a 307
// (temporary) status, which does not tell Google to consolidate ranking
// signal onto the clean URL. An explicit _redirects rule with a 301
// (permanent) status overrides that behavior.
function generateRedirects() {
  const lines = ['/index.html / 301'];

  config.cities
    .filter(c => c.file !== '/')
    .forEach(c => lines.push(`${c.file}.html ${c.file} 301`));

  articles.forEach(a => lines.push(`/blog/${a.slug}.html /blog/${a.slug} 301`));
  lines.push('/blog/index.html /blog/ 301');
  // Bare /blog otherwise gets Cloudflare's default 307 to /blog/.
  lines.push('/blog /blog/ 301');

  writeFile(path.join(ROOT, '_redirects'), lines.join('\n') + '\n');
}

function main() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
  updateHomepageBlocks();
  generateCityPages();
  generateArticles();
  generateBlogIndex();
  generateSitemap();
  generateRobots();
  generateRedirects();
  console.log(`\nDone. ${config.cities.length - 1} city pages + ${articles.length} articles + blog index + sitemap.xml + robots.txt + _redirects.`);
}

main();
