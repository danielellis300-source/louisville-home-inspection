/* ════════════════════════════════════════════════════════════
   Blog article content — Louisville Home Inspection Services
   One object per article. Rendered into full pages by template.js
   via generate.js. Target: 600–900 words across 4–6 H2 sections.

   Internal links use clean URLs: /blog/<slug> for articles,
   /<city-slug> for the suburb landing pages.
   ════════════════════════════════════════════════════════════ */

module.exports = [

// ─────────────────────────────────────────────────────────────
// 1
{
  slug: "home-inspection-cost-louisville",
  title: "How Much Does a Home Inspection Cost in Louisville? (2026 Price Guide)",
  metaTitle: "Home Inspection Cost in Louisville 2026 | Price Guide",
  metaDescription: "Real 2026 home inspection prices for Louisville and Jefferson County — by home size, add-on tests, and what actually drives the cost up or down.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-by-square-footage", "what-does-a-home-inspection-cover", "how-to-choose-a-home-inspector-in-louisville"],
  intro: `<p>If you're buying a home in Louisville, the inspection is one of the smallest numbers on your closing statement and one of the highest-leverage. A $375 inspection can surface $18,000 in deferred roof, sewer, or HVAC work before you're legally committed to it. Here's what inspections actually cost across the Louisville metro right now, what's included, and what moves the price up or down.</p>`,
  sections: [
    {
      h2: "Typical Louisville home inspection pricing",
      html: `<p>A standard full home inspection in Louisville and Jefferson County generally runs <strong>$300 to $500</strong>, with most single-family homes between 1,400 and 2,600 square feet landing around $350–$425. Condos and smaller shotgun houses in Germantown or Old Louisville often come in under $325, while larger homes in Prospect, Anchorage, and eastern Oldham County can run $450–$700+ once square footage, outbuildings, and add-on tests are factored in.</p>
      <p>Pricing is almost always based on square footage and age rather than a flat rate. A 1,100 sq ft bungalow in the Highlands and an 1,100 sq ft ranch in <a href="/okolona">Okolona</a> should cost about the same, all else equal. If a quote seems disconnected from the home's actual size, ask what it's based on before booking.</p>`
    },
    {
      h2: "What's included in a standard inspection fee",
      html: `<p>The base fee covers a full visual inspection of the roof, attic and insulation, structural components, foundation, basement or crawl space, exterior grading and drainage, HVAC, plumbing, electrical panel and wiring, and every interior room, plus a same-day digital report with photos. A typical visit runs 2–4 hours on site, with the written report usually delivered the same evening.</p>
      <p>It does <em>not</em> automatically include radon testing, sewer scope, a termite/WDO report, or well and septic evaluation. Those are priced separately because they require extra equipment, lab time, or a longer on-site window. Always ask for the full scope, not just the base number, before comparing quotes between inspectors.</p>`
    },
    {
      h2: "Common add-on tests and their cost",
      html: `<ul>
        <li><strong>Radon testing:</strong> typically $125–$175 bundled, run over a continuous 48-hour period. Jefferson, Oldham, and Bullitt Counties are all in EPA Radon Zone 1, so this one is worth it on nearly every purchase.</li>
        <li><strong>Sewer scope inspection:</strong> typically $150–$250 depending on line length and cleanout access — high priority in Old Louisville, the Highlands, Clifton, and Germantown.</li>
        <li><strong>Termite / wood-destroying organism (WDO) report:</strong> typically $75–$150, and frequently required by lenders on FHA and VA loans in Kentucky.</li>
        <li><strong>Well and septic inspection:</strong> $150–$400, common on the rural edges of Oldham and Bullitt Counties and in parts of <a href="/anchorage">Anchorage</a>.</li>
      </ul>
      <p>Bundling add-ons with your main inspection is almost always cheaper than a separate visit later, since the inspector is already on site. Ask for an all-in quote up front rather than pricing each item after the fact.</p>`
    },
    {
      h2: "What makes Louisville pricing go up",
      html: `<p>Five things reliably push the quote higher: square footage over 3,000 sq ft; a crawl space or unfinished basement that has to be physically entered rather than viewed from a hatch; homes built before 1940 (Old Louisville, the older Highlands, downtown <a href="/new-albany">New Albany</a>) that may have knob-and-tube wiring, plaster, and original systems needing extra attention; detached structures like a carriage house or pole barn; and karst or floodplain lots where foundation and drainage conditions take longer to document.</p>
      <p>Homes on private well and septic on the outer edges of the metro also run higher, since each of those systems is essentially its own mini-inspection. Spring and early summer, the busiest local buying season, can also mean less flexibility on same-week scheduling — booking a day or two earlier than you think you need to rarely hurts.</p>`
    },
    {
      h2: "Is the cheapest inspector actually the best deal?",
      html: `<p>Rarely. A rock-bottom price often signals a rushed inspection, an inspector cutting time on site, or a report with no photos. In a $300,000-plus purchase, the difference between a $300 inspector and a $450 inspector is a rounding error — but the difference between a thorough report and a thin one can cost you tens of thousands after closing.</p>
      <p>Kentucky does license home inspectors, which sets a floor, but license status alone doesn't tell you how detailed the report will be. Ask what a quote excludes, not just what it includes, and see our guide on <a href="/blog/how-to-choose-a-home-inspector-in-louisville">choosing a home inspector in Louisville</a> for the specific red flags to watch for.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A standard Louisville home inspection runs $300–$500, with most 1,400–2,600 sq ft homes landing around $350–$425.</li>
        <li>Radon, sewer scope, termite/WDO, and well/septic evaluation are separate add-ons, not part of the base fee.</li>
        <li>Pre-1940 homes, homes over 3,000 sq ft, and karst or floodplain lots take longer to inspect and cost more.</li>
        <li>The cheapest quote in town is rarely the best value once you factor in report quality and time on site.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 2
{
  slug: "home-inspection-cost-by-square-footage",
  title: "Home Inspection Cost by Home Size: What Louisville Buyers Should Budget",
  metaTitle: "Home Inspection Cost by Square Footage | Louisville",
  metaDescription: "A size-by-size breakdown of home inspection pricing in Louisville — from 800 sq ft shotgun houses to 4,000+ sq ft homes in Prospect and Anchorage.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-louisville", "new-construction-inspection-cost-louisville", "first-time-home-buyer-inspection-guide-louisville"],
  intro: `<p>Square footage is the single biggest driver of home inspection pricing — more than location, more than age, more than the number of bathrooms. Time on site scales with the amount of house there is to walk, photograph, and test, and most Louisville inspectors price accordingly. Here's roughly what to expect at each size tier locally, so you can budget before you request a quote.</p>`,
  sections: [
    {
      h2: "Under 1,200 sq ft — shotgun houses, condos, starter homes",
      html: `<p>Expect to pay <strong>$275–$340</strong>. Smaller footprints take less time to walk, and condos and townhomes often exclude exterior and roof responsibilities that belong to an HOA rather than the unit owner. If you're buying a condo, confirm exactly what's in scope — some HOA-maintained items (shared roofs, siding, common mechanicals) may be excluded from the report entirely, which is normal but worth knowing in advance. Classic Louisville shotgun houses in Germantown, Schnitzelburg, and Portland fall in this tier but often need a sewer scope on top, given their age.</p>`
    },
    {
      h2: "1,200–2,000 sq ft — the Louisville sweet spot",
      html: `<p>This is where most Jefferson County resale homes fall, and pricing typically runs <strong>$330–$425</strong>. The band covers the classic Highlands bungalow and Four-Square, St. Matthews Cape Cods and Tudors, and comparable homes in <a href="/lyndon">Lyndon</a>, <a href="/fern-creek">Fern Creek</a>, and <a href="/clarksville">Clarksville</a>. Most inspections in this range take about 2.5–3 hours on site.</p>`
    },
    {
      h2: "2,000–3,000 sq ft — larger family homes",
      html: `<p>Budget <strong>$400–$500</strong>. This size is common in newer subdivisions across <a href="/middletown">Middletown</a>, <a href="/mount-washington">Mount Washington</a>, and <a href="/la-grange">La Grange</a>, where two-story homes with finished basements and three-car garages push both square footage and inspection time up. A finished basement in this range typically adds 30–45 minutes to the visit, since it's inspected with the same rigor as the rest of the living space.</p>`
    },
    {
      h2: "3,000+ sq ft — larger homes in Prospect and Anchorage",
      html: `<p>Expect <strong>$500–$750+</strong>. Beyond 3,000 sq ft, inspectors are often walking multiple HVAC zones, larger electrical service (200-amp or higher), and finished lower levels, which adds real time to both the visit and the report. If the home has a pool, outbuilding, guest suite, or a hillside or riverfront lot, ask whether that's quoted separately — it usually is, and it's better to know before the invoice than after.</p>`
    },
    {
      h2: "Basements and crawl spaces change the math",
      html: `<p>A finished basement adds livable square footage and cost, since it's inspected to the same standard as any above-grade room. An unfinished basement or crawl space doesn't add "square footage" in the traditional sense, but it does add inspection time — especially a crawl space that requires the inspector to physically enter and photograph framing, insulation, and moisture conditions, which is common given the region's clay soil and, in the south and west of the county, a high water table.</p>
      <p>See our guide on <a href="/blog/crawl-space-basement-inspection-guide-louisville">crawl space and basement inspections</a> for what that part of the visit involves. Ranges like these are useful for budgeting, but pricing shouldn't be a guessing game once you have an address and listing sheet — tell us the square footage, age, and any known extras and we'll give you a firm number before you book.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Under 1,200 sq ft: $275–$340. 1,200–2,000 sq ft: $330–$425. 2,000–3,000 sq ft: $400–$500. 3,000+ sq ft: $500–$750+.</li>
        <li>Condos and townhomes often exclude HOA-maintained items like shared roofs, so confirm scope before booking.</li>
        <li>A finished basement is inspected like any other living space and typically adds 30–45 minutes.</li>
        <li>Pools, guest suites, hillside lots, and detached outbuildings are usually quoted separately from the base price.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 3
{
  slug: "radon-testing-cost-louisville",
  title: "Radon Testing Cost in Louisville: What to Expect and Why It's Worth It",
  metaTitle: "Radon Testing Cost in Louisville | What to Expect",
  metaDescription: "Radon test pricing in Louisville, how the 48-hour test works, and why Jefferson, Oldham, and Bullitt Counties all sit in EPA Radon Zone 1.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["radon-levels-kentucky-do-i-need-a-test", "home-inspection-cost-louisville", "what-does-a-home-inspection-cover"],
  intro: `<p>Radon is invisible, odorless, and the second-leading cause of lung cancer in the United States after smoking. Most of the Louisville metro sits in an EPA zone where elevated levels are common. Here's what a radon test actually costs in Louisville, how the process works, and how to make sense of the number that comes back.</p>
      <p>Radon almost always comes up during a real estate transaction rather than as a routine homeowner check-in, which means the test has to fit inside an already tight inspection contingency window. Building it into your first inspection appointment, rather than as an afterthought once the rest of the report comes back, keeps your timeline intact.</p>`,
  sections: [
    {
      h2: "What a radon test costs",
      html: `<p>Bundled with a home inspection, a radon test in Louisville typically runs <strong>$125–$175</strong>. As a standalone service scheduled separately, expect closer to $150–$225, since the technician has to make a dedicated trip to place and later retrieve the monitor. Bundling with your full inspection is almost always the better value, and results come back on the same general timeline as the rest of your report.</p>`
    },
    {
      h2: "How the test actually works",
      html: `<p>A continuous radon monitor is placed in the lowest livable level of the home — usually the basement — and left running for a minimum 48-hour period. The home needs "closed house conditions" during that window: windows shut, exterior doors used normally, HVAC running as it normally would. Opening windows or running whole-house fans during the test can invalidate the results, so if you're the seller and a test is underway, mention it to whoever's still living there.</p>`
    },
    {
      h2: "Reading your results",
      html: `<p>The EPA action level is <strong>4.0 pCi/L</strong>. Results below that are considered acceptable, though the EPA notes there's no truly "safe" level and mitigation can be worth considering between 2 and 4 pCi/L, especially for a household with children or anyone with respiratory concerns. Results above 4.0 pCi/L warrant a radon mitigation system, which typically costs $800–$1,500 installed in the Louisville area and can often be negotiated into the purchase agreement as a seller-paid item.</p>`
    },
    {
      h2: "Why Louisville-area homes test high so often",
      html: `<p>Jefferson, Oldham, Bullitt, Shelby, Spencer, and Nelson Counties all fall within <strong>EPA Radon Zone 1</strong>, the highest potential category, largely due to the region's limestone and karst geology. It's common for homes on opposite sides of the same street to test differently, since radon migrates through soil gas and enters through foundation cracks, sump pits, and slab penetrations. A neighbor's clean test tells you little about your own home, and a test from several years ago shouldn't be assumed still accurate.</p>
      <p>Kentucky also certifies radon measurement and mitigation professionals under state law, so ask whether your tester holds current Kentucky radon certification.</p>`
    },
    {
      h2: "Should every buyer test?",
      html: `<p>Yes. Radon mitigation is one of the few inspection findings that's genuinely cheap to fix relative to the health risk of ignoring it, and testing adds only a modest amount to your total inspection invoice. On a cost-benefit basis, it's one of the easiest add-ons to justify of any service we offer.</p>
      <p>For how radon risk breaks down county by county across the metro and whether Kentucky law requires it, see our guide to <a href="/blog/radon-levels-kentucky-do-i-need-a-test">radon testing in Kentucky</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A bundled radon test in Louisville costs $125–$175; a standalone test runs $150–$225.</li>
        <li>The test requires a continuous 48-hour monitoring period under closed-house conditions.</li>
        <li>The EPA action level is 4.0 pCi/L, and Jefferson, Oldham, and Bullitt Counties all sit in Zone 1.</li>
        <li>Mitigation systems typically run $800–$1,500 and can often be negotiated as a seller-paid repair.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 4
{
  slug: "sewer-scope-inspection-cost-louisville",
  title: "Sewer Scope Inspection Cost in Louisville: Is It Worth the Extra Money?",
  metaTitle: "Sewer Scope Inspection Cost Louisville | Worth It?",
  metaDescription: "What a sewer scope costs in Louisville, why older neighborhoods and MSD private laterals make it essential, and what a bad line costs to fix.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-louisville", "common-issues-found-in-louisville-home-inspections", "what-does-a-home-inspection-cover"],
  intro: `<p>A sewer scope is the one add-on that regularly pays for itself many times over. For $150–$250, it can catch a problem that costs $6,000–$15,000 to fix after closing — and it's one of the few things a general home inspector cannot substitute for with a visual walkthrough, because the entire line is buried and invisible from above ground.</p>`,
  sections: [
    {
      h2: "What it costs",
      html: `<p>In Louisville, a sewer scope typically runs <strong>$150–$250</strong> when bundled with a full home inspection, depending on the length of the line from the house to the main and how many cleanout access points exist. Homes with difficult access — no exterior cleanout, or a line running under a finished basement slab — push toward the higher end, since more setup time is required.</p>`
    },
    {
      h2: "How it works",
      html: `<p>A flexible camera is fed through an accessible cleanout or the main drain, running the full length of the lateral to the public main or septic tank. The technician records video in real time and can pinpoint the exact distance and location of any defect with a built-in locator — critical information if repairs need to be quoted or negotiated, since contractors price excavation very differently depending on depth and distance from the house.</p>`
    },
    {
      h2: "Why it matters more in older Louisville neighborhoods",
      html: `<p>Homes built before the 1970s in Old Louisville, the Highlands, Clifton, Crescent Hill, Germantown, and older parts of <a href="/st-matthews">St. Matthews</a> and <a href="/new-albany">New Albany</a> often still have original clay-tile or cast iron sewer laterals. Clay tile is prone to root intrusion at the joints as tree roots seek moisture, and cast iron corrodes and eventually collapses from the inside as decades of use wear down the pipe wall. Neither shows up on a visual inspection — the line is buried and the yard looks fine right up until it isn't.</p>
      <p>In Louisville, the portion of the lateral from the house to the connection at the public main is the <strong>property owner's responsibility</strong>, not the Metropolitan Sewer District's, so a failure after closing is entirely your cost.</p>`
    },
    {
      h2: "What a bad line actually costs to fix",
      html: `<p>Minor root intrusion can sometimes be cleared with a $200–$400 rooter service, but a collapsed section or significant offset usually means excavation or trenchless pipe lining, which commonly runs <strong>$4,000–$15,000</strong> depending on depth, length, and whether the line runs under a driveway or mature landscaping. That range is exactly why a $200 scope during due diligence is one of the highest-value add-ons available at any price point.</p>`
    },
    {
      h2: "When it's worth skipping",
      html: `<p>New construction homes with PVC lateral lines rarely need a scope at purchase, since PVC doesn't have the joint-and-root vulnerability of clay tile and shouldn't have decades of wear yet. If you're buying a home built after roughly 2000 in a newer subdivision in <a href="/mount-washington">Mount Washington</a> or eastern Oldham County, ask your inspector whether it's a lower priority for your situation — but for anything older, treat a sewer scope as close to mandatory.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A sewer scope in Louisville typically costs $150–$250, and a bad line can cost $4,000–$15,000+ to fix.</li>
        <li>The lateral from the house to the public main is the property owner's responsibility in Louisville, not MSD's.</li>
        <li>Pre-1970s neighborhoods like Old Louisville, the Highlands, and Germantown are the highest-priority candidates.</li>
        <li>Newer homes with PVC laterals (built after roughly 2000) are generally lower priority for this add-on.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 5
{
  slug: "mold-inspection-cost-louisville",
  title: "Mold Inspection Cost in Louisville: What Drives the Price",
  metaTitle: "Mold Inspection Cost in Louisville | Pricing Guide",
  metaDescription: "What mold testing costs in Louisville, when a visual assessment is enough versus lab sampling, and how Ohio Valley humidity and basements factor in.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["crawl-space-basement-inspection-guide-louisville", "summer-home-maintenance-tips-kentucky-humidity", "home-inspection-cost-louisville"],
  intro: `<p>Mold inspection pricing in Louisville varies more than almost any other add-on service, because "mold inspection" can mean anything from a quick visual assessment to full lab-sampled air and surface testing. Here's how to know what you actually need — and what each option should cost — before you agree to anything.</p>
      <p>Mold questions come up constantly during both buying and selling season in Louisville, especially on homes with older basements or a documented history of water intrusion. Knowing the difference between the two testing tiers before you're standing in a musty basement mid-negotiation puts you in a much stronger position.</p>`,
  sections: [
    {
      h2: "Visual assessment vs. lab-sampled testing",
      html: `<p>A <strong>visual mold assessment</strong> — checking for staining, musty odors, and moisture conditions conducive to mold growth — typically costs $150–$250 and is often included or lightly upcharged as part of a full home inspection. <strong>Lab-sampled testing</strong>, which involves collecting air and/or surface samples and sending them to an independent lab for species identification and spore counts, runs $300–$500+ depending on the number of samples and the lab's turnaround.</p>`
    },
    {
      h2: "When lab testing is worth the extra cost",
      html: `<p>If there's visible staining but no clear moisture source, if a previous water event (flooded basement, roof leak, or Ohio River backwater) is disclosed by the seller, or if a household member has respiratory sensitivities, lab sampling is worth the money. It tells you what species is present and whether levels are elevated compared to outdoor air, rather than just confirming what you can already see.</p>`
    },
    {
      h2: "Where Louisville homes are most at risk",
      html: `<p>Basements and crawl spaces are the two highest-risk zones locally. Louisville's humid, Ohio Valley climate keeps summer dew points high for weeks at a stretch, and clay-heavy soil drains slowly and pushes groundwater against foundation walls after heavy rain. Homes with an undersized or untested sump pump, and homes with grading that slopes water back toward the foundation, see mold and moisture issues at a noticeably higher rate. Low-lying areas near Beargrass Creek, Pond Creek, or the Ohio River carry extra risk for the same reason.</p>`
    },
    {
      h2: "What drives the price up",
      html: `<p>Larger finished basements, multiple suspect areas (an attic <em>and</em> a basement, for example), and requests for post-remediation clearance testing after a mold company has finished all add cost. Clearance testing in particular is worth paying for — it's an independent, third-party verification that remediation actually worked, rather than taking the remediation company's word for it on a job you paid them to do.</p>`
    },
    {
      h2: "The bigger picture",
      html: `<p>Mold itself is rarely the real problem — it's a symptom of an underlying moisture problem that needs its own fix. A good inspection report addresses both: what's growing, and why it's there. If your report flags moisture conditions but not active mold yet, our <a href="/blog/summer-home-maintenance-tips-kentucky-humidity">guide to managing humidity in Kentucky homes</a> covers practical prevention steps before it becomes a bigger, more expensive problem.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Visual assessments run $150–$250; lab-sampled testing with species identification runs $300–$500+.</li>
        <li>Basements and crawl spaces are the highest-risk areas locally due to Ohio Valley humidity and slow-draining clay soil.</li>
        <li>Lab testing is worth it when there's staining with no clear source, a disclosed water event, or a household member with respiratory sensitivities.</li>
        <li>Post-remediation clearance testing independently verifies that a mold job actually worked.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 6
{
  slug: "new-construction-inspection-cost-louisville",
  title: "New Construction Inspection Cost in Louisville: Why New Homes Still Need One",
  metaTitle: "New Construction Inspection Cost | Louisville",
  metaDescription: "What a new construction inspection costs in Louisville, the phases worth inspecting, and why a builder's own inspector isn't enough.",
  category: "Pricing",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-louisville", "what-does-a-home-inspection-cover", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>New doesn't mean flawless. With subdivisions expanding across <a href="/mount-washington">Mount Washington</a>, <a href="/la-grange">La Grange</a>, Norton Commons, and eastern Oldham and Bullitt Counties every year, we inspect newly built homes constantly — and defects are far more common than most buyers expect from a house nobody has ever lived in.</p>
      <p>It's an easy trap to assume a brand-new home from a reputable builder doesn't need the same scrutiny as a resale, especially when the builder's team is already doing walkthroughs. In practice, new construction defects are often just as costly as resale issues — they're simply less expected, which makes catching them early even more valuable.</p>`,
  sections: [
    {
      h2: "What it costs",
      html: `<p>A single final-walkthrough inspection on new construction in Louisville typically runs <strong>$325–$475</strong>, roughly in line with a resale home of the same size. If you inspect at multiple phases — pre-drywall and final walkthrough, for example — expect to pay for each visit separately, usually $250–$375 per phase visit depending on how far along the home is.</p>`
    },
    {
      h2: "The phase that matters most: pre-drywall",
      html: `<p>The single highest-value inspection on new construction happens <em>before</em> drywall goes up, when framing, electrical rough-in, plumbing rough-in, and HVAC ductwork are all still fully visible. Once walls are closed, correcting a framing or wiring issue means cutting into finished drywall — so catching it at this stage saves the builder, and by extension you, real money and hassle.</p>`
    },
    {
      h2: "Final walkthrough inspection",
      html: `<p>Before closing, a full inspection covers the same scope as a resale home: roof, attic, foundation, HVAC operation, electrical panel, plumbing fixtures, grading, and interior finish quality. On new Louisville-area builds we routinely find punch-list items — grading that slopes toward the house, missing insulation baffles, unsealed penetrations, and HVAC systems that were never properly balanced room to room — that the builder's own quality walkthrough missed.</p>`
    },
    {
      h2: "Why the builder's inspector isn't a substitute",
      html: `<p>Builders typically run their own quality-control walkthrough, but that inspector works for the builder, not you. An independent, buyer-hired inspector has no incentive to soften findings or rush the punch list to hit a closing date. Most builder warranties also require defects to be reported within a specific window (often 30 days at close, then again near the one-year mark) — an independent report gives you clear documentation if a dispute comes up later.</p>`
    },
    {
      h2: "The one-year warranty inspection",
      html: `<p>Many buyers skip this, and it's a mistake. Scheduling a follow-up inspection close to the one-year builder warranty deadline catches settling cracks, HVAC issues that only show up after a full heating and cooling season, and drainage problems that only appear after real rain — all while they're still the builder's responsibility to fix at no cost to you. This matters especially on lots built over former farmland fill in Bullitt County, where settlement is common.</p>
      <p>For a full breakdown of any inspection's scope, see our guide to <a href="/blog/what-does-a-home-inspection-cover">what a standard home inspection covers</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A final walkthrough inspection on new construction runs $325–$475, similar to a resale home of the same size.</li>
        <li>The pre-drywall phase is the single highest-value inspection, since framing and rough-in work is still visible.</li>
        <li>A builder's own quality-control walkthrough is not a substitute for an independent, buyer-hired inspection.</li>
        <li>A follow-up inspection near the one-year warranty deadline catches issues that only surface after a full season of use.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 7
{
  slug: "kentucky-seller-disclosure-law",
  title: "Kentucky's Seller Disclosure Law: What Home Sellers Are Legally Required to Tell Buyers",
  metaTitle: "Kentucky Seller Disclosure Law Explained | KY Home Sales",
  metaDescription: "What KRS 324.360 and Kentucky's Seller's Disclosure of Property Conditions form actually require, what's exempt, and how it interacts with your inspection.",
  category: "Kentucky Regulations",
  date: "2026-07-23",
  relatedSlugs: ["pre-listing-inspection-why-sellers-need-one", "how-to-prepare-your-home-for-inspection", "what-happens-after-a-bad-home-inspection-report"],
  intro: `<p>Kentucky requires most residential sellers to complete a formal disclosure form before a sale closes — but the law has real limits, and misunderstanding those limits is one of the most common sources of post-closing disputes between buyers and sellers. Here's what it actually covers, and what it doesn't.</p>`,
  sections: [
    {
      h2: "The legal basis",
      html: `<p>Under <strong>KRS 324.360</strong>, sellers of most residential real property must complete the <strong>Seller's Disclosure of Property Conditions</strong> form, which is promulgated by the Kentucky Real Estate Commission. The form asks the seller to disclose known conditions of the roof, foundation and structure, mechanical systems (HVAC, electrical, plumbing), water supply and sewer or septic, drainage and flooding history, and known hazardous conditions such as radon, lead-based paint, or termite damage. The completed form must be provided to the buyer before an offer is accepted.</p>`
    },
    {
      h2: "It's a 'known conditions' disclosure, not a warranty",
      html: `<p>This is the part buyers most often misunderstand: the law only requires sellers to disclose defects they actually <em>know about</em> when they complete the form. A seller who genuinely doesn't know their sump pump has been failing intermittently isn't violating the law by leaving that box unchecked. The disclosure form is not a guarantee of condition and it doesn't replace an inspection — it's a starting point, and an independent inspection is what verifies current condition regardless of what the seller knew, remembered, or disclosed.</p>`
    },
    {
      h2: "Common exemptions",
      html: `<p>Several transaction types are exempt, including new construction never previously occupied, court-ordered transfers (probate, divorce), foreclosure and lender-owned (REO) sales, transfers between co-owners or close relatives, and transfers by a fiduciary administering an estate or trust. If you're buying a foreclosure or an estate sale, don't assume "no red flags on the disclosure" means anything reassuring — there may be no disclosure form in the file at all, which is very different from a clean one.</p>`
    },
    {
      h2: "What happens if a seller lies on the form",
      html: `<p>If a seller knowingly conceals a material defect on the disclosure form, a buyer may have grounds for legal action after closing — but proving what the seller actually knew at the time is difficult and expensive to litigate, and it's rarely a fast or cheap process even when a buyer is clearly in the right. This is exactly why a professional inspection during your due diligence period matters more than the disclosure form itself: it documents the home's actual condition independent of what anyone claims to have known.</p>`
    },
    {
      h2: "How this connects to your inspection",
      html: `<p>Read the disclosure form before your inspection and flag anything vague or concerning for your inspector to look at closely — a seller who checked "unknown" next to "roof leaks" is telling you exactly where to look. If you're selling, see our guide on <a href="/blog/pre-listing-inspection-why-sellers-need-one">pre-listing inspections</a>. Getting ahead of issues before they show up on a buyer's report, and potentially conflict with what you already disclosed, protects you on both fronts at once. Buyers across the river should note that Southern Indiana follows Indiana Code 32-21-5 instead, with its own form and rules.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>KRS 324.360 requires most Kentucky residential sellers to complete the Seller's Disclosure of Property Conditions form before an offer is accepted.</li>
        <li>Sellers must disclose known conditions only — the form is not a warranty and doesn't replace an independent inspection.</li>
        <li>New construction, foreclosures, REO sales, estate transfers, and transfers between relatives are commonly exempt.</li>
        <li>Reading the disclosure before your inspection helps you flag specific areas for the inspector to examine more closely.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 8
{
  slug: "radon-levels-kentucky-do-i-need-a-test",
  title: "Radon in Kentucky: Do You Really Need a Test Before Buying?",
  metaTitle: "Radon Levels in Kentucky | Do You Need a Test?",
  metaDescription: "Why Jefferson, Oldham, and Bullitt Counties fall in EPA Radon Zone 1, what that means for buyers, and whether a radon test is truly necessary.",
  category: "Kentucky Regulations",
  date: "2026-07-23",
  relatedSlugs: ["radon-testing-cost-louisville", "kentucky-seller-disclosure-law", "first-time-home-buyer-inspection-guide-louisville"],
  intro: `<p>Kentucky doesn't legally require a radon test as part of a home sale. That leaves the decision entirely up to the buyer — and given the geology of the Louisville metro, it's a decision worth making deliberately rather than skipping to save $150 on your inspection invoice.</p>
      <p>Because testing is optional rather than mandatory, the decision often gets made by default — buyers simply don't think to ask, and sellers have no obligation to bring it up first. That default matters in a Zone 1 region, since silence on the topic doesn't mean the risk isn't there.</p>`,
  sections: [
    {
      h2: "Kentucky has no mandatory radon testing law",
      html: `<p>There is no Kentucky statute requiring radon testing as a condition of sale. Sellers must disclose a <em>known</em> radon problem or a prior test result on the Seller's Disclosure of Property Conditions form, but there's no legal obligation to test before listing. In practice, radon testing is entirely opt-in for buyers, and a meaningful share of Louisville-area homes are sold without ever being tested.</p>`
    },
    {
      h2: "Why that matters here specifically",
      html: `<p>The EPA's radon zone map places <strong>Jefferson, Oldham, Bullitt, Shelby, Spencer, Nelson, Henry, and Hardin Counties</strong> — essentially the entire Louisville metro — in <strong>Zone 1</strong>, the highest radon potential category. Across the river, Clark and Floyd Counties in Indiana are Zone 1 as well. That doesn't mean every home tests high, but the baseline risk locally is well above the national average, which is exactly the scenario where skipping the test is the wrong call.</p>`
    },
    {
      h2: "Radon doesn't correlate with how the house looks",
      html: `<p>This surprises most buyers: radon levels have essentially nothing to do with a home's age, condition, or price point. A renovated home in <a href="/prospect">Prospect</a>, a dated ranch in <a href="/lyndon">Lyndon</a>, and a mid-century home on a block foundation in <a href="/okolona">Okolona</a> can all test high alike, because radon enters through soil gas and foundation cracks rather than anything visible during a walkthrough. The only way to know is to run the 48-hour test.</p>`
    },
    {
      h2: "Kentucky does regulate radon professionals",
      html: `<p>While testing isn't mandatory, Kentucky does require radon measurement and mitigation professionals to hold state certification. When you add a radon test to your inspection, ask whether the person placing the monitor is Kentucky-certified, and if a mitigation system is recommended, use a certified mitigation contractor so the installation meets state and EPA standards.</p>`
    },
    {
      h2: "Our recommendation",
      html: `<p>Add radon testing to every Louisville-area home purchase, full stop. At $125–$175 bundled with your inspection, it's inexpensive insurance against a health risk that's completely fixable — mitigation systems run about $800–$1,500 and are frequently negotiated as a seller-paid item when a high result comes back during due diligence. For pricing details and how the test works, see our <a href="/blog/radon-testing-cost-louisville">radon testing cost guide</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Kentucky has no law requiring radon testing as part of a home sale; sellers must disclose only a known problem or prior result.</li>
        <li>Jefferson, Oldham, Bullitt, and the surrounding metro counties all fall in EPA Radon Zone 1, the highest-risk category.</li>
        <li>Radon levels don't correlate with a home's age, price, or visible condition — testing is the only way to know.</li>
        <li>Kentucky certifies radon measurement and mitigation professionals; use a certified provider for both.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 9
{
  slug: "jefferson-county-home-inspection-what-buyers-should-know",
  title: "Jefferson County Home Buying: What Local Home Age and Housing Stock Mean for Your Inspection",
  metaTitle: "Jefferson County Home Inspection Guide | Local Housing Stock",
  metaDescription: "What Jefferson County's housing stock means for buyers — knob-and-tube, FPE panels, polybutylene, karst and floodplain — decade by decade.",
  category: "Kentucky Regulations",
  date: "2026-07-23",
  relatedSlugs: ["common-issues-found-in-louisville-home-inspections", "sewer-scope-inspection-cost-louisville", "first-time-home-buyer-inspection-guide-louisville"],
  intro: `<p>Jefferson County's housing stock spans well over a century, from 1880s Victorian mansions in Old Louisville to brand-new infill in NuLu and subdivisions in the far east end. The decade a home was built tells an inspector — and should tell you — a lot about what to expect before you ever walk through the door.</p>
      <p>This isn't just trivia. Knowing what era-specific issues to expect changes how you shop. A buyer eyeing a 1925 Four-Square in the Highlands should be asking different questions than a buyer touring a 2015 build in <a href="/middletown">Middletown</a>, even if both homes look equally well maintained.</p>`,
  sections: [
    {
      h2: "Pre-1940 homes: original systems are the main risk",
      html: `<p>Homes in Old Louisville, the older Highlands, Clifton, Crescent Hill, Germantown, and Portland often still carry original infrastructure: knob-and-tube wiring remnants, galvanized steel supply plumbing that corrodes from the inside and restricts flow over decades, clay-tile sewer laterals, slate roofs at or past their service life, and coal-conversion boilers feeding cast iron radiators. None of these automatically fail an inspection, but all warrant a close look and often a budget line for near-term upgrades.</p>`
    },
    {
      h2: "1950s–1980s homes: Federal Pacific panels",
      html: `<p>A huge number of Jefferson County homes built from the 1950s through the early 1980s — across <a href="/lyndon">Lyndon</a>, <a href="/fern-creek">Fern Creek</a>, <a href="/okolona">Okolona</a>, <a href="/shively">Shively</a>, and beyond — were fitted with <strong>Federal Pacific Electric (FPE) Stab-Lok</strong> panels. Independent testing has linked their breakers to a higher rate of failure to trip under overload, a recognized fire-safety concern. When we find one, we recommend evaluation and usually replacement by a licensed electrician. It's a common, reasonable negotiation item.</p>`
    },
    {
      h2: "1965–1973 homes: aluminum branch wiring",
      html: `<p>Homes built in that window sometimes used aluminum branch-circuit wiring instead of copper, a cost-saving measure that's since been linked to a higher risk of loose connections and overheating at outlets and switches as connections age. It's not an automatic dealbreaker, but it warrants evaluation by a licensed electrician before closing, and it can affect insurability with some carriers unless proper remediation (such as copper pigtailing with approved connectors) has been done.</p>`
    },
    {
      h2: "1978–1995 homes: polybutylene plumbing",
      html: `<p>Gray polybutylene supply piping was widely used in this era — especially in subdivision builds in south Jefferson County and neighboring Bullitt County — before it was pulled from the market for failing from the inside out, often without warning. If your target home falls in this range, ask specifically whether the supply lines have been inspected or replaced. An inspector can flag it by the piping visible at the water heater and under sinks, but full verification sometimes requires opening a wall or entering a crawl space.</p>`
    },
    {
      h2: "What's consistent across every era: karst, clay, and water",
      html: `<p>Regardless of build decade, eastern Jefferson County sits on karst limestone, where sinkholes and subsurface voids drive foundation settlement, while the south and west of the county sit lower, with clay-heavy soil and, near Pond Creek and the Ohio River, a high water table. Grading that slopes toward the house — one of the cheapest issues to fix — is among the most common findings countywide, from century-old bungalows to homes built last year. For the full local picture, see our roundup of <a href="/blog/common-issues-found-in-louisville-home-inspections">the most common issues we find in Louisville inspections</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Pre-1940 homes often still have knob-and-tube remnants, galvanized plumbing, clay-tile laterals, and aging slate roofs.</li>
        <li>FPE Stab-Lok panels are extremely common in 1950s–1980s Jefferson County homes and are a recognized fire-safety concern.</li>
        <li>Homes built 1965–1973 may have aluminum branch wiring; homes built 1978–1995 may have polybutylene supply piping.</li>
        <li>Karst in the east end and a high water table in the south and west drive foundation and drainage findings countywide.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 10
{
  slug: "kentucky-home-inspector-licensing-explained",
  title: "Kentucky Home Inspector Licensing: What the Law Requires and What Else Matters",
  metaTitle: "Kentucky Home Inspector Licensing Explained",
  metaDescription: "Kentucky licenses home inspectors under KRS 198B. Here's what the license requires, how to verify one, and what credentials matter beyond it.",
  category: "Kentucky Regulations",
  date: "2026-07-23",
  relatedSlugs: ["how-to-choose-a-home-inspector-in-louisville", "questions-to-ask-a-home-inspector-before-hiring", "home-inspection-cost-louisville"],
  intro: `<p>Unlike some neighboring states, Kentucky <em>does</em> require home inspectors to hold a state license. That gives Louisville buyers a real baseline of protection — but a license is a floor, not a ceiling, and there's still meaningful vetting to do before you hire one.</p>
      <p>Understanding what the license actually requires helps you use it well: it tells you what a licensed inspector has already proven, and what it doesn't guarantee about the quality of the report you'll receive.</p>`,
  sections: [
    {
      h2: "Kentucky licenses home inspectors under KRS 198B",
      html: `<p>The <strong>Kentucky Board of Home Inspectors</strong>, established under <strong>KRS 198B.700 through 198B.738</strong>, regulates the profession. To be licensed, an inspector must be at least 18, hold a high school diploma or equivalent, complete <strong>80 hours of board-approved pre-licensing education</strong>, pass the <strong>National Home Inspector Examination (NHIE)</strong>, and carry a general liability insurance policy of at least <strong>$250,000</strong>. Licensees must also complete continuing education — currently 20 hours per two-year renewal cycle — to stay active.</p>`
    },
    {
      h2: "How to verify an inspector's license",
      html: `<p>Kentucky maintains a public license lookup through the Department of Housing, Buildings and Construction. Before you book, confirm the inspector's license is active and in good standing, and note the license number on your agreement. Any inspector performing home inspections for compensation in Kentucky without a current license is operating unlawfully — that alone should end the conversation.</p>`
    },
    {
      h2: "What the license doesn't tell you",
      html: `<p>The license confirms baseline education, a passing exam score, and minimum insurance. It doesn't tell you how many inspections the person has actually performed, how detailed and photo-rich their reports are, whether they physically enter crawl spaces and walk roofs, or how responsive they are to follow-up questions after the invoice is paid. Those are the differences between a genuinely useful report and a thin one, and you have to ask about them directly.</p>`
    },
    {
      h2: "Certifications that go beyond the state minimum",
      html: `<p>Many strong Kentucky inspectors also carry <strong>InterNACHI</strong> or <strong>ASHI</strong> membership. Both require adherence to a published standards of practice and ongoing education beyond what the state mandates. It's not a substitute for the license, but an inspector who has voluntarily opted into a national standard on top of Kentucky's requirements is signaling how seriously they take the work.</p>`
    },
    {
      h2: "What to ask beyond 'are you licensed?'",
      html: `<p>Since the answer in Kentucky should always be yes, move past it quickly: Is your license current, and what's the number? How many inspections have you completed? Do you also carry errors-and-omissions coverage on top of the required liability policy? Do you enter crawl spaces and walk roofs when safe? Can I see a sample report? See our full breakdown of <a href="/blog/how-to-choose-a-home-inspector-in-louisville">how to choose a home inspector in Louisville</a> for the complete list.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Kentucky requires home inspectors to be licensed under KRS 198B.700–738, administered by the Kentucky Board of Home Inspectors.</li>
        <li>Licensing requires 80 hours of pre-licensing education, passing the NHIE, and at least $250,000 in general liability insurance.</li>
        <li>Verify the license is active through the state's public lookup and record the number on your agreement.</li>
        <li>The license is a baseline — report quality, experience, and thoroughness still have to be vetted separately.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 11
{
  slug: "how-to-choose-a-home-inspector-in-louisville",
  title: "How to Choose a Home Inspector in Louisville: 7 Red Flags to Avoid",
  metaTitle: "How to Choose a Home Inspector in Louisville",
  metaDescription: "Seven red flags to watch for when hiring a home inspector in Louisville, from an expired license to reports without photos.",
  category: "Choosing an Inspector",
  date: "2026-07-23",
  relatedSlugs: ["kentucky-home-inspector-licensing-explained", "questions-to-ask-a-home-inspector-before-hiring", "home-inspection-cost-louisville"],
  intro: `<p>Kentucky licenses home inspectors, which sets a baseline — but the quality gap between a great inspector and a mediocre one is still wide, and you're the one holding the report when it matters. Here are the seven warning signs we tell every Louisville buyer to watch for.</p>`,
  sections: [
    {
      h2: "1. An expired, inactive, or unverifiable license",
      html: `<p>Every home inspector working for compensation in Kentucky must hold a current license under KRS 198B. Ask for the license number and confirm it's active through the state's public lookup. An inspector who's evasive about their license status, or whose license has lapsed, is a hard pass — see our guide to <a href="/blog/kentucky-home-inspector-licensing-explained">Kentucky home inspector licensing</a> for what the license actually requires.</p>`
    },
    {
      h2: "2. No proof of insurance beyond the state minimum",
      html: `<p>Kentucky requires at least $250,000 in general liability coverage. Many strong inspectors also carry errors-and-omissions (E&amp;O) coverage, which is what actually responds if a significant defect is missed. Ask to see proof of both. An inspector unwilling to show it is telling you something.</p>`
    },
    {
      h2: "3–4. Vague pricing and no sample report available",
      html: `<p>A legitimate inspector can quote a firm price based on square footage and requested add-ons before ever showing up. If the price is suspiciously low compared to the going Louisville rate of $300–$500 for a standard home, ask directly what's being cut to hit that number — it's usually time on site or detail in the report.</p>
      <p>Every inspector worth hiring can show you a sample report before you book, with no hesitation. If they can't or won't, that's a strong signal the reports themselves are thin — a few checked boxes with no photos or plain-language explanation of what was found and why it matters.</p>`
    },
    {
      h2: "5. An agent who insists on only one inspector",
      html: `<p>It's normal for a real estate agent to recommend an inspector they trust. It's a problem if the agent insists on <em>only</em> that one and actively discourages you from getting a second opinion — that pattern can signal a referral relationship that prioritizes a smooth, fast-closing transaction over a genuinely thorough report.</p>`
    },
    {
      h2: "6. Discourages you from attending",
      html: `<p>A confident inspector wants you there. Being present lets you ask questions in real time and see issues firsthand rather than just reading about them later. An inspector who discourages buyers from attending, or schedules at a time they know you can't make, is worth a second look before you commit.</p>`
    },
    {
      h2: "7. Slow, thin reports and poor follow-up",
      html: `<p>In Louisville, same-day digital reports with photos are the standard, not a premium add-on. A report that takes a week and comes back as a bare checklist is much harder to use in negotiation and harder to reference months later. That same pattern often shows up again after the invoice is paid — a good inspector welcomes follow-up questions for weeks, while a weaker one gets harder to reach. Check reviews specifically for post-inspection responsiveness. For the questions worth asking before you book, see our <a href="/blog/questions-to-ask-a-home-inspector-before-hiring">pre-hire question checklist</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Confirm the inspector's Kentucky license is active and get the number; ask for proof of liability and E&amp;O insurance.</li>
        <li>A suspiciously low price compared to the going $300–$500 rate usually means less time on site or a thinner report.</li>
        <li>A legitimate inspector always shows a sample report and welcomes you attending in person.</li>
        <li>Same-day, photo-rich digital reports are the local standard — and post-inspection responsiveness matters.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 12
{
  slug: "questions-to-ask-a-home-inspector-before-hiring",
  title: "12 Questions to Ask a Home Inspector Before You Hire One",
  metaTitle: "12 Questions to Ask a Home Inspector Before Hiring",
  metaDescription: "The exact questions Louisville buyers should ask before booking a home inspector — license, insurance, scope, report format, and more.",
  category: "Choosing an Inspector",
  date: "2026-07-23",
  relatedSlugs: ["how-to-choose-a-home-inspector-in-louisville", "kentucky-home-inspector-licensing-explained", "what-does-a-home-inspection-cover"],
  intro: `<p>A five-minute phone call before booking can tell you almost everything you need to know about an inspector — often more than an hour of reading online reviews. Here are the questions worth asking, organized by topic, and what a good answer sounds like.</p>
      <p>Most buyers only think to ask about price and maybe availability. Taking five extra minutes to run through this list can be the difference between a report you can actually negotiate with and one that just checks a box on your closing timeline.</p>`,
  sections: [
    {
      h2: "About their license and coverage",
      html: `<ul>
        <li><strong>What's your Kentucky home inspector license number, and is it current?</strong> Every inspector in Kentucky must be licensed under KRS 198B; verify it through the state lookup.</li>
        <li><strong>Do you carry errors-and-omissions coverage in addition to the required liability policy?</strong> A confident "yes" with an offer to show proof is the right answer.</li>
        <li><strong>How many inspections have you completed?</strong> There's no magic number, but hesitation to answer plainly is a bad sign.</li>
      </ul>`
    },
    {
      h2: "About scope and pricing",
      html: `<ul>
        <li><strong>What's included in the base price, and what costs extra?</strong> Radon, sewer scope, and termite/WDO are almost always separate line items — get the full all-in quote up front.</li>
        <li><strong>Do you inspect crawl spaces and attics in person, or from the access hatch only?</strong> A physical entry catches meaningfully more, which matters in Louisville's clay-soil crawl spaces.</li>
        <li><strong>How long will the inspection take?</strong> A typical single-family home should take 2–4 hours. Anything under 90 minutes for a full-size home is a red flag worth pushing back on.</li>
      </ul>`
    },
    {
      h2: "About the report",
      html: `<ul>
        <li><strong>When will I receive the report, and in what format?</strong> Same-day, photo-rich digital reports are the local standard.</li>
        <li><strong>Can I see a sample report first?</strong> This single question tells you more about quality than any other on this list.</li>
        <li><strong>Will the report include repair cost estimates or just findings?</strong> Most inspectors document findings rather than pricing repairs — good to know before you plan your negotiation.</li>
      </ul>`
    },
    {
      h2: "About the visit itself",
      html: `<ul>
        <li><strong>Can I attend the inspection?</strong> The answer should always be an enthusiastic yes.</li>
        <li><strong>Will you walk me through findings on-site before I get the written report?</strong> Many good inspectors do a verbal walkthrough of major issues before you leave the property.</li>
        <li><strong>Are you available for follow-up questions after the report?</strong> You'll have questions once you sit down and read the full report — make sure that access is included, not billed separately.</li>
      </ul>`
    },
    {
      h2: "Put it together",
      html: `<p>None of these twelve questions are a trap — a solid inspector answers all of them without hesitation, usually before you finish asking. If you get vague or defensive answers on more than one or two, weigh that heavily before you book. See our related guide on <a href="/blog/how-to-choose-a-home-inspector-in-louisville">red flags to avoid</a> when vetting inspectors anywhere in the Louisville market.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Confirm the Kentucky license number and current status first, then ask about E&amp;O coverage and experience.</li>
        <li>Get a full, all-in quote covering add-ons like radon, sewer scope, and termite/WDO — not just the base price.</li>
        <li>A same-day, photo-rich digital report is standard locally, so anything less is worth questioning.</li>
        <li>Confirm you're welcome to attend and that follow-up questions are included, not billed separately.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 13
{
  slug: "what-does-a-home-inspection-cover",
  title: "What Does a Standard Home Inspection Actually Cover?",
  metaTitle: "What Does a Home Inspection Cover? | Full Checklist",
  metaDescription: "A room-by-room, system-by-system breakdown of what's included in a standard Louisville home inspection — and what's not.",
  category: "Home Systems",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-louisville", "questions-to-ask-a-home-inspector-before-hiring", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>"Full home inspection" gets used loosely across the industry, and it's worth knowing exactly what's covered before you're standing in a driveway afterward wondering why the pool or the detached shed wasn't checked. Here's the standard scope for a full inspection in the Louisville market, system by system.</p>
      <p>Knowing the scope in advance also helps you decide which add-ons are worth requesting for your specific property — a home with a crawl space and an older sewer line has very different priorities than a slab-on-grade home built in the last decade.</p>`,
  sections: [
    {
      h2: "Structure and exterior",
      html: `<p>Foundation walls and visible footings, framing where accessible, siding and trim, windows and doors, roof covering and flashing, gutters and downspouts, grading and drainage around the entire perimeter, and any attached decks, porches, or patios. Detached structures like a shed, carriage house, or secondary garage are typically covered only if requested and confirmed in advance, so mention them when you book.</p>`
    },
    {
      h2: "Roof and attic",
      html: `<p>Shingle, slate, or metal roofing condition, flashing at penetrations and valleys, chimney condition, and — from inside the attic — insulation levels, ventilation, visible framing, and any signs of past or active leaks staining the sheathing. Most inspectors walk the roof directly when it's safe given pitch and weather, and otherwise inspect thoroughly from the ground and via ladder at the eaves. Older Louisville homes with steep slate roofs are usually assessed from the ground and the attic.</p>`
    },
    {
      h2: "Electrical",
      html: `<p>Main panel condition and capacity, breaker labeling accuracy, panel brand (Federal Pacific and other recalled or problem panels are flagged specifically), visible wiring type and condition, a representative sample of outlets and switches tested for function, GFCI/AFCI protection where currently required, and smoke and CO detector presence and placement. This is where wiring-era issues like aluminum branch wiring and knob-and-tube remnants get called out in older Jefferson County homes.</p>`
    },
    {
      h2: "Plumbing",
      html: `<p>Visible supply and drain piping material and condition (galvanized, copper, PEX, polybutylene, cast iron), water heater age and condition, water pressure throughout the home, fixture function in every kitchen and bathroom, and visible signs of past or active leaks around fixtures, under sinks, and near the water heater. Sewer scope, well, and septic evaluation are separate add-on services, not part of the base scope.</p>`
    },
    {
      h2: "HVAC, interior, and what's typically excluded",
      html: `<p>Heating and cooling equipment age and operation (including boilers and radiators in older homes), ductwork where visible, thermostats, and a representative check of registers. Interior coverage includes walls, ceilings, floors, stairs and railings, and a sample of windows and doors. Typically <em>excluded</em> from a standard inspection: anything behind finished surfaces, low-voltage systems (security, intercom, irrigation), pools and spas unless added, cosmetic condition, code compliance beyond safety items, and pest identification beyond visible wood-destroying-organism evidence — a full termite/WDO report is a separate service.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A standard inspection covers structure, exterior, roof, attic, electrical, plumbing, HVAC, and interior — visually and by operation.</li>
        <li>Radon, sewer scope, termite/WDO, mold testing, and well/septic are add-ons, not part of the base scope.</li>
        <li>Detached structures and pools are only included if requested and confirmed in advance.</li>
        <li>Anything behind finished surfaces, plus code compliance beyond safety items, is outside the standard scope.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 14
{
  slug: "spring-home-maintenance-checklist-louisville",
  title: "Spring Home Maintenance Checklist for Louisville Homeowners",
  metaTitle: "Spring Home Maintenance Checklist | Louisville",
  metaDescription: "A practical spring maintenance checklist for Louisville homes — storm prep, drainage, HVAC, and the exterior items that matter most in the Ohio Valley.",
  category: "Seasonal Maintenance",
  date: "2026-07-23",
  relatedSlugs: ["summer-home-maintenance-tips-kentucky-humidity", "fall-home-maintenance-checklist-kentucky-winter", "crawl-space-basement-inspection-guide-louisville"],
  intro: `<p>Spring in Louisville means heavy rain, the occasional severe thunderstorm or tornado watch, and the first real test of how your home handles water. A few hours of maintenance now heads off the problems that turn into inspection findings — and expensive repairs — later. Here's the checklist we'd run on our own homes.</p>`,
  sections: [
    {
      h2: "Roof, gutters, and drainage",
      html: `<p>After winter, check the roof from the ground with binoculars for lifted, cracked, or missing shingles and damaged flashing. Clean gutters and downspouts — Louisville's mature tree canopy fills them fast — and make sure downspouts discharge at least four to six feet from the foundation. Standing water against the foundation after a spring storm is the single most common cause of the basement and crawl space moisture we write up all year.</p>`
    },
    {
      h2: "Grading and the lot",
      html: `<p>Walk the perimeter and look for soil that has settled against the foundation or slopes toward the house. Re-slope low spots so water runs away from the structure. In the east end and Oldham and Bullitt Counties, watch for new depressions, soft spots, or circular cracks in the yard — early signs of karst or sinkhole activity worth monitoring and, if they grow, having evaluated.</p>`
    },
    {
      h2: "Test the sump pump before you need it",
      html: `<p>Pour a bucket of water into the sump pit and confirm the pump switches on, moves water, and shuts off. Check that the discharge line is clear and not frozen or crushed. If your home is in a low-lying area near Beargrass Creek, Pond Creek, or the river, consider a battery backup or water-powered backup — spring storms and power outages tend to arrive together.</p>`
    },
    {
      h2: "Get ahead of cooling season",
      html: `<p>Replace the HVAC filter, clear leaves and debris from around the outdoor condenser, and gently rinse the coil fins. Schedule an AC tune-up before the first 90-degree stretch, when every HVAC company in town is booked solid. Pour water down rarely-used floor drains and check that the condensate drain line from the furnace or air handler is flowing and not clogged.</p>`
    },
    {
      h2: "Exterior wood, paint, and seals",
      html: `<p>Inspect decks, porches, and railings for rot, loose fasteners, and wobble — Louisville's humidity is hard on exterior wood. Check exterior caulk and paint, especially on older homes with wood siding and trim, and reseal gaps around windows and doors. Look for wood-to-soil contact anywhere on the structure; in a heavy termite-pressure area, that's an open invitation.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Clean gutters and extend downspouts before spring storms — foundation water is the root of most moisture findings.</li>
        <li>Re-slope soil that has settled toward the house, and watch east-end yards for early karst or sinkhole signs.</li>
        <li>Test the sump pump with a bucket of water now, and consider a backup if you're in a low-lying area.</li>
        <li>Service the AC and clear the condensate line before the first heat wave, when contractors are overbooked.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 15
{
  slug: "fall-home-maintenance-checklist-kentucky-winter",
  title: "Fall Home Maintenance Checklist: Getting Your Louisville Home Ready for Winter",
  metaTitle: "Fall Home Maintenance Checklist | Louisville Winter Prep",
  metaDescription: "A fall checklist for Louisville homeowners — heating, gutters, freeze protection, and the ice-storm prep the Ohio Valley actually needs.",
  category: "Seasonal Maintenance",
  date: "2026-07-23",
  relatedSlugs: ["winterizing-your-louisville-home", "spring-home-maintenance-checklist-louisville", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>Louisville winters are milder than the upper Midwest, but the Ohio Valley delivers hard freezes, the occasional major ice storm, and enough freeze-thaw cycling to find every weak point in a home's exterior. Fall is when you get ahead of it. Here's the checklist.</p>`,
  sections: [
    {
      h2: "Service the heating system",
      html: `<p>Have the furnace, heat pump, or boiler professionally serviced before the first cold snap. For gas systems, that includes checking the heat exchanger for cracks — a genuine safety item that produces carbon monoxide when it fails. Replace filters, test the thermostat, and confirm carbon monoxide detectors work and are less than seven years old. Older Louisville homes with cast iron radiators should have the boiler pressure and the radiator vents checked.</p>`
    },
    {
      h2: "Gutters, roof, and the tree canopy",
      html: `<p>Clean gutters again after the leaves finish dropping — Louisville's canopy means a second cleaning in late fall is not optional. Check the roof and flashing while the weather is still mild, and trim tree limbs that overhang the roof or power service drop. Ice storms bring limbs down, and a proactive trim is far cheaper than emergency tree service and roof repair in January.</p>`
    },
    {
      h2: "Freeze protection for plumbing",
      html: `<p>Disconnect and drain garden hoses, shut off and drain exterior hose bibs (or confirm frost-free sillcocks are functioning), and insulate exposed pipes in the crawl space, garage, and along exterior walls. In older homes, pipes running through an uninsulated crawl space or an unheated addition are the ones that burst during a hard freeze. Know where your main water shutoff is before you need it at 2 a.m.</p>`
    },
    {
      h2: "Seal the envelope",
      html: `<p>Add weatherstripping and door sweeps where you can feel a draft, and caulk gaps around window and door trim, penetrations, and where different materials meet. Check attic insulation depth — many older Louisville homes are well under current recommendations — and make sure soffit vents aren't blocked, so the attic stays cold and dry and you don't get ice damming at the eaves during a snow event.</p>`
    },
    {
      h2: "Chimney and fireplace",
      html: `<p>If you burn wood, have the chimney swept and inspected for creosote buildup and liner cracks. If you have a gas fireplace, confirm it lights cleanly and the venting is clear. On older homes with a masonry chimney, check for spalling brick and a cracked or missing crown — freeze-thaw does real damage to chimneys over a Louisville winter.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Service the heating system before the first freeze, including a heat-exchanger check on gas furnaces.</li>
        <li>Clean gutters a second time after full leaf drop, and trim limbs overhanging the roof and service drop before ice-storm season.</li>
        <li>Drain exterior hose bibs and insulate pipes in crawl spaces, garages, and unheated additions.</li>
        <li>Top up attic insulation and keep soffit vents clear to prevent ice dams during snow events.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 16
{
  slug: "winterizing-your-louisville-home",
  title: "Winterizing Your Louisville Home: A Room-by-Room Checklist",
  metaTitle: "Winterizing Your Louisville Home | Room-by-Room",
  metaDescription: "A room-by-room winterizing checklist for Louisville homes, with extra attention to crawl spaces, older additions, and hard-freeze pipe protection.",
  category: "Seasonal Maintenance",
  date: "2026-07-23",
  relatedSlugs: ["fall-home-maintenance-checklist-kentucky-winter", "spring-home-maintenance-checklist-louisville", "crawl-space-basement-inspection-guide-louisville"],
  intro: `<p>Winterizing works best as a walk-through: go room by room with a caulk gun, a flashlight, and a notepad. Louisville's winters aren't brutal, but a single hard freeze finds every gap. Here's the room-by-room version.</p>`,
  sections: [
    {
      h2: "Kitchen and bathrooms",
      html: `<p>Open the cabinet doors under sinks on exterior walls during a hard freeze so household heat reaches the pipes. Check for drafts around plumbing penetrations and seal them with expanding foam or caulk. Confirm bathroom exhaust fans actually vent to the exterior, not into the attic — a surprisingly common defect that dumps moist air into cold framing all winter and causes mold.</p>`
    },
    {
      h2: "Basement and crawl space",
      html: `<p>This is where Louisville homes are most vulnerable. Insulate exposed water supply lines, close or insulate crawl space vents for the season if your crawl space is vented, and confirm the vapor barrier on the crawl space floor is intact. Check that the sump pump works and its discharge line won't freeze. Look for daylight around the rim joist and seal it — a huge amount of winter heat loss happens right there.</p>`
    },
    {
      h2: "Attic",
      html: `<p>Verify insulation depth and even coverage, and make sure it isn't blocking soffit vents. Check for gaps around the attic hatch, recessed lights, and the chimney chase, and seal them so warm, moist air from the house doesn't rise into the attic and condense. Proper attic sealing and ventilation is what prevents ice dams at the eaves during a snow event.</p>`
    },
    {
      h2: "Living areas and bedrooms",
      html: `<p>Feel for drafts around windows and exterior doors and add weatherstripping, door sweeps, and rope caulk as needed. Reverse ceiling fans to clockwise on low to push warm air down. On older homes with original single-pane windows, interior storm inserts or a quality film kit make a real comfort difference without touching the historic sash.</p>`
    },
    {
      h2: "Exterior and additions",
      html: `<p>Walk the outside: drain and cover hose bibs, clear gutters, and check that the grading and downspouts move snowmelt away from the foundation. Pay special attention to unheated or minimally heated additions and sunrooms — their plumbing and the pipes feeding them are the most likely to freeze in a Louisville cold snap. If an addition has its own crawl space, it needs the same pipe insulation and vent treatment as the main one.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Under-sink cabinets on exterior walls should be opened during a hard freeze; seal plumbing penetrations year-round.</li>
        <li>The crawl space is the highest-risk zone — insulate pipes, protect the sump discharge, and seal the rim joist.</li>
        <li>Air-seal the attic hatch, recessed lights, and chimney chase to prevent condensation and ice dams.</li>
        <li>Unheated additions and sunrooms are the most freeze-prone plumbing in a Louisville home.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 17
{
  slug: "summer-home-maintenance-tips-kentucky-humidity",
  title: "Summer Home Maintenance in Kentucky: Fighting Humidity, Mold, and HVAC Overload",
  metaTitle: "Summer Home Maintenance in Kentucky | Humidity & Mold",
  metaDescription: "How Louisville homeowners can manage Ohio Valley humidity in summer — crawl space moisture, AC load, condensation, and mold prevention.",
  category: "Seasonal Maintenance",
  date: "2026-07-23",
  relatedSlugs: ["mold-inspection-cost-louisville", "crawl-space-basement-inspection-guide-louisville", "spring-home-maintenance-checklist-louisville"],
  intro: `<p>Louisville summers are hot and, more importantly, humid. Ohio Valley dew points sit in the 70s for weeks, and that moisture is what drives the mold, musty odors, and swollen-door complaints we hear about every August. Managing summer humidity is mostly about keeping moist air out of the parts of the house that stay cool.</p>`,
  sections: [
    {
      h2: "Control crawl space and basement moisture",
      html: `<p>Warm, humid outdoor air entering a cool crawl space or basement condenses on framing, ductwork, and cold water lines — the classic recipe for mold. Keep a hygrometer in the basement and aim to hold relative humidity below 55–60%. A properly sized dehumidifier with a condensate pump is one of the best investments a Louisville homeowner can make. If your crawl space is vented and chronically damp, ask an inspector or contractor whether encapsulation makes sense for your home.</p>`
    },
    {
      h2: "Don't oversize or overwork the AC",
      html: `<p>An oversized air conditioner cools the house quickly but short-cycles before it removes much humidity, leaving the interior cool and clammy. If your home feels damp even when the thermostat is satisfied, that's often the cause. Keep the filter clean, keep the outdoor coil clear, and have the system checked if it can't hold both temperature and humidity during a heat wave.</p>`
    },
    {
      h2: "Check the condensate drain",
      html: `<p>Your AC pulls gallons of water out of the air on a humid Louisville day, and it all leaves through the condensate drain line. A clogged line backs up into the furnace or air handler, the drain pan overflows, and you get water damage and mold in a closet or ceiling. Flush the line at the start of summer and again mid-season, and make sure the secondary drain pan and float switch are in place.</p>`
    },
    {
      h2: "Ventilate the wet rooms",
      html: `<p>Run bathroom exhaust fans during and for 15–20 minutes after every shower, and confirm they vent outside rather than into the attic. Use the kitchen range hood when cooking. In laundry rooms, make sure the dryer vents fully to the exterior with a short, clean duct run — a restricted dryer vent adds humidity and is a fire hazard.</p>`
    },
    {
      h2: "Watch the exterior, too",
      html: `<p>Humidity plus Louisville's tree cover keeps the north side of many homes damp. Keep shrubs trimmed back from siding for airflow, clear gutters so they don't overflow against the wall, and address any sprinkler heads spraying the foundation or siding. Persistent exterior dampness eventually finds its way to interior moisture and rot.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Hold basement and crawl space humidity below 55–60% with a properly sized dehumidifier and condensate pump.</li>
        <li>An oversized AC short-cycles and leaves the house cool but clammy — humidity control is part of correct sizing.</li>
        <li>Flush the AC condensate drain at the start and middle of summer to prevent overflow and mold.</li>
        <li>Vent bathrooms, kitchen, and dryer fully to the exterior — never into the attic.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 18
{
  slug: "pre-listing-inspection-why-sellers-need-one",
  title: "Pre-Listing Inspections in Louisville: Why More Sellers Are Getting One First",
  metaTitle: "Pre-Listing Inspections in Louisville | Seller's Guide",
  metaDescription: "How a pre-listing inspection helps Louisville sellers price accurately, complete the Kentucky disclosure, and avoid renegotiation surprises.",
  category: "Selling a Home",
  date: "2026-07-23",
  relatedSlugs: ["how-to-prepare-your-home-for-inspection", "kentucky-seller-disclosure-law", "what-happens-after-a-bad-home-inspection-report"],
  intro: `<p>A pre-listing inspection is a full home inspection the seller commissions before the house goes on the market. In a Louisville market where buyers still do their own inspection, it might sound redundant — but it changes the negotiation dynamic in the seller's favor, and it makes completing Kentucky's disclosure form far less stressful.</p>`,
  sections: [
    {
      h2: "You control the timeline instead of the buyer",
      html: `<p>When issues surface during the buyer's inspection, you're negotiating under a deadline with a nervous buyer and their agent framing every finding. When you find the same issues weeks earlier, you can get contractor quotes, shop for the best price, fix what you choose to fix, and decide how to present the rest — all without a contingency clock running.</p>`
    },
    {
      h2: "It makes the Kentucky disclosure easier and safer",
      html: `<p>Kentucky's Seller's Disclosure of Property Conditions form asks about known defects. A pre-listing inspection turns "I think everything's fine" into a documented understanding of the home's actual condition, so you can complete the form accurately and confidently. That reduces the risk of a post-closing dispute over something you genuinely didn't know about — see our guide to <a href="/blog/kentucky-seller-disclosure-law">Kentucky's disclosure law</a> for how the two interact.</p>`
    },
    {
      h2: "Fewer renegotiations and blown deals",
      html: `<p>The most expensive outcome for a seller isn't a repair credit — it's a buyer walking away after their inspection and the house going back on the market with a stigma. A pre-listing inspection lets you address or disclose the deal-breakers before you accept an offer, so the buyer's inspection confirms what they already expected rather than blowing up the contract.</p>`
    },
    {
      h2: "You can price with confidence",
      html: `<p>If the roof has five years left or the HVAC is original, you can price that in deliberately and market the home as priced-to-reflect-condition, rather than getting beaten down on it later. If the house is in great shape, the report becomes a marketing asset you can share with serious buyers.</p>`
    },
    {
      h2: "When it's most worth it",
      html: `<p>Pre-listing inspections deliver the most value on older homes (Old Louisville, the Highlands, St. Matthews, downtown New Albany), homes you've owned a long time, homes you've rented out, and estate or relocation sales where the seller has limited firsthand knowledge of the property. On a nearly new home you've lived in and maintained, the payoff is smaller — though the disclosure benefit still applies.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>A pre-listing inspection lets you fix, quote, or disclose issues on your own timeline instead of under a buyer's contingency deadline.</li>
        <li>It supports an accurate Kentucky disclosure form and lowers the risk of a post-closing dispute.</li>
        <li>It reduces renegotiations and the chance of a buyer walking after their own inspection.</li>
        <li>It's most valuable on older homes, long-held homes, former rentals, and estate or relocation sales.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 19
{
  slug: "how-to-prepare-your-home-for-inspection",
  title: "How to Prepare Your Home for a Buyer's Inspection: A Seller's Checklist",
  metaTitle: "How to Prepare Your Home for Inspection | Seller Checklist",
  metaDescription: "A Louisville seller's checklist for getting your home ready for the buyer's inspection — access, small fixes, and what inspectors flag most.",
  category: "Selling a Home",
  date: "2026-07-23",
  relatedSlugs: ["pre-listing-inspection-why-sellers-need-one", "kentucky-seller-disclosure-law", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>You can't control what an inspector finds, but you can control how smoothly the inspection goes — and a smooth, well-prepared inspection tends to produce a shorter, less alarming list. Here's how Louisville sellers should get ready.</p>`,
  sections: [
    {
      h2: "Clear access to everything",
      html: `<p>The fastest way to a bad report is a system the inspector couldn't fully evaluate. Clear a path to the electrical panel, water heater, furnace, and the crawl space or attic access. Move boxes off the basement walls, unblock the HVAC returns, and make sure the inspector can open the garage, get to the sump pit, and reach every exterior wall. Anything inaccessible gets noted as "unable to inspect," which makes buyers nervous.</p>`
    },
    {
      h2: "Handle the cheap stuff before they arrive",
      html: `<p>Replace burned-out bulbs (so "light inoperable" doesn't imply a wiring problem), swap dead smoke and CO detector batteries, replace the HVAC filter, and re-caulk tubs and windows where it's failed. Fix running toilets, dripping faucets, and loose toilet seats. None of these are major, but a report full of small items reads as deferred maintenance and invites the buyer to look harder.</p>`
    },
    {
      h2: "Address safety items directly",
      html: `<p>Inspectors and buyers react strongest to safety findings: missing GFCI protection near water, a double-tapped breaker, missing stair or deck railings, reversed hot/neutral wiring at outlets, and gaps around the water heater or furnace flue. If you know about any of these, fixing them beforehand removes the scariest lines from the report. In Louisville, a Federal Pacific panel is worth addressing or at least pricing out before listing.</p>`
    },
    {
      h2: "Deal with water and drainage",
      html: `<p>Extend downspouts away from the foundation, clean the gutters, and regrade obvious low spots against the house. Run a dehumidifier in the basement or crawl space in the days before the inspection so it doesn't smell musty. If you've had past water intrusion and fixed it, have the paperwork ready — a documented, repaired issue is far less alarming than a surprise damp corner.</p>`
    },
    {
      h2: "Be somewhere else, and leave documentation",
      html: `<p>Plan to be out of the house for the full inspection window, pets included. Leave out any records that help: recent roof or HVAC invoices, the radon mitigation certificate, termite treatment history, and permits for past work. And complete your Kentucky disclosure form carefully and honestly — see our <a href="/blog/kentucky-seller-disclosure-law">guide to the disclosure law</a> — since inconsistencies between the form and the report create their own problems.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Clear access to the panel, water heater, HVAC, attic, and crawl space so nothing gets marked "unable to inspect."</li>
        <li>Fix cheap items — bulbs, detector batteries, running toilets, failed caulk — so the report doesn't read as neglect.</li>
        <li>Resolve or price out safety findings in advance, including a Federal Pacific panel if you have one.</li>
        <li>Manage drainage and basement humidity, and leave maintenance records and permits out for the buyer.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 20
{
  slug: "what-happens-after-a-bad-home-inspection-report",
  title: "What Happens After a Bad Home Inspection Report? Your Options in Kentucky",
  metaTitle: "What Happens After a Bad Home Inspection Report? | Kentucky",
  metaDescription: "A bad inspection report isn't the end of a Kentucky home purchase. Here are your options — renegotiate, request repairs, credit, or walk.",
  category: "Buying a Home",
  date: "2026-07-23",
  relatedSlugs: ["can-you-negotiate-repairs-after-home-inspection-kentucky", "first-time-home-buyer-inspection-guide-louisville", "should-you-ever-waive-a-home-inspection"],
  intro: `<p>A scary-looking inspection report is one of the most stressful moments in a home purchase — but it's rarely the end of the deal. In Kentucky, if you're within your inspection contingency period, you have several paths forward. Here's how to think about them.</p>`,
  sections: [
    {
      h2: "First, separate the report into tiers",
      html: `<p>Every inspection report contains a mix of items. Sort them: <strong>safety and major-system defects</strong> (roof at end of life, failed HVAC, active leaks, electrical hazards, structural movement, a bad sewer lateral), <strong>meaningful but routine repairs</strong> (water heater near end of life, minor roof repair, grading), and <strong>cosmetic or maintenance items</strong> (caulk, a stuck window, a missing outlet cover). Most of a long report is the third category. Focus your negotiation on the first.</p>`
    },
    {
      h2: "Option 1: Ask the seller to make repairs",
      html: `<p>You can submit a written request for the seller to repair specific items before closing. The upside is the work gets done without you managing it; the downside is you don't control the contractor or the quality, and repairs done under deadline pressure are sometimes minimal. Reserve repair requests for items where doing it right matters — roofing, electrical, plumbing, HVAC.</p>`
    },
    {
      h2: "Option 2: Ask for a price reduction or closing credit",
      html: `<p>Often the cleaner path: the seller credits you money at closing (or reduces the price) and you handle the repairs yourself afterward, with your own contractor and your own standards. Lenders cap how large a seller credit can be relative to the purchase price, so very large concessions sometimes have to be split between a price cut and a credit. This is the most common resolution in the Louisville market.</p>`
    },
    {
      h2: "Option 3: Renegotiate, re-inspect, or walk",
      html: `<p>For a major surprise — a failed foundation, a roof that needs full replacement, widespread polybutylene — you can reopen the overall deal, bring in a specialist for a focused re-inspection to scope the true cost, or, if you're within your contingency, terminate the contract and recover your earnest money per the contract terms. Walking away from a home with a five-figure hidden problem is a valid, sometimes correct, outcome.</p>`
    },
    {
      h2: "Keep perspective",
      html: `<p>Nearly every resale home in Louisville — especially anything built before 1980 — will generate a report with real findings. A thorough inspector's job is to document everything, which makes even a sound house look daunting on paper. Ask the inspector directly which items they'd prioritize if it were their purchase; a good one will tell you plainly. For how the back-and-forth actually works, see our guide to <a href="/blog/can-you-negotiate-repairs-after-home-inspection-kentucky">negotiating repairs after an inspection in Kentucky</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Sort the report into safety/major-system defects, routine repairs, and cosmetic items — negotiate on the first tier.</li>
        <li>Repair requests get the work done but you don't control quality; credits let you use your own contractor.</li>
        <li>Closing credits and price reductions are the most common resolution in the Louisville market, subject to lender caps.</li>
        <li>For a major hidden defect, re-inspecting with a specialist or terminating within your contingency are legitimate options.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 21
{
  slug: "can-you-negotiate-repairs-after-home-inspection-kentucky",
  title: "Can You Negotiate Repairs After a Home Inspection in Kentucky?",
  metaTitle: "Negotiating Repairs After a Home Inspection in Kentucky",
  metaDescription: "How repair negotiation works after a home inspection in Kentucky — the inspection contingency, what to ask for, and how sellers typically respond.",
  category: "Buying a Home",
  date: "2026-07-23",
  relatedSlugs: ["what-happens-after-a-bad-home-inspection-report", "first-time-home-buyer-inspection-guide-louisville", "kentucky-seller-disclosure-law"],
  intro: `<p>Yes — in most Kentucky residential transactions, the inspection is exactly the point at which repairs, credits, and price get renegotiated. How much leverage you have depends on your contract, the market, and how you frame the request. Here's how it works in practice around Louisville.</p>`,
  sections: [
    {
      h2: "It starts with the inspection contingency",
      html: `<p>Most Kentucky purchase contracts include an inspection contingency giving the buyer a defined window — often 7 to 14 days — to inspect the property and respond. Within that window you can typically request repairs or concessions, ask for more time to investigate a specific issue, or terminate the contract and recover your earnest money, depending on the exact contingency language. Read that section with your agent before you order the inspection so you know your deadlines.</p>`
    },
    {
      h2: "What you can reasonably ask for",
      html: `<p>The strongest requests focus on <strong>safety issues and major-system defects</strong>: active roof leaks, a failed or unsafe electrical panel, non-functioning HVAC, plumbing leaks, structural movement, a compromised sewer lateral, or significant water intrusion. Asking a seller to address a Federal Pacific panel, a bad sewer line, or a roof at end of life is normal and expected in the Louisville market. Asking them to re-caulk every window or fix cosmetic drywall cracks generally isn't, and a long nitpicky list can make a seller dig in.</p>`
    },
    {
      h2: "Repairs vs. credit vs. price reduction",
      html: `<p>Sellers usually respond with one of three things: agree to complete specific repairs before closing, offer a closing cost credit so you handle the work yourself, or reduce the sale price. Many Louisville buyers prefer a credit or price reduction — you control the contractor and the quality, and seller repairs done under deadline are sometimes just enough to check the box. Note that lenders limit how large a seller credit can be relative to the price, so big concessions may be split between a credit and a price cut.</p>`
    },
    {
      h2: "How market conditions change your leverage",
      html: `<p>In a slower market with more inventory, sellers are more willing to negotiate repairs and credits. In a hot micro-market — a well-priced house in Crescent Hill or the Cherokee Triangle with multiple offers — you may have less room, and some buyers waive minor requests to keep the deal clean. Your agent's read on the specific street and price point matters here.</p>`
    },
    {
      h2: "Get quotes before you negotiate a number",
      html: `<p>If you're asking for money instead of repairs, back it with a real contractor estimate rather than a guess. "The report says the roof is aging" is weak; "here's a $14,200 quote to replace the roof" is a number the seller's agent can work with. For a bigger-picture view of your options when a report comes back rough, see <a href="/blog/what-happens-after-a-bad-home-inspection-report">what happens after a bad inspection report</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>The inspection contingency in your Kentucky contract defines your window and your rights — read it before ordering the inspection.</li>
        <li>Focus requests on safety and major-system defects; long cosmetic lists weaken your position.</li>
        <li>Credits and price reductions let you control repair quality; seller repairs get the work done for you.</li>
        <li>Back any dollar request with a real contractor quote, and factor in how competitive the specific listing is.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 22
{
  slug: "first-time-home-buyer-inspection-guide-louisville",
  title: "First-Time Home Buyer's Guide to Inspections in Louisville",
  metaTitle: "First-Time Home Buyer Inspection Guide | Louisville",
  metaDescription: "Everything a first-time buyer in Louisville needs to know about the home inspection — timing, cost, what to attend, and how to read the report.",
  category: "Buying a Home",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-cost-louisville", "what-does-a-home-inspection-cover", "jefferson-county-home-inspection-what-buyers-should-know"],
  intro: `<p>If you're buying your first home in Louisville, the inspection can feel like a black box: you're told to get one, but not much about how it works or what to do with it. Here's the plain-language version.</p>`,
  sections: [
    {
      h2: "When the inspection happens",
      html: `<p>The inspection comes right after your offer is accepted, during the inspection contingency period defined in your contract — usually the first 7 to 14 days. Schedule it immediately, because that clock is short and popular inspectors book up. You pay for the inspection out of pocket, typically at the time of service, separate from your closing costs.</p>`
    },
    {
      h2: "What it costs and what to add",
      html: `<p>Budget <strong>$300–$500</strong> for a standard Louisville home inspection, plus add-ons. For most purchases we'd recommend at least a <strong>radon test</strong> ($125–$175 bundled — the whole metro is EPA Zone 1) and, on any home built before roughly 1980 or in an older neighborhood, a <strong>sewer scope</strong> ($150–$250). A <strong>termite/WDO report</strong> ($75–$150) is often required by FHA and VA lenders anyway. See our <a href="/blog/home-inspection-cost-louisville">Louisville inspection cost guide</a> for the full breakdown.</p>`
    },
    {
      h2: "Go to the inspection",
      html: `<p>Attend if you possibly can — ideally the last hour, when the inspector walks you through what they found. You'll learn more about your future home in that hour than in a week of reading. Bring a notepad, wear clothes you don't mind getting dusty, and ask questions freely. There's no dumb question about a house you're about to spend years paying for.</p>`
    },
    {
      h2: "How to read the report without panicking",
      html: `<p>Your report will be long and it will list problems — that's the job. Sort findings into three buckets: safety and big-ticket systems, routine repairs and maintenance, and cosmetic. A 40-item report with two real concerns is a normal, sound house. Ask the inspector which items they'd prioritize if they were buying it. For what's normal in local housing by era, read our <a href="/blog/jefferson-county-home-inspection-what-buyers-should-know">Jefferson County housing stock guide</a>.</p>`
    },
    {
      h2: "Then decide what to do",
      html: `<p>Within your contingency window you can request repairs, ask for a closing credit or price reduction, bring in a specialist to scope a major item, or walk away. First-time buyers sometimes feel they can't ask for anything — you can, and for safety and major-system items it's expected. Your agent will help you frame the request.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Schedule the inspection the moment your offer is accepted — the contingency window is short.</li>
        <li>Budget $300–$500 plus a radon test everywhere and a sewer scope on older homes.</li>
        <li>Attend the inspection, especially the final walkthrough with the inspector.</li>
        <li>Sort the report into safety, routine, and cosmetic — then negotiate on the first tier within your contingency.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 23
{
  slug: "diy-home-inspection-checklist-vs-professional",
  title: "DIY Home Inspection Checklist: What You Can (and Can't) Catch Yourself",
  metaTitle: "DIY Home Inspection Checklist vs. Professional",
  metaDescription: "What a Louisville buyer can spot on a self-guided walkthrough, and where a professional inspection is worth every dollar.",
  category: "DIY vs Professional",
  date: "2026-07-23",
  relatedSlugs: ["what-does-a-home-inspection-cover", "should-you-ever-waive-a-home-inspection", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>A careful walkthrough before you make an offer can save you the cost of an inspection on a house that was never going to work. But a DIY check is a filter, not a substitute — here's the honest split between what you can catch and what you can't.</p>`,
  sections: [
    {
      h2: "What you can reasonably spot yourself",
      html: `<ul>
        <li><strong>Grading and drainage:</strong> soil sloping toward the house, downspouts dumping at the foundation, water stains in the basement.</li>
        <li><strong>Roof age clues:</strong> curling or missing shingles visible from the ground, moss, sagging rooflines.</li>
        <li><strong>Big cosmetic tells:</strong> fresh paint in only one basement corner, doors that won't latch, sloping floors.</li>
        <li><strong>Water heater and HVAC age:</strong> the manufacture date on the data plate versus a 10–15 year typical lifespan.</li>
        <li><strong>Windows and moisture:</strong> failed seals (fogging between panes), soft window sills, musty smells.</li>
        <li><strong>Panel red flags:</strong> a "Federal Pacific" or "Stab-Lok" label on the electrical panel — extremely common in Louisville and worth knowing before you offer.</li>
      </ul>`
    },
    {
      h2: "What you can't catch without training and tools",
      html: `<p>Active knob-and-tube buried in walls, aluminum branch wiring behind cover plates, a cracked furnace heat exchanger, polybutylene supply lines inside walls, an undersized or improperly modified electrical panel, roof problems you can't see from the ground, structural issues masked by finishes, and — critically — the condition of the buried sewer lateral and whether the crawl space is quietly failing. These are where the five-figure surprises live.</p>`
    },
    {
      h2: "Tools don't close the gap",
      html: `<p>A moisture meter and a cheap thermal camera are fun, but interpreting them is the hard part — thermal images especially are easy to misread. A professional inspection isn't just equipment; it's a licensed inspector who has walked thousands of homes and knows which anomaly is a stain from 1998 and which is an active leak.</p>`
    },
    {
      h2: "The right way to use a DIY walkthrough",
      html: `<p>Use it to decide whether to make an offer at all, and to build a list of concerns to hand your inspector so they look harder at specific things. It is not a reason to skip the professional inspection — see our piece on <a href="/blog/should-you-ever-waive-a-home-inspection">whether you should ever waive an inspection</a> for why that's rarely a good trade in this market.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>You can spot drainage problems, obvious roof age, big cosmetic tells, appliance age, and a Federal Pacific panel label.</li>
        <li>You can't assess hidden wiring, heat exchangers, buried sewer lines, structural issues, or a failing crawl space.</li>
        <li>Consumer moisture meters and thermal cameras are easy to misinterpret without experience.</li>
        <li>Use a DIY walkthrough to decide whether to offer and to brief your inspector — not to replace the inspection.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 24
{
  slug: "should-you-ever-waive-a-home-inspection",
  title: "Should You Ever Waive a Home Inspection to Win a Bid in Louisville?",
  metaTitle: "Should You Waive a Home Inspection in Louisville?",
  metaDescription: "Waiving the inspection to win a competitive Louisville offer — the real risks, the middle-ground options, and when it's defensible.",
  category: "DIY vs Professional",
  date: "2026-07-23",
  relatedSlugs: ["diy-home-inspection-checklist-vs-professional", "what-happens-after-a-bad-home-inspection-report", "first-time-home-buyer-inspection-guide-louisville"],
  intro: `<p>In competitive Louisville micro-markets — the Highlands, Crescent Hill, Clifton, parts of St. Matthews — buyers sometimes waive the inspection contingency to make an offer stand out. It can win the house. It can also be the most expensive mistake of the whole purchase. Here's a clear-eyed look.</p>`,
  sections: [
    {
      h2: "What 'waiving' actually means",
      html: `<p>There's an important distinction. <strong>Waiving the inspection contingency</strong> means you give up the right to renegotiate or walk based on what an inspection finds. <strong>Waiving the inspection entirely</strong> means no one professionally looks at the house before you own it. You can do the first while still doing the second — pay for an inspection for your own information, just without the contractual right to act on it. That middle ground is almost always better than going in blind.</p>`
    },
    {
      h2: "The risk is asymmetric",
      html: `<p>The upside of waiving is winning a bidding war you might have lost by a few thousand dollars. The downside is buying a house with a failed foundation, a roof that needs full replacement, widespread polybutylene, or a collapsed sewer lateral — routinely $10,000 to $40,000+ — with no recourse. Older Louisville housing stock makes that downside a live possibility, not a hypothetical.</p>`
    },
    {
      h2: "Middle-ground options that stay competitive",
      html: `<ul>
        <li><strong>Pre-offer / pre-inspection:</strong> get the inspection done before you submit, so your offer can be contingency-free but informed. Requires a cooperative listing agent and a fast-moving inspector.</li>
        <li><strong>Information-only inspection:</strong> waive the contingency but keep the inspection for your own planning.</li>
        <li><strong>Shortened window or "major defects only" contingency:</strong> limit your renegotiation rights to big-ticket structural, roof, electrical, and mechanical items.</li>
      </ul>`
    },
    {
      h2: "When waiving is at least defensible",
      html: `<p>Newer construction with transferable warranties, a home where you've already done a thorough pre-offer inspection, or a full teardown where you're buying for the lot. Even then, know your numbers. Waiving on a 1928 house in the Cherokee Triangle because the market is hot is how people end up house-poor in year one.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Waiving the contingency and skipping the inspection are two different things — you can do the first and still inspect.</li>
        <li>The risk is asymmetric: you save a few thousand to win, and expose yourself to five-figure hidden defects with no recourse.</li>
        <li>Pre-offer inspections and "major defects only" contingencies keep you competitive without going in blind.</li>
        <li>Waiving is most defensible on new construction or a lot purchase — rarely on older Louisville housing stock.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 25
{
  slug: "home-inspection-checklist-for-landlords",
  title: "Home Inspection Checklist for Louisville Landlords and Property Managers",
  metaTitle: "Home Inspection Checklist for Louisville Landlords",
  metaDescription: "A practical inspection checklist for Louisville rental owners — acquisition, turnover, and periodic inspections, plus the local code angle.",
  category: "Landlords & Investors",
  date: "2026-07-23",
  relatedSlugs: ["how-often-should-landlords-inspect-rental-properties", "pre-purchase-inspection-guide-for-real-estate-investors", "multi-family-property-inspection-guide"],
  intro: `<p>For rental owners, inspections aren't just a purchase-time event — they're an ongoing risk-management tool. A consistent inspection routine protects the asset, limits liability, and keeps you ahead of code enforcement. Here's how Louisville landlords should structure it.</p>`,
  sections: [
    {
      h2: "Acquisition inspection: before you buy",
      html: `<p>Treat a rental purchase inspection at least as seriously as a personal-home purchase, and add: full sewer scope (deferred maintenance is common on rentals), a hard look at the electrical panel and any prior DIY wiring, water heater and HVAC age across every unit, and roof life expectancy. Price the near-term capital needs — roof, HVAC, sewer, panel — into your offer, because these are the items that wreck a rental's cash flow in year one.</p>`
    },
    {
      h2: "Know the local rental rules",
      html: `<p>Jefferson County / Louisville Metro has adopted the International Property Maintenance Code, and Metro Codes &amp; Regulations enforces habitability standards through the Property Maintenance Division. Some Kentucky jurisdictions and the Metro government have specific rental registration or inspection programs; confirm current requirements for your property's location before you close, and again if rules change. An inspection organized around IPMC habitability items (heat, hot water, weathertight envelope, working smoke/CO alarms, safe egress, no active leaks) keeps you defensible.</p>`
    },
    {
      h2: "Turnover inspection: between tenants",
      html: `<p>At every turnover, document condition with dated photos: walls, floors, appliances, windows, smoke and CO alarms (test and date them), water heater, HVAC filter, plumbing under every sink, and the exterior. This is your security-deposit evidence and your maintenance-planning tool. Catching a slow under-sink leak at turnover instead of six months in is the difference between a $150 fix and a $4,000 subfloor and mold job.</p>`
    },
    {
      h2: "Periodic inspection: during tenancy",
      html: `<p>Kentucky's landlord-tenant framework generally requires reasonable notice before entry (commonly 48 hours) except in emergencies, and many Louisville leases specify it. Schedule periodic interior inspections — quarterly to semi-annually is typical — to check for unreported leaks, HVAC filter neglect, unauthorized occupants or pets, and safety items. Put the right and the cadence in the lease so it's expected, not a surprise.</p>`
    },
    {
      h2: "Seasonal exterior checks",
      html: `<p>Twice a year, walk the exterior of every property: gutters, downspout extensions, grading, roof from the ground, exterior stairs and railings, and the crawl space or basement for moisture. Louisville's humidity and tree canopy make deferred exterior maintenance escalate fast.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>At acquisition, add a sewer scope and price roof, HVAC, sewer, and panel replacement into your offer.</li>
        <li>Organize inspections around IPMC habitability items; confirm Louisville Metro rental requirements for your property.</li>
        <li>Document every turnover with dated photos — it's both deposit evidence and a maintenance plan.</li>
        <li>Give proper notice (commonly 48 hours) and run periodic interior checks plus twice-yearly exterior walks.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 26
{
  slug: "how-often-should-landlords-inspect-rental-properties",
  title: "How Often Should Landlords Inspect Rental Properties in Kentucky?",
  metaTitle: "How Often Should Landlords Inspect Rentals? | Kentucky",
  metaDescription: "Recommended inspection frequency for Kentucky rental properties, the notice rules, and how to document interior and exterior checks.",
  category: "Landlords & Investors",
  date: "2026-07-23",
  relatedSlugs: ["home-inspection-checklist-for-landlords", "pre-purchase-inspection-guide-for-real-estate-investors", "multi-family-property-inspection-guide"],
  intro: `<p>There's no Kentucky statute that dictates a specific rental inspection schedule, so the right cadence is a judgment call balancing asset protection against tenants' right to quiet enjoyment. Here's a practical framework for Louisville-area landlords.</p>`,
  sections: [
    {
      h2: "A workable baseline schedule",
      html: `<ul>
        <li><strong>Move-in and move-out:</strong> every time, with a detailed dated photo record. Non-negotiable.</li>
        <li><strong>Interior periodic:</strong> every 6 months is a reasonable default; quarterly for higher-risk properties (student rentals, past problem tenancies, older systems).</li>
        <li><strong>Exterior / grounds:</strong> spring and fall at minimum — Louisville's freeze-thaw and humidity punish deferred exterior maintenance.</li>
        <li><strong>Post-event:</strong> after any major storm, hard freeze, or reported leak.</li>
      </ul>`
    },
    {
      h2: "The notice rules matter",
      html: `<p>Kentucky's Uniform Residential Landlord and Tenant Act, where adopted (Louisville Metro and Jefferson County have adopted it), generally requires the landlord to give at least <strong>two days' notice</strong> and enter at reasonable times, except in an emergency. Put your inspection right and cadence in the lease, give written notice every time, and keep a copy. Entering without notice is how a routine inspection turns into a legal problem.</p>`
    },
    {
      h2: "Don't over-inspect",
      html: `<p>Monthly interior inspections read as harassment, damage the tenant relationship, and can expose you to claims of interfering with quiet enjoyment. If you feel you need to be inside every month, that's usually a screening or lease-enforcement problem, not an inspection-frequency problem.</p>`
    },
    {
      h2: "What to actually check on a periodic visit",
      html: `<p>Smoke and CO alarms (test and date), HVAC filter, under-sink plumbing for leaks, water heater and area around it, window and door operation, signs of moisture or mold, unauthorized pets or occupants, and any tenant-reported item. Keep it to 15–20 minutes and leave a summary of what you looked at.</p>`
    },
    {
      h2: "Bring in a professional periodically",
      html: `<p>Every few years, or before a major lease renewal on a long tenancy, a professional inspection of the building systems — roof, structure, electrical, HVAC, plumbing, crawl space — catches the slow deterioration that a quick interior walk misses. It also gives you an objective condition baseline if a dispute ever arises.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Always inspect at move-in and move-out with dated photos; interior periodic checks every 6 months is a solid default.</li>
        <li>Walk the exterior each spring and fall, and after any major storm, freeze, or reported leak.</li>
        <li>Give the notice Kentucky's landlord-tenant act requires (at least two days where adopted) and put the cadence in the lease.</li>
        <li>Avoid monthly interior visits, and commission a professional systems inspection every few years.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 27
{
  slug: "pre-purchase-inspection-guide-for-real-estate-investors",
  title: "Pre-Purchase Inspections for Louisville Real Estate Investors: What to Prioritize",
  metaTitle: "Pre-Purchase Inspections for Louisville Investors",
  metaDescription: "How investors should scope a Louisville pre-purchase inspection — the big-ticket systems, deferred maintenance patterns, and deal-killers.",
  category: "Landlords & Investors",
  date: "2026-07-23",
  relatedSlugs: ["multi-family-property-inspection-guide", "home-inspection-checklist-for-landlords", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>An investor's inspection has a different goal than a homebuyer's. You're not deciding whether to love the house — you're pricing risk and capital expense against projected return. Here's how to scope an inspection on a Louisville investment property so the report answers the questions your spreadsheet is asking.</p>`,
  sections: [
    {
      h2: "Lead with the five big-ticket systems",
      html: `<p>Roof, HVAC, electrical service and panel, plumbing supply and drain, and the sewer lateral. On a typical Louisville value-add purchase, these five determine whether the deal works. Get remaining useful life and replacement cost for each, and always add a sewer scope — a $10,000 lateral replacement in Germantown or the Highlands can erase a year of cash flow.</p>`
    },
    {
      h2: "Recognize the deferred-maintenance patterns",
      html: `<p>Investor-owned and long-held rentals in Louisville tend to share issues: DIY electrical (open junction boxes, over-fused circuits, Federal Pacific panels left in place), partial plumbing repairs mixing galvanized and copper, roofs patched rather than replaced, and crawl spaces with failed vapor barriers and standing water. None are automatically deal-killers, but each is a line item, and together they add up fast.</p>`
    },
    {
      h2: "Know your deal-killers before you inspect",
      html: `<p>Decide in advance what kills the deal at your price: foundation failure, a full roof plus full HVAC plus full repipe stacking up, active knob-and-tube throughout, fire or structural damage, or a sewer line requiring open-cut replacement under a finished basement. Tell the inspector these are your thresholds so the report and the on-site conversation prioritize them.</p>`
    },
    {
      h2: "Match the inspection to the strategy",
      html: `<p>A buy-and-hold rental needs a thorough systems inspection and a realistic 5-year capital plan. A flip needs the same plus a sharper read on scope creep — the stuff that turns a cosmetic rehab into a gut. A BRRRR needs an honest after-repair condition assessment the appraiser and your refinance lender will accept. Say which one you're doing when you book.</p>`
    },
    {
      h2: "Use the report to renegotiate, not just to inform",
      html: `<p>On investment deals, the inspection is a pricing tool. Bring contractor quotes for the big items and renegotiate against them within your contingency. If the seller won't move and the numbers don't work, walking is a successful outcome — you spent a few hundred dollars to avoid a bad six-figure decision.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Scope the inspection around roof, HVAC, electrical, plumbing, and the sewer lateral — and always add a sewer scope.</li>
        <li>Expect the local deferred-maintenance pattern: DIY electrical, mixed plumbing, patched roofs, wet crawl spaces.</li>
        <li>Define your deal-killers before the inspection so the report prioritizes them.</li>
        <li>Match inspection depth to strategy (hold, flip, BRRRR), and use contractor quotes to renegotiate.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 28
{
  slug: "multi-family-property-inspection-guide",
  title: "Multi-Family Property Inspections: What Louisville Investors Need to Know",
  metaTitle: "Multi-Family Property Inspection Guide | Louisville",
  metaDescription: "How multi-family inspections differ from single-family in Louisville — shared systems, unit sampling, code history, and the Old Louisville factor.",
  category: "Landlords & Investors",
  date: "2026-07-23",
  relatedSlugs: ["pre-purchase-inspection-guide-for-real-estate-investors", "home-inspection-checklist-for-landlords", "sewer-scope-inspection-cost-louisville"],
  intro: `<p>Louisville has a deep stock of two- to four-unit buildings — the doubles and converted Victorians of Old Louisville, the Highlands, Germantown, and Portland. A multi-family inspection isn't just a single-family inspection times three; the shared systems and conversion history are where the real risk lives.</p>`,
  sections: [
    {
      h2: "Shared systems get the most scrutiny",
      html: `<p>The roof, foundation, main electrical service, common-area plumbing, and any shared heating plant serve every unit, so a failure hits your whole income stream at once. Establish the age and condition of each, how utilities are separated (individually metered vs. owner-paid), and whether a single furnace or boiler heats multiple units — common in older Louisville doubles and a major capital consideration.</p>`
    },
    {
      h2: "Unit sampling and access",
      html: `<p>A thorough inspector will want into every unit. If a tenant denies access, that unit gets a limited or deferred inspection — note which units were fully seen. In each accessible unit, check the panel or subpanel, HVAC or heat source, water heater, kitchen and bath plumbing, windows, smoke and CO alarms, and means of egress. Patterns across units (the same failed water heater brand in all three) tell you about the last owner's maintenance approach.</p>`
    },
    {
      h2: "Conversion and code history",
      html: `<p>Many Louisville multis are single-family homes carved into units decades ago, sometimes without permits. Look for undersized egress from basement or attic units, shared or improperly separated HVAC and electrical, missing fire separation between units, and bedrooms without a legal second means of escape. Check with Louisville Metro Codes &amp; Regulations on the legal unit count and permit history — a "triplex" that's legally a single-family is a serious problem.</p>`
    },
    {
      h2: "Sewer, water, and the basement",
      html: `<p>Multiple kitchens and baths feed one aging lateral, so a sewer scope is essential on any older Louisville multi. In the basement, look at the condition of the common laundry, the water heater array, the main shutoff and branch valves, moisture and the sump system, and whether the framing shows sagging from decades of added load.</p>`
    },
    {
      h2: "Budget the inspection accordingly",
      html: `<p>A two-to-four-unit inspection takes longer and costs more than a single-family — plan on several hours on site and a fee scaled to unit count, plus the sewer scope. It's still trivial against the cost of discovering an illegal unit or a shared-boiler replacement after closing.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Shared systems — roof, foundation, main service, common plumbing, shared heat — are the highest-stakes items.</li>
        <li>Get into every unit if possible; note which units were fully inspected and look for cross-unit patterns.</li>
        <li>Verify legal unit count, permit history, egress, and fire separation with Louisville Metro Codes &amp; Regulations.</li>
        <li>Always sewer-scope an older multi, and budget for a longer, unit-count-scaled inspection.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 29
{
  slug: "crawl-space-basement-inspection-guide-louisville",
  title: "Crawl Spaces, Basements, and Louisville Soil: What Every Homeowner Should Know",
  metaTitle: "Crawl Space & Basement Inspection Guide | Louisville",
  metaDescription: "Why the crawl space or basement is the most important part of a Louisville inspection — clay soil, karst, high water table, and encapsulation.",
  category: "Home Systems",
  date: "2026-07-23",
  relatedSlugs: ["mold-inspection-cost-louisville", "jefferson-county-home-inspection-what-buyers-should-know", "common-issues-found-in-louisville-home-inspections"],
  intro: `<p>If there's one part of a Louisville home where an inspection earns its fee, it's below the first floor. Clay-heavy soil, karst limestone in the east end, and a high water table in the south and west all conspire to push water where you don't want it. Here's what a proper crawl space and basement inspection involves and why it matters.</p>`,
  sections: [
    {
      h2: "Why Louisville soil and geology are hard on foundations",
      html: `<p>Much of the metro sits on expansive clay that swells when wet and shrinks when dry, cycling stress into foundation walls and footings year after year. Eastern Jefferson County, Oldham County, and Bullitt County add karst limestone, where dissolving bedrock creates voids, springs, and sinkholes that show up as settlement. The Ohio River floodplain and creek corridors in the south and west bring a seasonally high water table. Different mechanisms, same result: water and movement against the foundation.</p>`
    },
    {
      h2: "What a real crawl space inspection looks like",
      html: `<p>Not a flashlight glance from the hatch. The inspector physically enters and moves through the crawl space to check for standing water and water staining, the condition of the vapor barrier, foundation wall cracks and movement, wood rot and fungal growth on joists and subfloor, pest and termite evidence, the condition of ductwork and insulation, and whether support piers or posts have settled. In a Louisville crawl space, all of that is common enough that skipping the physical entry means missing real problems.</p>`
    },
    {
      h2: "Basement warning signs",
      html: `<p>Horizontal cracks or inward bowing in a block wall (soil pressure), stair-step cracks (settlement), efflorescence and water staining, a sump pit that's always wet or has no pump, rust lines on stored items marking past flood levels, and fresh paint or fresh drywall in just one corner. A finished basement can hide all of this, which is why disclosure history and moisture readings behind finishes matter.</p>`
    },
    {
      h2: "Encapsulation: when it's worth it",
      html: `<p>Crawl space encapsulation — a sealed heavy liner over the floor and walls, closed vents, and usually a dedicated dehumidifier — is increasingly common in Louisville and genuinely helps with humidity, mold, and comfort. It also hides the wood it covers, so on an already-encapsulated home, ask when it was done, by whom, and whether any moisture or pest issues were addressed first. Encapsulating over an active problem just delays the discovery.</p>`
    },
    {
      h2: "What it costs to fix the common findings",
      html: `<p>Extending downspouts and regrading: a few hundred dollars. New vapor barrier: $1,500–$3,500. Interior drain tile and a sump system: $5,000–$12,000. Wall stabilization (carbon fiber or bracing): $4,000–$10,000+. Full encapsulation: $8,000–$20,000. Knowing which end of that range you're looking at before closing is the whole point of the inspection.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Expansive clay, east-end karst, and a high water table in the south and west all drive foundation and moisture problems.</li>
        <li>A proper crawl space inspection means physically entering — vapor barrier, cracks, rot, pests, piers, ductwork.</li>
        <li>Watch for bowing block walls, stair-step cracks, efflorescence, and one freshly painted basement corner.</li>
        <li>Encapsulation helps but hides wood — on an encapsulated home, confirm problems were fixed first.</li>
      </ul>`
    }
  ]
},

// ─────────────────────────────────────────────────────────────
// 30
{
  slug: "common-issues-found-in-louisville-home-inspections",
  title: "The 10 Most Common Issues We Find in Louisville Home Inspections",
  metaTitle: "10 Most Common Issues in Louisville Home Inspections",
  metaDescription: "The defects that turn up most often in Louisville home inspections — panels, drainage, sewer lines, roofs, and the local wiring and plumbing eras.",
  category: "Local Insights",
  date: "2026-07-23",
  relatedSlugs: ["jefferson-county-home-inspection-what-buyers-should-know", "crawl-space-basement-inspection-guide-louisville", "sewer-scope-inspection-cost-louisville"],
  intro: `<p>Across the Louisville metro, the same findings come up again and again. None of these should scare you off a house on their own — they're the normal wear and history of local housing stock — but knowing the pattern helps you shop smarter and budget realistically.</p>`,
  sections: [
    {
      h2: "1–2. Federal Pacific panels and DIY electrical",
      html: `<p><strong>Federal Pacific Stab-Lok panels</strong> are everywhere in 1950s–1980s Louisville homes and are a recognized fire-safety concern warranting replacement. Right behind them: <strong>amateur wiring</strong> — open junction boxes, missing covers, over-fused circuits, backstabbed outlets, and ungrounded three-prong receptacles, especially in homes that have passed through several owners.</p>`
    },
    {
      h2: "3–4. Grading and gutter drainage",
      html: `<p>Soil sloping toward the foundation and downspouts discharging right at the wall are the most common findings we write, period. They're also among the cheapest to fix and the most consequential if ignored, since they feed almost every basement and crawl space moisture problem in the region.</p>`
    },
    {
      h2: "5–6. Aging sewer laterals and older plumbing",
      html: `<p>Clay-tile and cast iron <strong>sewer laterals</strong> with root intrusion or corrosion in pre-1970 neighborhoods — and the reminder that the lateral is the homeowner's responsibility in Louisville. Inside the house: <strong>galvanized supply lines</strong> restricting flow in older homes, and <strong>polybutylene</strong> in homes built roughly 1978–1995, particularly in south-county and Bullitt County subdivisions.</p>`
    },
    {
      h2: "7–8. Roof age and attic ventilation",
      html: `<p>Asphalt <strong>roofs at or past their service life</strong>, often with a second layer over the first, and <strong>inadequate attic ventilation and insulation</strong> — blocked soffits, bathroom fans dumping into the attic, and insulation well below current levels, which drives ice damming in winter and heat load in summer.</p>`
    },
    {
      h2: "9–10. Crawl space moisture and HVAC at end of life",
      html: `<p><strong>Crawl space moisture</strong> — failed or missing vapor barriers, standing water, rot, and pest activity, driven by clay soil and Ohio Valley humidity. And <strong>HVAC systems past their reliable lifespan</strong>: original furnaces and air conditioners 15–25 years old, aging heat pumps, and in older homes, boilers and radiator systems that need evaluation rather than assumption.</p>`
    },
    {
      h2: "Honorable mentions",
      html: `<p>Just outside the top 10: missing GFCI protection in kitchens, baths, and garages; deck ledger boards attached without proper flashing or fasteners; water heaters past 12–15 years or missing a temperature-and-pressure discharge line; wood-to-soil contact inviting termites; and failed window seals. For how these break down by the decade a home was built, see our <a href="/blog/jefferson-county-home-inspection-what-buyers-should-know">Jefferson County housing stock guide</a>.</p>`
    },
    {
      h2: "Key takeaways",
      html: `<ul>
        <li>Federal Pacific panels and amateur wiring are the most common electrical findings in the Louisville metro.</li>
        <li>Grading and gutter drainage top the overall list — cheap to fix, and the source of most moisture problems.</li>
        <li>Aging clay/cast iron sewer laterals, galvanized supply lines, and 1978–1995 polybutylene are the plumbing pattern.</li>
        <li>Expect end-of-life roofs and HVAC, poor attic ventilation, and crawl space moisture on older local homes.</li>
      </ul>`
    }
  ]
}

];
