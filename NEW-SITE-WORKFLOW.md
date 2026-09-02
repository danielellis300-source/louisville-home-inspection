# New Site Workflow — Lead Gen Landing Pages

Updated 2026-08-19 based on real lessons from indianapolishomeinspectionservices.com's
first two months live — see "Lessons baked into this version" at the bottom before you
skip straight to the prompt.

---

## STEP 1 — Paste this prompt into Claude to build the new site

```
I'm building a local lead-gen landing page. Use the file at:
c:\Users\danie\Indianapolis Home Inspection Services\SEO site\template\IndianapolisHome Inspection Services.html
as the master template.

Here are the details for the new site:

- Business niche: [e.g. Junk Removal / Pressure Washing / Tree Trimming]
- City: [e.g. Indianapolis, IN]
- Business name: [e.g. Indianapolis Pressure Washing Co]
- Phone number: [e.g. (317) 555-0100]
- Contact email: [e.g. crossroadleads@gmail.com]
- Domain: [e.g. indypressurewashing.com]
- Web3Forms access key: [paste your key here]
- Does a real, licensed operator fulfill leads from this site yet? [yes, with details / not yet]

Please do ALL of the following:

1. Copy the template content into a new file at:
   c:\Users\danie\[New Business Name]\index.html

2. Update every piece of content for the new niche — including:
   - Page title, meta description, canonical URL, og tags
   - Schema @type, name, url, @id, telephone, description
   - FAQ schema questions and answers (must match the visible FAQ text on the page exactly)
   - Header logo text and phone number
   - Hero H1, subheading, trust items
   - Form title, subject line hidden field, service dropdown options, placeholder text
   - The 4 stats bar items (see rule below — do not invent numbers)
   - All 6 service cards (icons, titles, descriptions)
   - Why Choose Us section (4 items)
   - How It Works section (3 steps)
   - FAQ section (5 questions relevant to this niche)
   - CTA banner heading and paragraph
   - Footer business name, services list, copyright
   - Every phone number and email throughout the page

3. HONESTY RULE — do not fabricate trust signals. No invented years-in-business,
   job/inspection counts, star ratings, or review counts anywhere in the visible
   content OR the schema (no `aggregateRating` block) unless I've given you a real,
   verifiable number. If I told you a real operator fulfills leads already, use their
   real credentials. If not, use honest process claims instead — "Same-Day Response,"
   "Free Quotes," "7 Days/Wk Availability," "Upfront Pricing" — never a specific
   fabricated statistic. The stats bar in the template is already written this way;
   keep it that way unless I give you real numbers to replace them with.

4. Make sure the Web3Forms access_key and subject line hidden fields are updated.

5. Fix the canonical URL, og:url, schema url, and schema @id to use the real domain.

6. Do not reference a logo/image file in the schema (`"image"` field) unless an
   actual image file will exist at that URL. A broken image reference in structured
   data is worse than no image reference.

7. Create a `_redirects` file in the site root with this content:
   /index.html / 301
   (Cloudflare Pages auto-redirects .html files with a 307/temporary status by
   default, which stops Google from consolidating ranking signal onto the clean
   URL. If this site ever grows beyond a single index.html — city pages, a blog —
   every new .html file needs its own `/page.html /page 301` line added here.)

8. Initialize a git repo in the new site folder, add index.html and _redirects,
   and make the first commit.

9. Tell me when to go create the GitHub repo (remind me: Public, no README checked).

10. After I give you the GitHub URL, push to it.

11. Walk me through the Cloudflare Pages setup, custom domain connection, and
    Google Search Console + Bing Webmaster Tools verification.
```

---

## STEP 2 — Before you start, have these ready

| Item | Where to get it |
|------|----------------|
| Business niche + city | Your niche list |
| Phone number | The client's number (or a tracking number) |
| Domain name | Purchase at Cloudflare Registrar (~$9/yr) |
| Web3Forms key | web3forms.com — enter your email, get a new key per site |
| Real operator status | Do you have someone who actually fulfills a lead yet, or not? This decides how the site is allowed to talk about itself (see Step 1, rule 3) and whether Step 4.5 (Google Business Profile) applies at all. |

---

## STEP 3 — GitHub (you do this, takes 30 seconds)

1. github.com → **+** → **New repository**
2. Name it something short: `indy-pressure-washing`
3. Set to **Public**
4. **DO NOT check "Add a README"** — leave all boxes unchecked
5. Click **Create repository**
6. Copy the `.git` URL and paste it to Claude

---

## STEP 4 — Cloudflare Pages (after GitHub push)

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages**
2. **Connect to Git** → select the new repo
3. Build settings:
   - Framework preset: **None**
   - Build command: *(blank)*
   - Build output directory: *(blank)*
