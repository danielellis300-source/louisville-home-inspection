/* ════════════════════════════════════════════════════════════
   HTML rendering functions for the blog. Shared header/breadcrumb/
   footer markup mirrors the site's structure (see any generated
   city page) so blog pages match the design system exactly.
   ════════════════════════════════════════════════════════════ */

const config = require('./site-config');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

function readTimeFor(article) {
  const text = (article.intro + article.sections.map(s => s.h2 + ' ' + s.html).join(' ')).replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Favicon + social preview tags, shared by every generated page (and
// mirrored by hand in index.html). Files are written by make-icons.ps1.
function renderIconMeta() {
  return `<link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
  <meta property="og:image" content="${config.domain}/assets/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${config.domain}/assets/og-image.png" />`;
}

function renderHead({ title, description, canonicalPath, ogTitle, ogDescription, extraSchema }) {
  const canonical = `${config.domain}${canonicalPath}`;
  return `<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeHtml(ogTitle)}" />
  <meta property="og:description" content="${escapeHtml(ogDescription)}" />

  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="article" />
  <meta name="geo.region" content="US-${config.addressRegion}" />
  <meta name="geo.placename" content="${config.addressLocality}" />

  ${renderIconMeta()}

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/style.css" />
${extraSchema || ''}`;
}

function renderHeader() {
  return `  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="logo">Louisville<span>Home</span> Inspection Services</a>
      <div class="header-right">
        <div class="header-phone">Call us: <a href="tel:${config.phoneTel}">${config.phoneDisplay}</a></div>
        <a href="/#quote" class="btn btn-primary">Book Now</a>
        <div class="menu-wrap">
          <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="menuDropdown">&#9776; Menu</button>
          <div class="menu-dropdown" id="menuDropdown" role="menu">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#areas">Service Areas</a>
            <a href="/#quote">Book Online</a>
            <a href="/blog/">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </header>`;
}

function renderBreadcrumb(items) {
  // items: [{label, href?}] — last item has no href (current page)
  const inner = items.map((item, i) => {
    const sep = i === 0 ? '' : '<span>›</span>';
    const label = item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a>` : escapeHtml(item.label);
    return sep + label;
  }).join('');
  return `  <nav class="breadcrumb">
    <div class="container">
      ${inner}
    </div>
  </nav>`;
}

function renderFooter() {
  const cityLinks = config.cities
    .map(c => `<li><a href="${c.file}">${escapeHtml(c.name)}</a></li>`)
    .join('\n            ');
  return `  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">Louisville<span>Home</span> Inspection Services</div>
          <div class="footer-nap">
            <strong style="color:#ddd;">${escapeHtml(config.addressLocality)}, ${escapeHtml(config.addressRegion)}</strong><br>
            Phone: <a href="tel:${config.phoneTel}">${config.phoneDisplay}</a><br>
            Email: <a href="mailto:${config.email}">${config.email}</a><br>
            Serving Jefferson County &amp; the Kentuckiana metro
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><a href="/#services">Full Home Inspection</a></li>
            <li><a href="/#services">Pre-Listing Inspection</a></li>
            <li><a href="/#services">New Construction Inspection</a></li>
            <li><a href="/#services">Radon Testing</a></li>
            <li><a href="/#services">Termite / WDO Inspection</a></li>
            <li><a href="/#services">Sewer Scope Inspection</a></li>
            <li><a href="/blog/">Blog</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Service Areas</h4>
          <ul class="footer-links">
            ${cityLinks}
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="color:#ddd;">
        &copy; 2026 ${escapeHtml(config.businessName)}. All rights reserved.
      </div>
    </div>
  </footer>`;
}

function renderMenuScript() {
  return `  <script>
    (function(){
      var btn = document.getElementById('menuBtn');
      var drop = document.getElementById('menuDropdown');
      if(!btn) return;
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var open = drop.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', function(){
        drop.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    })();
  </script>`;
}

// ── Pricing ──────────────────────────────────────────────────
// Published fixed prices (from site-config.js). Used on the homepage
// (injected by generate.js between GENERATED:pricing markers) and on
// every city page.
function renderPricingSection() {
  const p = config.pricing;
  const row = (label, note, price) => `              <tr>
                <td><span class="price-label">${escapeHtml(label)}</span>${note ? `<span class="price-sub">${escapeHtml(note)}</span>` : ''}</td>
                <td class="price-amt">${escapeHtml(price)}</td>
              </tr>`;
  const tiers = p.homeTiers.map(t => row(t.size, t.note, t.price)).join('\n');
  const addOns = p.addOns.map(a => row(a.name, a.note, a.price)).join('\n');
  const included = p.included.map(i => `<li>${escapeHtml(i)}</li>`).join('');
  return `  <section class="section pricing-section" id="pricing">
    <div class="container text-center">
      <h2 class="section-title">Home Inspection Prices</h2>
      <p class="section-sub">No quote call needed. Find your home's size, add any tests you want, and that's your price.</p>
      <div class="pricing-grid">
        <div class="price-card">
          <h3>Full Home Inspection</h3>
          <p class="price-card-sub">Priced by finished square footage</p>
          <table class="price-table">
            <tbody>
${tiers}
            </tbody>
          </table>
        </div>
        <div class="price-card">
          <h3>Add-On Tests &amp; Visits</h3>
          <p class="price-card-sub">Added to any inspection</p>
          <table class="price-table">
            <tbody>
${addOns}
            </tbody>
          </table>
        </div>
      </div>
      <div class="price-included">
        <strong>Included in every inspection:</strong>
        <ul>${included}</ul>
      </div>
      <p class="price-fineprint">${escapeHtml(pricingFinePrint())}</p>
      <div class="cta-actions price-actions">
        <a href="tel:${config.phoneTel}" class="btn btn-primary">Call to Book: ${config.phoneDisplay}</a>
        <a href="#quote" class="btn btn-outline-dark">Book Online</a>
      </div>
    </div>
  </section>`;
}

// Plain-text version for FAQ answers (visible text and FAQPage schema).
function addOnPrice(name) {
  const a = config.pricing.addOns.find(x => x.name === name);
  if (!a) throw new Error(`site-config.js pricing.addOns has no "${name}" entry`);
  return a.price;
}

function pricingFinePrint() {
  return config.pricing.fineprint.replace('{pre1940}', config.pricing.pre1940Surcharge);
}

// "$299 up to 1,200 sq ft, $349 up to 2,000 sq ft, ..." built from the
// tier sizes, skipping the open-ended "Over ..." tier.
function pricingFaqAnswer() {
  const tiers = config.pricing.homeTiers
    .map(t => ({ price: t.price, upTo: (t.size.match(/^(?:Up to |[\d,]+ – )([\d,]+) sq ft$/) || [])[1] }))
    .filter(t => t.upTo);
  const list = tiers.map(t => `${t.price} up to ${t.upTo} sq ft`);
  const tierText = list.slice(0, -1).join(', ') + ', and ' + list[list.length - 1];
  return `We charge fixed prices by finished square footage: ${tierText}. Homes built before 1940 add ${config.pricing.pre1940Surcharge}. Radon testing (${addOnPrice('Radon test')}), sewer scope (${addOnPrice('Sewer scope')}), and a termite/WDO report (${addOnPrice('Termite / WDO report')}) can be added. The price you see is the price you pay, with nothing added on site.`;
}

function radonFaqSentence() {
  return `Added to an inspection, our radon test is a fixed ${addOnPrice('Radon test')}.`;
}

// ── Mobile call bar ─────────────────────────────────────────
// Fixed to the bottom of the screen at phone widths (CSS hides it on
// desktop). quoteHref is "#quote" on any page that has the lead form.
function renderMobileCallBar(quoteHref = '#quote') {
  return `  <div class="mobile-cta" role="navigation" aria-label="Contact">
    <a href="tel:${config.phoneTel}" class="mobile-cta-call">&#128222; Call Now</a>
    <a href="${quoteHref}" class="mobile-cta-quote">Book Online</a>
  </div>`;
}

// ── Lead form ───────────────────────────────────────────────
// Same fields and Web3Forms wiring as the homepage/city hero form.
// Only one per page: ids (lead-form, form-success) are fixed.
function renderLeadFormCard({ title, sub, subject, hidden = {} }) {
  const extra = Object.entries(hidden)
    .map(([k, v]) => `\n          <input type="hidden" name="${escapeHtml(k)}" value="${escapeHtml(v)}" />`)
    .join('');
  return `      <div class="hero-form-card" id="quote">
        <div class="form-title">${escapeHtml(title)}</div>
        <div class="form-sub">${sub}</div>
        <form id="lead-form" novalidate>
          <input type="hidden" name="access_key" value="${config.web3formsKey}" />
          <input type="hidden" name="subject" value="${escapeHtml(subject)}" />
          <input type="hidden" name="redirect" value="false" />${extra}
          <div class="form-group">
            <label for="name">Your Name *</label>
            <input type="text" id="name" name="name" placeholder="John Smith" required autocomplete="name" />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" placeholder="(502) 000-0000" required autocomplete="tel" />
          </div>
          <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required autocomplete="email" />
          </div>
          <div class="form-group">
            <label for="service">Inspection Type</label>
            <select id="service" name="service">
              <option value="">Select an inspection...</option>
              <option>Full Home Inspection</option>
              <option>Pre-Listing / Seller's Inspection</option>
              <option>New Construction Inspection</option>
              <option>Radon Testing</option>
              <option>Termite / WDO Inspection</option>
              <option>Sewer Scope Inspection</option>
              <option>Commercial Property Inspection</option>
              <option>Condo / Townhome Inspection</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Tell us more (optional)</label>
            <textarea id="message" name="message" placeholder="Property address, square footage, age of home, best time to call..."></textarea>
          </div>
          <button type="submit" class="form-submit">Request My Inspection →</button>
          <div class="form-privacy">Your info is private and never shared.</div>
        </form>
        <div class="form-success" id="form-success">
          <div class="check-big"></div>
          <h3>Request Received!</h3>
          <p>We'll call you back ASAP to confirm your inspection time. Check your phone!</p>
        </div>
      </div>`;
}

function renderLeadFormScript() {
  return `  <script>
    (function(){
      var form = document.getElementById('lead-form');
      if (!form) return;
      var label = 'Request My Inspection →';
      var fail = function(btn) { btn.textContent = label; btn.disabled = false; alert('Something went wrong. Please call us directly at ${config.phoneDisplay}.'); };
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var btn = form.querySelector('.form-submit');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
          .then(function(res) { return res.json(); })
          .then(function(data) {
            if (data.success) { form.style.display = 'none'; document.getElementById('form-success').style.display = 'block'; }
            else { fail(btn); }
          })
          .catch(function() { fail(btn); });
      });
    })();
  </script>`;
}

function renderCta() {
  return `      <div class="article-cta">
        <h3>Need a Louisville Home Inspection?</h3>
        <p>Fixed prices from ${config.pricing.homeTiers[0].price}, same-day reports, and Kentucky-licensed inspectors across ${escapeHtml(config.addressLocality)} and the Kentuckiana metro. <a href="/#pricing">See all prices</a>.</p>
        <div class="cta-actions">
          <a href="tel:${config.phoneTel}" class="btn btn-primary">Call ${config.phoneDisplay}</a>
          <a href="#quote" class="btn btn-outline">Book Online</a>
        </div>
      </div>`;
}

function renderArticleForm(article) {
  return `      <div class="article-form">
${renderLeadFormCard({
  title: 'Book Your Louisville Home Inspection',
  sub: `Fixed prices from ${config.pricing.homeTiers[0].price} · <a href="/#pricing">See all prices</a> · No obligation`,
  subject: `New Lead — Blog: ${article.title}`,
  hidden: { source_page: `/blog/${article.slug}` }
})}
      </div>`;
}

function renderRelatedPosts(article, articlesBySlug) {
  const cards = article.relatedSlugs
    .map(slug => articlesBySlug.get(slug))
    .filter(Boolean)
    .map(a => `<a href="/blog/${a.slug}" class="related-card">${escapeHtml(a.title)}</a>`)
    .join('\n        ');
  return `      <div class="related-posts">
        <h3>Related Articles</h3>
        <div class="related-grid">
          ${cards}
        </div>
      </div>`;
}

function renderArticleBody(article, articlesBySlug) {
  const midpoint = Math.ceil(article.sections.length / 2);
  const parts = [];
  article.sections.forEach((section, i) => {
    parts.push(`      <h2>${escapeHtml(section.h2)}</h2>\n      ${section.html}`);
    if (i === midpoint - 1) {
      parts.push(renderCta());
    }
  });
  return parts.join('\n\n');
}

function renderArticlePage(article, articlesBySlug) {
  const readTime = readTimeFor(article);
  const dateDisplay = formatDate(article.date);
  const canonicalPath = `/blog/${article.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "author": { "@type": "Organization", "name": config.businessName },
    "publisher": {
      "@type": "Organization",
      "name": config.businessName
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${config.domain}${canonicalPath}` },
    "url": `${config.domain}${canonicalPath}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${config.domain}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${config.domain}/blog/` },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `${config.domain}${canonicalPath}` }
    ]
  };

  const extraSchema = `  <script type="application/ld+json">
  ${JSON.stringify(blogPostingSchema, null, 2)}
  </script>
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>`;

  const head = renderHead({
    title: `${article.metaTitle} | ${config.businessName}`,
    description: article.metaDescription,
    canonicalPath,
    ogTitle: article.title,
    ogDescription: article.metaDescription,
    extraSchema
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>

${renderHeader()}

${renderBreadcrumb([
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog/' },
  { label: article.title }
])}

  <header class="article-header">
    <div class="container">
      <span class="article-cat">${escapeHtml(article.category)}</span>
      <h1>${escapeHtml(article.title)}</h1>
      <div class="article-meta">
        <span>${dateDisplay}</span>
        <span>·</span>
        <span>${readTime} min read</span>
      </div>
    </div>
  </header>

  <div class="article-wrap">
    <div class="container">
      <div class="article-body">
      ${article.intro}

${renderArticleBody(article, articlesBySlug)}

${renderArticleForm(article)}

${renderRelatedPosts(article, articlesBySlug)}
      </div>
    </div>
  </div>

${renderFooter()}

${renderMobileCallBar()}

${renderLeadFormScript()}

${renderMenuScript()}

</body>
</html>
`;
}

function renderBlogIndexPage(articles) {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  const cards = sorted.map(a => {
    const readTime = readTimeFor(a);
    return `        <a href="/blog/${a.slug}" class="blog-card">
          <span class="blog-card-cat">${escapeHtml(a.category)}</span>
          <h2>${escapeHtml(a.title)}</h2>
          <p>${escapeHtml(a.metaDescription)}</p>
          <div class="blog-card-meta">
            <span>${formatDate(a.date)}</span>
            <span>·</span>
            <span>${readTime} min read</span>
          </div>
        </a>`;
  }).join('\n');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${config.domain}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${config.domain}/blog/` }
    ]
  };
  const extraSchema = `  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>`;

  const head = renderHead({
    title: `Home Inspection Blog | Tips, Pricing &amp; Guides | ${config.businessName}`,
    description: `Pricing guides, Kentucky-specific regulations, seasonal maintenance checklists, and expert home inspection advice for Louisville, Jefferson County, and the Kentuckiana metro.`,
    canonicalPath: '/blog/',
    ogTitle: `Home Inspection Blog | ${config.businessName}`,
    ogDescription: `Pricing guides, maintenance checklists, and expert inspection advice for the Louisville metro.`,
    extraSchema
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
${head}
</head>
<body>

${renderHeader()}

${renderBreadcrumb([
  { label: 'Home', href: '/' },
  { label: 'Blog' }
])}

  <section class="blog-hero">
    <div class="container">
      <h1>Home Inspection Tips &amp; Guides</h1>
      <p>Pricing breakdowns, Kentucky-specific regulations, seasonal maintenance checklists, and honest advice from ${escapeHtml(config.businessName)} — serving ${escapeHtml(config.addressLocality)} and the Kentuckiana metro.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="blog-grid">
${cards}
      </div>
    </div>
  </section>

${renderFooter()}

${renderMobileCallBar('/#quote')}

${renderMenuScript()}

</body>
</html>
`;
}

module.exports = {
  renderArticlePage, renderBlogIndexPage, readTimeFor, formatDate, renderIconMeta,
  renderPricingSection, pricingFaqAnswer, radonFaqSentence, renderMobileCallBar
};
