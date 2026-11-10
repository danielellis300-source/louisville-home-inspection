/* ════════════════════════════════════════════════════════════
   Per-suburb content for the city landing pages.
   Rendered into full pages by scripts/generate-cities.js
   (invoked from scripts/generate.js).

   One object per suburb. `slug` must match an entry in
   site-config.js `cities` (minus the leading slash).
   ════════════════════════════════════════════════════════════ */

module.exports = [

  {
    slug: "st-matthews",
    name: "St. Matthews",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "eastern Jefferson County",
    geo: { lat: 38.2525, lng: -85.6335 },
    hood: "Beargrass, Bauer Farm, Cherrywood, the Frankfort Avenue corridor, and the neighborhoods around Oxmoor",
    blurb1: `St. Matthews is one of Louisville's oldest inner-ring suburbs, and its housing reflects it — brick Cape Cods, Tudors, and ranch homes built mostly between the 1920s and the 1950s, with pockets of older frame houses near Frankfort Avenue and Chenoweth Run. Homes this age routinely carry galvanized steel supply lines that have corroded and lost pressure, cast iron drain stacks near the end of their service life, and 60- to 100-amp electrical panels that were never upgraded for central air and modern loads.`,
    blurb2: `The mature tree canopy that makes St. Matthews so desirable is also hard on buried infrastructure. Root intrusion into clay-tile sewer laterals is one of the most common findings here, which is why we recommend a sewer scope on nearly every pre-1970 home in the area. Lots near Beargrass Creek and its tributaries also sit low enough that grading, sump pump condition, and past basement seepage deserve a close look before you commit.`,
    faqLocal: {
      q: "What should I watch for when buying an older home in St. Matthews?",
      a: "The three big ones are original galvanized plumbing that has lost pressure, an undersized or outdated electrical panel, and clay-tile sewer laterals with tree-root intrusion. We check all three on every St. Matthews inspection and will tell you plainly which are worth negotiating and which are simply age-appropriate maintenance."
    }
  },

  {
    slug: "jeffersontown",
    name: "Jeffersontown",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "southeastern Jefferson County",
    geo: { lat: 38.1937, lng: -85.5644 },
    hood: "the historic Gaslight district, Charlie Vettiner, Skyview, and the subdivisions off Taylorsville and Ruckriegel",
    blurb1: `Jeffersontown covers a lot of ground, and the inspection priorities shift with the decade. The historic core near Gaslight Square has homes from the 1800s and early 1900s with the wiring, plumbing, and foundation quirks you would expect. The much larger share of J-town housing went up between the 1960s and the 2000s in subdivisions off Taylorsville Road and Ruckriegel Parkway, where aluminum branch wiring, Federal Pacific Stab-Lok panels, and first-generation HVAC systems are the recurring findings.`,
    blurb2: `Southeastern Jefferson County sits on karst limestone, so we pay particular attention to the ground. Sinkholes, subsurface voids, and spring seepage can show up as foundation settlement cracks, doors that no longer latch, or chronic water in a crawl space. None of that automatically kills a deal, but you want it identified and understood before closing rather than discovered after the first heavy rain.`,
    faqLocal: {
      q: "Is sinkhole and karst activity a real concern in Jeffersontown?",
      a: "Yes. Much of southeastern Jefferson County sits on soluble limestone, and karst-related settlement is a genuine local issue. We look for the surface signs during every inspection — stair-step foundation cracks, sloping floors, doors out of square, and unexplained crawl space water — and flag anything that warrants a structural engineer's opinion before you close."
    }
  },

  {
    slug: "middletown",
    name: "Middletown",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "far-eastern Jefferson County",
    geo: { lat: 38.2445, lng: -85.5391 },
    hood: "the historic Main Street district, Lake Forest, Eastpoint, and the newer subdivisions toward the Oldham County line",
    blurb1: `Middletown pairs a small historic core along Main Street with a large volume of newer construction stretching east toward Oldham County. On the newer homes, our highest-value visit is a pre-drywall inspection — framing, electrical rough-in, plumbing, and duct runs are all still visible, and catching a problem then is far cheaper than opening finished walls later. On the final walkthrough we routinely find punch-list items the builder's own quality check missed: grading that slopes toward the house, missing attic insulation baffles, and HVAC systems that were never properly balanced room to room.`,
    blurb2: `The Shelbyville Road corridor through Middletown runs across karst limestone, and sinkhole activity has been documented in the area. On both new and resale homes we look for settlement patterns, evidence of prior sinkhole remediation, and drainage that concentrates stormwater in one spot — the conditions that tend to open a void over time.`,
    faqLocal: {
      q: "Do I still need an inspection on a new construction home in Middletown?",
      a: "Absolutely. New homes in Middletown routinely have defects — incomplete flashing, unbalanced HVAC, improper grading, missing insulation, and unsealed penetrations are all common. The builder's walkthrough is done by someone who works for the builder. An independent inspection, ideally at both pre-drywall and final walkthrough, gives you leverage while the builder is still responsible for fixing what we find."
    }
  },

  {
    slug: "prospect",
    name: "Prospect",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson and Oldham Counties",
    countyLabel: "the Jefferson–Oldham county line",
    geo: { lat: 38.3459, lng: -85.6110 },
    hood: "Hunting Creek, Sutherland, Timber Ridge, and the riverfront properties along the Ohio",
    blurb1: `Prospect homes tend to be large, which means longer inspections and more systems to evaluate — multiple HVAC zones, 200-amp-plus electrical service, finished lower levels, and often a pool or outbuilding that is quoted separately. Most of the housing dates from the 1980s onward, so the recurring findings are less about worn-out original systems and more about deferred maintenance on expensive components: roofs at the end of a 20-year cycle, aging first-generation geothermal or dual-zone HVAC, and EIFS or stucco cladding that needs moisture-intrusion scrutiny.`,
    blurb2: `Properties along the Ohio River bluffs bring two extra considerations: slope stability on the steep lots down to the water, and flood exposure on the low-lying riverfront parcels. We assess visible signs of hillside movement — retaining wall deflection, stepped cracks, doors out of square — and we will tell you when a geotechnical or structural specialist should weigh in before you close.`,
    faqLocal: {
      q: "Why does a home inspection in Prospect cost more than the Louisville average?",
      a: "Pricing is driven by square footage and system count, and Prospect homes are larger than average. Multiple HVAC zones, larger electrical services, finished basements, pools, outbuildings, and riverfront slope considerations all add time on site and detail to the report. We give you a firm all-in quote — including any add-ons — before you book."
    }
  },

  {
    slug: "anchorage",
    name: "Anchorage",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "eastern Jefferson County",
    geo: { lat: 38.2670, lng: -85.5305 },
    hood: "the historic railroad-era estates, Owl Creek, Evergreen, and the wooded acreage lots throughout the city",
    blurb1: `Anchorage is a low-density city of large lots, mature landscaping, and a mix of restored railroad-era estates from the late 1800s and newer luxury infill. On the historic homes, we give extra attention to slate and tile roofs, original plaster and lath, knob-and-tube remnants, plaster-era electrical service, and boiler or radiator heating systems that may be decades past their design life. Restoration quality varies widely house to house, so each one is really its own inspection.`,
    blurb2: `Many Anchorage properties are on private septic systems and, in some cases, private wells, since parts of the city were never connected to municipal service. Those are separate evaluations with their own equipment and checklist, and we strongly recommend both when applicable. Long private driveways, detached carriage houses, and pool houses also add scope — tell us what is on the property when you book so the quote is accurate.`,
    faqLocal: {
      q: "Do you inspect septic systems and wells on Anchorage properties?",
      a: "Yes. Many Anchorage homes are on private septic and some on private wells. Each is a separate add-on evaluation — a septic inspection includes locating and opening the tank and checking the drain field, and a well evaluation covers flow rate, pressure, and a water quality sample. We bundle both with the main inspection so you get one coordinated visit and one report."
    }
  },

  {
    slug: "lyndon",
    name: "Lyndon",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "northeastern Jefferson County",
    geo: { lat: 38.2570, lng: -85.5866 },
    hood: "the neighborhoods off La Grange Road, Whipps Mill, Robin, and Hurstbourne",
    blurb1: `Lyndon's housing stock is dominated by ranches, split-levels, and Cape Cods built from the 1950s through the 1970s. That build window puts three items near the top of our checklist: aluminum branch-circuit wiring (common in homes wired between roughly 1965 and 1973), Federal Pacific Stab-Lok electrical panels, and original HVAC and water heaters that are well past the point where replacement should be budgeted.`,
    blurb2: `These are generally solid, well-built homes, but many are being sold by original or long-term owners, which means updates have been sporadic. We help you separate the findings that are genuine safety or budget concerns — a hazardous panel, active roof leaks, a failing sewer lateral — from the cosmetic and age-appropriate items that come with any 50- to 70-year-old house.`,
    faqLocal: {
      q: "What is a Federal Pacific panel and why does it matter in Lyndon?",
      a: "Federal Pacific Electric (FPE) Stab-Lok panels were installed in a huge number of Louisville-area homes from the 1950s through the early 1980s, including many in Lyndon. Independent testing has linked their breakers to a higher rate of failure to trip under overload, which is a fire-safety concern. When we find one, we recommend evaluation and usually replacement by a licensed electrician — it is a common and reasonable negotiation item."
    }
  },

  {
    slug: "shively",
    name: "Shively",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "southwestern Jefferson County",
    geo: { lat: 38.2003, lng: -85.8225 },
    hood: "Beechmont-adjacent streets, the Dixie Highway corridor, and the post-war neighborhoods off Crums Lane",
    blurb1: `Shively is a compact, largely working-class suburb built up quickly after World War II, so most of its homes are modest Cape Cods and ranches from the 1940s and 1950s. The recurring findings match the era: galvanized and cast iron plumbing, small original electrical services, minimal attic insulation, and crawl spaces or shallow basements that were never fully sealed against moisture.`,
    blurb2: `Drainage is the defining local issue. Parts of Shively sit in the Pond Creek and Ohio River drainage basin with a high water table, and basement seepage, undersized or non-functioning sump pumps, and grading that pushes water toward the foundation are among the most common things we write up. On a lower-priced home, knowing about a wet-basement history before closing can genuinely change the deal.`,
    faqLocal: {
      q: "How much should a home inspection cost in Shively?",
      a: "Most Shively homes are smaller post-war Capes and ranches, so they usually fall in our $299 or $349 tiers. Add-ons like a sewer scope ($195) or radon test ($150) are priced separately. Our prices are fixed by the home's square footage and age — no surprise charges once we are on site."
    }
  },

  {
    slug: "fern-creek",
    name: "Fern Creek",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "southeastern Jefferson County",
    geo: { lat: 38.1420, lng: -85.5730 },
    hood: "the Bardstown Road and Beulah Church corridors, Cedar Creek, and the subdivisions off Old Six Mile Lane",
    blurb1: `Fern Creek grew from a rural crossroads into a full suburb between the 1960s and the 1990s, and the housing tracks that timeline. Homes from the late 1960s and early 1970s frequently have aluminum branch wiring; homes from the late 1970s through the early 1990s frequently have polybutylene supply piping, a gray plastic pipe that was pulled from the market because it fails from the inside out, sometimes without warning.`,
    blurb2: `A lot of Fern Creek was on septic before sewer service expanded, so we often find abandoned septic tanks, converted laterals, or homes still on septic in the outer pockets. Clay-heavy soil also drives foundation and drainage findings — poor grading, downspouts discharging at the foundation, and crawl space moisture are routine write-ups here.`,
    faqLocal: {
      q: "Should I be worried about polybutylene plumbing in a Fern Creek home?",
      a: "It is worth taking seriously. Polybutylene supply piping was widely installed in this area from the late 1970s into the mid-1990s and has a documented tendency to fail without warning. We identify it by the piping visible at the water heater, under sinks, and at the main shutoff, and note it clearly in the report so you can price a repipe or negotiate before closing."
    }
  },

  {
    slug: "okolona",
    name: "Okolona",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Jefferson County",
    countyLabel: "southern Jefferson County",
    geo: { lat: 38.1495, lng: -85.6944 },
    hood: "the Preston Highway corridor, Outer Loop, Meadowvale, and the neighborhoods around Southside Drive",
    blurb1: `Okolona is a post-war and mid-century suburb of tract ranches and split-levels built mostly between the 1950s and the 1970s along Preston Highway and the Outer Loop. Expect the era's standard findings: aluminum branch wiring in the later homes, aging electrical panels, original or first-replacement HVAC, thin attic insulation, and crawl spaces that need to be entered and photographed rather than glanced at from the hatch.`,
    blurb2: `Portions of Okolona drain toward Pond Creek and its tributaries, and low-lying streets can have a real high-water-table problem. We look closely at sump pump presence and condition, foundation and crawl space moisture staining, and site grading — the cheap fixes (extending downspouts, regrading a flower bed) versus the expensive ones (interior drain tile, a failing retaining wall) are exactly what you want sorted out before closing.`,
    faqLocal: {
      q: "Why does the crawl space matter so much on an Okolona home?",
      a: "Most Okolona homes of this era are built over a crawl space, and southern Jefferson County's clay soil and drainage patterns push moisture into them. A proper inspection means physically entering the crawl space to check for standing water, vapor barrier condition, foundation cracks, rot, pest activity, and the state of the insulation and ductwork — not a flashlight look from the access door."
    }
  },

  {
    slug: "jeffersonville",
    name: "Jeffersonville",
    region: "IN",
    stateName: "Indiana",
    stateAbbr: "IN",
    county: "Clark County, Indiana",
    countyLabel: "Clark County, Indiana",
    geo: { lat: 38.2776, lng: -85.7372 },
    hood: "the historic downtown and Old Jeffersonville, Claysburg, Oak Park, and the newer subdivisions along Hamburg Pike and Charlestown Road",
    blurb1: `Jeffersonville sits directly across the Ohio River from Louisville, and its housing splits between a dense historic downtown — shotgun houses, Federal and Victorian homes from the 1800s with knob-and-tube remnants, balloon framing, and original stone foundations — and newer subdivisions spreading north and east. On the older homes, wiring, plumbing, and foundation moisture are the core issues; on the newer ones, grading, drainage, and builder punch-list items dominate.`,
    blurb2: `Flood exposure is the single biggest local difference from the Kentucky side. Much of older Jeffersonville lies behind the Ohio River floodwall in mapped FEMA flood zones, and the 1937 flood reached deep into the city. If a home is in a flood zone, we note it so you can budget for flood insurance and, if needed, obtain an elevation certificate before closing. Note also that Indiana, unlike Kentucky, does not require home inspectors to hold a state license — so an inspector's certification and insurance matter even more here.`,
    faqLocal: {
      q: "Is flooding a concern when buying in Jeffersonville, IN?",
      a: "For much of the older city, yes. Large parts of Jeffersonville are in FEMA-mapped flood zones behind the Ohio River floodwall. We identify visible flood-related conditions — water lines, foundation damage, sump systems, and elevation of mechanicals — and recommend you confirm the flood zone and lender flood-insurance requirement, and get an elevation certificate if the property is in or near a mapped zone."
    }
  },

  {
    slug: "new-albany",
    name: "New Albany",
    region: "IN",
    stateName: "Indiana",
    stateAbbr: "IN",
    county: "Floyd County, Indiana",
    countyLabel: "Floyd County, Indiana",
    geo: { lat: 38.2856, lng: -85.8241 },
    hood: "Mansion Row and the downtown historic district, Silver Hills, and the hillside neighborhoods up toward Floyds Knobs",
    blurb1: `New Albany has one of the richest historic housing stocks in the metro — the Mansion Row district alone holds blocks of grand 1850s to 1870s homes with slate roofs, original plaster, tall masonry chimneys, and mechanical systems that have been layered in over 150 years. These homes reward a slow, thorough inspection: roof and chimney condition, structural movement in load-bearing masonry, knob-and-tube and early wiring, and the state of any additions or conversions.`,
    blurb2: `The other defining local feature is topography. The "Knobs" rise steeply behind the city, and hillside homes in Silver Hills and toward Floyds Knobs bring slope-stability questions — retaining wall condition, hillside drainage, cut-and-fill settlement, and evidence of past earth movement. Floyd County also has karst geology with springs and sinkholes. As in the rest of Indiana, home inspectors are not state-licensed, so we lead with our certification, standards of practice, and insurance.`,
    faqLocal: {
      q: "What should I know about buying a historic home in New Albany?",
      a: "Historic New Albany homes vary enormously in how well they have been maintained and updated. The high-value inspection items are the roof and chimneys, structural condition of the masonry, the age and safety of the wiring, plumbing material and condition, and the quality of any past renovations. We document each system in plain language so you know what you are taking on before you close."
    }
  },

  {
    slug: "clarksville",
    name: "Clarksville",
    region: "IN",
    stateName: "Indiana",
    stateAbbr: "IN",
    county: "Clark County, Indiana",
    countyLabel: "Clark County, Indiana",
    geo: { lat: 38.2967, lng: -85.7599 },
    hood: "the neighborhoods off Eastern Boulevard and Lewis and Clark Parkway, the area near the Falls of the Ohio, and the subdivisions toward Silver Creek",
    blurb1: `Clarksville sits between Jeffersonville and New Albany and is largely a mid-century suburb — ranch and tract housing built from the 1950s through the 1970s, with retail-driven growth along Veterans Parkway and Lewis and Clark Parkway. The typical findings are era-appropriate: aging electrical panels, aluminum branch wiring in later-1960s homes, original HVAC nearing replacement, and crawl spaces and shallow basements with moisture and insulation issues.`,
    blurb2: `Low-lying areas near Silver Creek and the Ohio River carry flood exposure, and some neighborhoods are in mapped FEMA zones, so we flag flood-related conditions and recommend confirming the zone before closing. Indiana does not license home inspectors, so when you are comparing inspectors on this side of the river, ask specifically about certification (InterNACHI or ASHI), errors-and-omissions insurance, and a sample report.`,
    faqLocal: {
      q: "How is a home inspection in Clarksville different from one in Louisville?",
      a: "The inspection scope is the same, but two things differ: Indiana does not require inspectors to be state-licensed the way Kentucky does, so credentials and insurance carry more weight, and the seller disclosure form follows Indiana Code 32-21-5 rather than Kentucky's. Flood-zone exposure near Silver Creek and the river is also a bigger factor in parts of Clarksville."
    }
  },

  {
    slug: "shepherdsville",
    name: "Shepherdsville",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Bullitt County",
    countyLabel: "Bullitt County",
    geo: { lat: 37.9884, lng: -85.7158 },
    hood: "the neighborhoods off Highway 44 and Cedar Grove Road, the subdivisions near the I-65 corridor, and the areas along the Salt River",
    blurb1: `Shepherdsville is the Bullitt County seat and has grown quickly along the I-65 corridor south of Louisville. A large share of its housing was built from the 1980s through the 2000s, which puts polybutylene supply piping, Federal Pacific and other older panel brands, builder-grade first-generation HVAC, and grading and drainage on former farmland at the top of the checklist.`,
    blurb2: `Two natural features shape local inspections. The Salt River runs through town and has a serious flood history — the 1997 flood was severe — so floodplain status matters on a meaningful number of properties. And Bullitt County is heavily karst, with caves, springs, and sinkholes, so we watch for settlement, subsurface drainage, and sinkhole activity on rural and subdivision lots alike.`,
    faqLocal: {
      q: "Do Shepherdsville homes have flood or sinkhole risk?",
      a: "Both are real local factors. Properties near the Salt River can be in mapped FEMA flood zones — Shepherdsville flooded badly in 1997 — and much of Bullitt County sits on karst limestone where sinkholes and subsurface drainage occur. We identify the visible signs of each during the inspection and tell you when to verify the flood zone or bring in a structural or geotechnical specialist."
    }
  },

  {
    slug: "mount-washington",
    name: "Mount Washington",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Bullitt County",
    countyLabel: "Bullitt County",
    geo: { lat: 37.9531, lng: -85.5427 },
    hood: "the subdivisions off Highway 44 and Bells Mill Road, the historic town center, and the newer developments toward the Spencer County line",
    blurb1: `Mount Washington is one of the fastest-growing communities in the Louisville metro, and the overwhelming majority of its homes have been built since the mid-1990s. That makes it a new-construction and near-new market: our emphasis is on grading and drainage across former farmland, framing and truss workmanship, HVAC balancing, attic insulation and ventilation, and the flashing and sealing details that builders commonly rush.`,
    blurb2: `Even a home only 10 to 20 years old has an inspection story — first-generation roofs reaching the end of their shingle warranty, builder-grade water heaters and HVAC at replacement age, settling on fill soil, and the last of the polybutylene plumbing on the earliest builds. Outer lots may also be on private septic, which is a separate evaluation we recommend when it applies.`,
    faqLocal: {
      q: "The house I'm buying in Mount Washington is only 15 years old — is an inspection still worth it?",
      a: "Yes. Homes built in the 2000s and 2010s routinely show first-generation roofs near end of life, HVAC and water heaters at replacement age, settlement on fill soil, drainage that was never quite right, and deferred maintenance from the original owner. An inspection tells you which big-ticket items are coming due so there are no surprises in year one."
    }
  },

  {
    slug: "la-grange",
    name: "La Grange",
    region: "KY",
    stateName: "Kentucky",
    stateAbbr: "KY",
    county: "Oldham County",
    countyLabel: "Oldham County",
    geo: { lat: 38.4073, lng: -85.3791 },
    hood: "the historic downtown along Main Street, the neighborhoods off Highway 53 and New Moody Lane, and the subdivisions spreading toward Crestwood and Buckner",
    blurb1: `La Grange is the Oldham County seat — known for the train that still runs down the middle of Main Street — and Oldham County's strong school reputation has driven heavy residential growth. The result is a split market: a historic downtown core with 19th- and early-20th-century homes, and a large and growing ring of subdivisions from the 1990s to today. The inspection priorities are very different between the two, and we tailor the visit accordingly.`,
    blurb2: `Oldham County is karst country, so foundation settlement, sinkhole activity, and subsurface drainage are on the checklist for every property. Homes on the rural edges of the county are frequently on private well and septic, each of which is a separate add-on evaluation. On the newer subdivision homes, grading on former farmland and builder punch-list items are the usual findings.`,
    faqLocal: {
      q: "Are homes near La Grange on well and septic, or city utilities?",
      a: "It depends on location. Homes in and near downtown La Grange are typically on city water and sewer, while properties on the rural edges of Oldham County are often on private well and septic. If the home you are buying has either, we recommend adding a well evaluation, a septic inspection, or both — we coordinate them with the main inspection so it is one visit and one report."
    }
  }

];