4. **Save and Deploy** — takes ~60 seconds
5. Go to **Custom domains** tab → **Set up a custom domain**
6. Enter your domain → **Activate domain** (instant if domain is in Cloudflare)
7. Verify the `_redirects` file actually took effect:
   `curl -sI -o /dev/null -w "%{http_code}" https://yourdomain.com/index.html`
   should return `301`, not `307`. If it still says 307, the file didn't deploy
   correctly — check it's in the site root, not a subfolder.

---

## STEP 4.5 — Google Business Profile: think before you create one

**Only set up a GBP listing if a real, licensed person actually does the work this
site advertises.** Google's guidelines restrict local listings to businesses that
regularly do real work tied to that listing, and this exact pattern — a lead-gen
front with no real operator behind it — is a frequent target of GBP suspensions in
home-services niches specifically. If there's no real operator yet:

- Skip GBP for now. Competing purely on organic content is slower but carries no
  suspension risk.
- Revisit once a real fulfillment relationship exists — a GBP tied to the actual
  operator's name/license is the single highest-leverage local SEO lever there is,
  far more than anything on the page itself.

---

## STEP 5 — Search Console & Bing Webmaster (do this at launch, not two months later)

This got skipped on the Indianapolis site until manually noticed two months in — do
it as part of initial setup instead:

1. **Google Search Console** (search.google.com/search-console) → add the domain
   as a property → verify via the DNS TXT record Cloudflare gives you → submit
   `sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters) → same process, or import
   directly from an already-verified Search Console property.
3. Check back at 4-6 weeks: Search Console → **Pages** report tells you what's
   actually indexed, and **Performance** → Queries/Pages tells you what's getting
   impressions before you invest more content effort anywhere.

---

## STEP 6 — Things easy to forget (checklist before going live)

- [ ] Web3Forms **access_key** is updated (not the placeholder key)
- [ ] Web3Forms **subject** line says the right business name
- [ ] **Canonical URL** matches the real domain (`<link rel="canonical">`)
- [ ] **og:url** matches the real domain
- [ ] Schema **url** and **@id** match the real domain
- [ ] Schema has **no `image` field** unless a real image file exists at that URL
- [ ] Schema has **no `aggregateRating` block** unless the numbers are real
- [ ] Stats bar and all visible copy contain **no invented years/job-counts/ratings**
- [ ] `_redirects` file exists and `/index.html` returns a **301**, not 307
- [ ] **Every phone number** on the page is correct (appears ~8 times)
- [ ] **Email** in footer is correct
- [ ] File is named **index.html** (not the template name)
- [ ] Each site is its own **separate GitHub repo** — never reuse a repo
- [ ] GitHub repo created with **no README** (avoids merge conflict on first push)
- [ ] Test the **contact form** after going live (submit it, check your inbox)
- [ ] Check the site on **mobile** after deploying
- [ ] Google Search Console **and** Bing Webmaster Tools verified, sitemap submitted

---

## STEP 7 — Future updates (any time you edit the site)

Just edit index.html in VS Code, then run in the terminal:

```
cd "c:\Users\danie\[Site Folder]"
git add index.html
git commit -m "describe what you changed"
git push
```

Cloudflare auto-redeploys in ~60 seconds. No other steps needed.

**If you outgrow a single page** (adding city pages, a blog): every new `.html`
file needs a matching `/page.html /page 301` line added to `_redirects`, and every
new page's FAQ schema must exactly match its own visible FAQ text — mismatches
between the two are easy to introduce when copy-pasting a page and forgetting to
update one or the other.

---

## Lessons baked into this version (why these steps changed)

The Indianapolis site spent two months live with page-4 average rankings — a
Search Console audit found the real causes, and this workflow now avoids
reproducing them on future sites:

1. **Fabricated trust signals are a real and needless risk.** The original template
   had a hardcoded 4.9-star / 134-review schema block and "5,000+ inspections"
   copy with nothing behind either. Beyond the SEO mismatch (Google can't
   corroborate claims with no matching GBP/review history), inventing specific
   customer counts and ratings is an FTC false-advertising exposure — not worth it
   for a stats bar. Fixed at the source now.
2. **Cloudflare Pages' automatic `.html` → clean-URL redirect is a 307, not a 301.**
   That's an active bug, not a style preference — a 307 doesn't tell Google to
   consolidate ranking signal, so `/page` and `/page.html` can both stay
   independently indexed indefinitely, splitting whatever authority either one
   earns. A `_redirects` file with an explicit `301` line fixes it, but only if you
   remember to add one for every page — now baked into Step 1 and the checklist
   instead of discovered by accident later.
3. **Set up Search Console on day one.** Without it, there's no way to tell
   "not ranking yet because it's new" from "not ranking because something's
   actually broken" — and the Indianapolis site ran blind on this for two months.
4. **GBP is not automatically the right move for a lead-gen front with no real
   operator.** It's the single biggest local-SEO lever that exists, but it's also
   the one most likely to get suspended if there's nobody real behind the listing.
