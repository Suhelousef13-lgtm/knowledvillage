# Knowledge Village — Marketing Website

A lead-generating showcase site for Knowledge Village, the 430,000 sqm / 1,020-unit residential development in Erbil (Kirkuk Road) designed by MAP Architects & Engineers for Knowledge University.

## Goal

Turn brochure content into a site that converts visitors into enquiries: strong cinematic hero, deep detail per villa type (including floor plans), heavy use of the brochure renderings, and a clear enquiry path on every page.

## Pages

1. **Home (`/`)**
   - Full-screen hero using the uploaded teaser video ("Your home is here — Coming Soon") with headline, subline, and primary CTA "Register your interest".
   - Key figures strip: 430,000 sqm site, 1,020 units, 4 villa typologies, 2026.
   - Project intro (from the brochure text) with masterplan imagery.
   - Villa typology cards (A 500 / B 300 / C 250 / D 200 sqm) with unit counts and links to detail pages.
   - Amenities: commercial building, service buildings, school, mosque, supermarket, parks and boulevards.
   - Second video section (elegance/exceptional living teaser).
   - Gallery preview + enquiry form CTA band.

2. **Villa type detail pages (`/villas/type-a`, `/type-b`, `/type-c`, `/type-d`)**
   - Hero rendering per type.
   - Full spec table: plot area, builtup area, total building area, green area, floors, facade materials, architectural style, number of units.
   - Ground floor and first floor plan drawings shown large with zoom-on-click, plus the room feature lists per floor.
   - Detail-shot gallery per type (facade, entrance, balcony, dormer, brickwork, patio images from that type's brochure pages).
   - Sticky "Enquire about this type" CTA.

3. **Masterplan (`/masterplan`)** — site plan drawings, project data, components list, community amenities.

4. **Gallery (`/gallery`)** — full image library grouped by villa type + details, lightbox viewer.

5. **Contact (`/contact`)** — enquiry form (name, phone, email, villa type of interest, message), MAP Consultancy details: Kurdistan, Hawler, EMPIRE T3-F9-05, 0750 448 7852, Architectdlo@gmail.com.

Shared header (logo, nav, "Enquire" button) and footer on all pages.

## Design direction

Architectural luxury: warm stone/ivory background, deep charcoal text, brass-gold accent; serif display headings with clean sans body; generous whitespace, large full-bleed imagery, subtle fade/parallax on scroll. Fully responsive, mobile-first (site is being reviewed on mobile).

## Technical notes

- All brochure images (167 extracted) and the two videos become CDN assets via `lovable-assets`, referenced through `.asset.json` pointers — no binaries committed. Images are curated per section: renderings for heroes, floor-plan drawings for the plan sections, detail crops for galleries; duplicates, logos and unusable fragments are dropped.
- Videos are muted, autoplay, looping, `playsInline`, with a poster image fallback.
- TanStack Start file routes under `src/routes`; villa data (specs, features, image sets) in one typed data module driving all type pages.
- Design tokens added to `src/styles.css`; heading font loaded via `<link>` in `__root.tsx`.
- Per-route `head()` metadata with unique titles/descriptions and og/twitter tags for SEO; single H1 per page, alt text on all imagery, lazy loading, JSON-LD `ResidentialComplex`/`Organization`.
- Enquiry form: contact page form with client-side validation. Submissions are not stored yet — it opens a prefilled email/WhatsApp handoff to the listed contact. If you want submissions saved in a database with an admin inbox, say so and I'll add the backend.
