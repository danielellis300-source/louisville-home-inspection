/* ════════════════════════════════════════════════════════════
   City landing page generator — Louisville Home Inspection Services
   Invoked from scripts/generate.js.
   Produces: <slug>.html at the site root, one per entry in
   scripts/city-data.js. Structure mirrors index.html; shared CSS
   is pulled from /assets/style.css rather than inlined.
   ════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');
const config = require('./site-config');
const cityData = require('./city-data');
const articles = require('./blog-data');
const { renderIconMeta, readTimeFor } = require('./template');

const ROOT = path.join(__dirname, '..');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Link the phone number inside an otherwise plain-text string.
function linkPhone(text) {
  return escapeHtml(text).split(config.phoneDisplay).join(
    `<a href="tel:${config.phoneTel}" style="color:#374151">${config.phoneDisplay}</a>`
  );
}

const NEARBY_COUNT = 5;

// Hrefs keep their leading slash so they resolve from any folder depth.
function renderAreaPills(currentSlug) {
  return config.cities.map(c => {
    const cls = c.file === `/${currentSlug}` ? 'area-pill current' : 'area-pill';
    return `        <a href="${c.file}" class="${cls}">${escapeHtml(c.name)}</a>`;
  }).join('\n');
}

function renderFooterAreas() {
  return config.cities
    .map(c => `            <li><a href="${c.file}">${escapeHtml(c.name)}</a></li>`)
    .join('\n');
}

// Evergreen guides linked from every city page. Titles/categories come
// from blog-data.js so they can't drift from the articles themselves.
const GUIDE_SLUGS = [
  'home-inspection-cost-louisville',
  'what-does-a-home-inspection-cover',
  'how-to-prepare-your-home-for-inspection'
];

function renderHelpfulGuides() {
  const cards = GUIDE_SLUGS.map(slug => {
    const a = articles.find(x => x.slug === slug);
    if (!a) throw new Error(`Helpful Guides: blog slug "${slug}" not found in blog-data.js`);
    return `        <a href="/blog/${a.slug}" class="blog-card">
          <span class="blog-card-cat">${escapeHtml(a.category)}</span>
          <h3>${escapeHtml(a.title)}</h3>
          <p>${escapeHtml(a.metaDescription)}</p>
          <div class="blog-card-meta"><span>${readTimeFor(a)} min read</span></div>
        </a>`;
  }).join('\n');
  return `  <section class="section guides-section">
    <div class="container text-center">
      <h2 class="section-title">Helpful Guides</h2>
      <p class="section-sub">Straight answers on pricing, what an inspection covers, and how to get ready</p>
      <div class="blog-grid guides-grid">
${cards}
      </div>
    </div>
  </section>`;
}

function nearbyCities(currentSlug) {
  const others = config.cities.filter(c => c.file !== '/' && c.file.replace(/^\//, '') !== currentSlug);
  // Rotate the list so each page's areaServed lists a different slice.
  const start = Math.max(0, others.findIndex(c => c.file.replace(/^\//, '') > currentSlug));
  const rotated = others.slice(start).concat(others.slice(0, start));
  return ['Louisville'].concat(rotated.slice(0, NEARBY_COUNT).map(c => c.name));
}

function radonServiceCopy(region) {
  return region === 'IN'
    ? 'Clark and Floyd Counties in Southern Indiana sit in EPA Radon Zone 1. We run a continuous 48-hour test so you know your family is safe.'
    : 'Jefferson, Oldham, and Bullitt Counties all sit in EPA Radon Zone 1. We run a continuous 48-hour test so you know your family is safe.';
}

function licensingWhyCopy(region) {
  return region === 'IN'
    ? 'Indiana does not license home inspectors, so we lead with our certification, a recognized standards of practice, and full errors-and-omissions and liability insurance.'
    : 'Every inspection is performed by an inspector who holds current Kentucky licensure, carries the required insurance, and follows a recognized standards of practice.';
}

function disclosureCopy(region) {
  return region === 'IN'
    ? "complete your Indiana sales disclosure (IC 32-21-5) accurately"
    : "complete your Kentucky Seller's Disclosure of Property Conditions accurately";
}

function renderCityPage(city) {
  const {
    slug, name, region, stateName, stateAbbr, county, countyLabel,
    geo, hood, costRange, blurb1, blurb2, faqLocal
  } = city;

  const url = `${config.domain}/${slug}`;
  const title = `Home Inspection in ${name}, ${stateAbbr} | ${config.businessName} | ${config.phoneDisplay}`;
  const metaDesc = `Certified home inspectors in ${name}, ${stateAbbr}. Serving ${countyLabel} and the Louisville metro. Same-day reports, upfront pricing. Free quote — call ${config.phoneDisplay}.`;

  const areaServed = nearbyCities(slug)
    .map(n => `      {"@type": "City", "name": ${JSON.stringify(n)}}`)
    .join(',\n');

  const howLongAnswer = `Most ${name} home inspections take 2 to 4 hours depending on the size and age of the property. Older homes with basements, crawl spaces, or additions can take longer. We encourage buyers to attend so we can walk through the findings together in person.`;

  const faqs = [
    {
      q: `How much does a home inspection cost in ${name}, ${stateAbbr}?`,
      a: `Home inspections in ${name} typically range from ${costRange} depending on the size, age, and type of property. Add-on tests such as radon, sewer scope, and termite/WDO are priced separately. We always provide a firm, no-obligation quote before booking — call ${config.phoneDisplay}.`
    },
    { q: faqLocal.q, a: faqLocal.a },
    { q: `How long does a home inspection take in ${name}?`, a: howLongAnswer }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  // Mirrors the visible breadcrumb: Home › Home Inspection in <City>
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${config.domain}/` },
      { "@type": "ListItem", "position": 2, "name": `Home Inspection in ${name}, ${stateAbbr}`, "item": url }
    ]
  };

  const localBusinessSchema = `  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": ${JSON.stringify(config.businessName)},
    "@id": "${config.domain}/#business",
    "url": "${config.domain}/",
    "telephone": ${JSON.stringify(config.phoneDisplay)},
    "priceRange": "$$",
    "description": ${JSON.stringify(`Professional home inspection services in ${name}, ${stateName} and the surrounding Louisville metro.`)},
    "address": {
      "@type": "PostalAddress",
      "addressLocality": ${JSON.stringify(name)},
      "addressRegion": ${JSON.stringify(stateAbbr)},
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": ${geo.lat},
      "longitude": ${geo.lng}
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "08:00", "closes": "17:00" }
    ],
    "areaServed": [
${areaServed}
    ]
  }`;

  const faqItems = faqs.map(f => `        <div class="faq-item">
          <button class="faq-question" aria-expanded="false">
            ${escapeHtml(f.q)}
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="faq-answer" role="region">
            <div class="faq-answer-inner">
              ${linkPhone(f.a)}
            </div>
          </div>
        </div>`).join('\n\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(metaDesc)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${escapeHtml(`Home Inspection in ${name}, ${stateAbbr} | ${config.businessName}`)}" />
  <meta property="og:description" content="${escapeHtml(`Certified home inspections in ${name}, ${stateAbbr}. Same-day reports — call ${config.phoneDisplay}.`)}" />

  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="website" />
  <meta name="geo.region" content="US-${stateAbbr}" />
  <meta name="geo.placename" content="${escapeHtml(name)}" />

  ${renderIconMeta()}

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/style.css" />

  <script type="application/ld+json">
${localBusinessSchema}
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbSchema, null, 2)}
  </script>
</head>
<body>

  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="logo">Louisville<span>Home</span> Inspection Services</a>
      <div class="header-right">
        <div class="header-phone">Call us: <a href="tel:${config.phoneTel}">${config.phoneDisplay}</a></div>
        <a href="#quote" class="btn btn-primary">Free Quote</a>
        <div class="menu-wrap">
          <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="menuDropdown">&#9776; Menu</button>
          <div class="menu-dropdown" id="menuDropdown" role="menu">
            <a href="/">Home</a>
            <a href="/#services">Services</a>
            <a href="/#areas">Service Areas</a>
            <a href="#quote">Get a Quote</a>
            <a href="/blog/">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav class="breadcrumb">
    <div class="container">
      <a href="/">Home</a><span>›</span>Home Inspection in ${escapeHtml(name)}, ${stateAbbr}
    </div>
  </nav>

  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <div class="hero-badge">Serving ${escapeHtml(name)}, ${stateAbbr} &amp; ${escapeHtml(county)}</div>
        <h1>Trusted <em>Home Inspectors</em><br>in ${escapeHtml(name)}, ${stateAbbr}</h1>
        <p class="hero-sub">
          Certified home inspections for ${escapeHtml(name)} and ${escapeHtml(hood)}. Same-day reports, upfront pricing, no hidden fees.
        </p>
        <div class="hero-actions">
          <a href="tel:${config.phoneTel}" class="btn btn-primary" style="font-size:1.1rem; padding:17px 28px;">
            Call ${config.phoneDisplay}
          </a>
          <a href="#quote" class="btn btn-outline">Get Free Quote Online</a>
        </div>
        <div class="trust-row">
          <div class="trust-item">Same-Day Reports</div>
          <div class="trust-item">Upfront Pricing</div>
          <div class="trust-item">7 Days/Wk Scheduling</div>
          <div class="trust-item">Free Quotes</div>
        </div>
      </div>
      <div class="hero-form-card" id="quote">
        <div class="form-title">Get Your Free ${escapeHtml(name)} Quote</div>
        <div class="form-sub">We respond fast · No obligation, no pressure</div>
        <form id="lead-form" novalidate>
          <input type="hidden" name="access_key" value="${config.web3formsKey}" />
          <input type="hidden" name="subject" value="New Lead — ${escapeHtml(name)} Home Inspection" />
          <input type="hidden" name="redirect" value="false" />
          <input type="hidden" name="location" value="${escapeHtml(name)}, ${stateAbbr}" />
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
          <button type="submit" class="form-submit">Send My Free Quote Request →</button>
          <div class="form-privacy">Your info is private and never shared.</div>
        </form>
        <div class="form-success" id="form-success">
          <div class="check-big"></div>
          <h3>Request Received!</h3>
          <p>We'll call you back ASAP to confirm your free quote. Check your phone!</p>
        </div>
      </div>
    </div>
  </section>

  <div class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item"><span class="stat-num">24–48 Hrs</span><span class="stat-label">Typical Scheduling Window</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-num">Same-Day</span><span class="stat-label">Reports Delivered</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-num">7 Days/Wk</span><span class="stat-label">Evening &amp; Weekend Availability</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-num">$0</span><span class="stat-label">Cost For A Quote</span></div>
      </div>
    </div>
  </div>

  <section class="section" id="services">
    <div class="container text-center">
      <h2 class="section-title">Home Inspection Services in ${escapeHtml(name)}, ${stateAbbr}</h2>
      <p class="section-sub">Comprehensive inspections protecting ${escapeHtml(name)} home buyers and sellers — thorough, honest, and reliable</p>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>Full Home Inspection</h3>
          <p>A complete top-to-bottom evaluation of the home's structure, systems, and components — from the roof to the foundation, basement, and crawl space.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>Pre-Listing Inspection</h3>
          <p>${escapeHtml(name)} sellers — know your home's condition before buyers do. Price confidently, ${disclosureCopy(region)}, and close faster.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>New Construction Inspection</h3>
          <p>Brand-new doesn't mean problem-free. We inspect new builds at key phases and before the final walkthrough, while the builder is still responsible.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>Radon Testing</h3>
          <p>${radonServiceCopy(region)}</p>
        </div>
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>Termite / WDO Inspection</h3>
          <p>The Louisville metro sits in a heavy termite-pressure zone. We provide the wood-destroying organism report lenders often require on FHA and VA loans.</p>
        </div>
        <div class="service-card">
          <div class="service-icon"></div>
          <h3>Sewer Scope Inspection</h3>
          <p>We camera-inspect the private lateral from the home to the main, catching cracks, root intrusion, and offsets common in older clay-tile lines.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section about-city">
    <div class="container">
      <h2 class="section-title text-center">Home Inspections in ${escapeHtml(name)}, ${escapeHtml(stateName)}</h2>
      <p class="section-sub text-center">Local knowledge of ${escapeHtml(countyLabel)} housing stock</p>
      <div class="about-city-inner">
        <p>${blurb1}</p>
        <p>${blurb2}</p>
      </div>
    </div>
  </section>

  <section class="section why-section">
    <div class="container text-center">
      <h2 class="section-title">Why ${escapeHtml(name)} Home Buyers Choose Us</h2>
      <p class="section-sub">We built our reputation one inspection at a time — and we intend to keep it</p>
      <div class="why-grid">
        <div class="why-item">
          <div class="why-icon">1</div>
          <h3>Qualified Inspectors</h3>
          <p>${licensingWhyCopy(region)}</p>
        </div>
        <div class="why-item">
          <div class="why-icon">2</div>
          <h3>Detailed, Clear Reports</h3>
          <p>Photo-rich, easy-to-read reports delivered the same day — a real narrative of every finding, not just a checklist.</p>
        </div>
        <div class="why-item">
          <div class="why-icon">3</div>
          <h3>Local Housing Knowledge</h3>
          <p>Knob-and-tube, FPE Stab-Lok panels, polybutylene plumbing, karst settlement, and floodplain drainage — we know what this market hides.</p>
        </div>
        <div class="why-item">
          <div class="why-icon">4</div>
          <h3>Fast Scheduling</h3>
          <p>7 days a week, evenings and weekends included — so you never miss a closing deadline.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container text-center">
      <h2 class="section-title">How Our ${escapeHtml(name)} Home Inspection Works</h2>
      <p class="section-sub">3 simple steps from booking to your detailed report</p>
      <div class="process-steps">
        <div class="process-step">
          <div class="step-num">1</div>
          <h3>Call or Fill Out the Form</h3>
          <p>Call ${config.phoneDisplay} or submit the form above. We'll gather property details and lock in a time that works for your schedule.</p>
        </div>
        <div class="process-step">
          <div class="step-num">2</div>
          <h3>We Inspect the Property</h3>
          <p>Your inspector arrives on time and conducts a thorough 2–4 hour inspection. We encourage you to attend and ask questions.</p>
        </div>
        <div class="process-step">
          <div class="step-num">3</div>
          <h3>Receive Your Report</h3>
          <p>Your detailed, photo-rich inspection report is delivered electronically the same day — ready to share with your agent or seller.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section areas-section" id="areas">
    <div class="container text-center">
      <h2 class="section-title">All Areas We Serve</h2>
      <p class="section-sub">We cover ${escapeHtml(name)} and the greater Louisville metro on both sides of the river. Not sure if we reach you? Just call ${config.phoneDisplay}.</p>
      <div class="areas-grid">
${renderAreaPills(slug)}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container text-center">
      <h2 class="section-title">Home Inspection FAQs — ${escapeHtml(name)}, ${stateAbbr}</h2>
      <p class="section-sub">Common questions about home inspections in ${escapeHtml(name)} and ${escapeHtml(countyLabel)}</p>
      <div class="faq-list">

${faqItems}

      </div>
    </div>
  </section>

${renderHelpfulGuides()}

  <section class="cta-banner">
    <div class="container">
      <h2>Ready to Schedule Your ${escapeHtml(name)} Home Inspection?</h2>
      <p>Call now to book a certified home inspection in ${escapeHtml(name)}, ${stateAbbr}. Fast scheduling, same-day reports, zero hassle.</p>
      <div class="cta-actions">
        <a href="tel:${config.phoneTel}" class="btn btn-white" style="font-size:1.08rem; padding:17px 32px;">Call ${config.phoneDisplay}</a>
        <a href="#quote" class="btn btn-outline">Request Online Quote</a>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">Louisville<span>Home</span> Inspection Services</div>
          <div class="footer-nap">
            <strong style="color:#ddd;">Serving ${escapeHtml(name)} &amp; Greater Louisville</strong><br>
            Phone: <a href="tel:${config.phoneTel}">${config.phoneDisplay}</a><br>
            Email: <a href="mailto:${config.email}">${config.email}</a><br>
            Serving ${escapeHtml(county)} &amp; the Kentuckiana metro
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
${renderFooterAreas()}
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="color:#ddd;">
        &copy; 2026 ${escapeHtml(config.businessName)}. All rights reserved.
      </div>
    </div>
  </footer>

  <script>
    document.querySelectorAll('.faq-question').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var item = btn.closest('.faq-item');
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function(el) {
          el.classList.remove('open');
          el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
      });
    });
    document.getElementById('lead-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var form = this;
      var btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.success) { form.style.display = 'none'; document.getElementById('form-success').style.display = 'block'; }
          else { btn.textContent = 'Send My Free Quote Request →'; btn.disabled = false; alert('Something went wrong. Please call us directly at ${config.phoneDisplay}.'); }
        })
        .catch(function() { btn.textContent = 'Send My Free Quote Request →'; btn.disabled = false; alert('Something went wrong. Please call us directly at ${config.phoneDisplay}.'); });
    });
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  </script>
  <script>
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
  </script>

</body>
</html>
`;
}

function generateCityPages() {
  const known = new Set(config.cities.filter(c => c.file !== '/').map(c => c.file.replace(/^\//, '')));
  cityData.forEach(city => {
    if (!known.has(city.slug)) {
      console.warn(`WARNING: city-data slug "${city.slug}" is not in site-config.js cities — page will still be written but has no sitemap/redirect entry.`);
    }
    const html = renderCityPage(city);
    const outPath = path.join(ROOT, `${city.slug}.html`);
    fs.writeFileSync(outPath, html, 'utf8');
    console.log('wrote', path.relative(ROOT, outPath));
  });

  const dataSlugs = new Set(cityData.map(c => c.slug));
  config.cities.filter(c => c.file !== '/').forEach(c => {
    const slug = c.file.replace(/^\//, '');
    if (!dataSlugs.has(slug)) {
      console.warn(`WARNING: site-config city "${slug}" has no entry in city-data.js — no page generated.`);
    }
  });
}

module.exports = { generateCityPages, renderCityPage };
