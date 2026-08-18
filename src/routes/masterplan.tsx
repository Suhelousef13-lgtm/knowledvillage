import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { media } from "@/data/media";
import { amenities, masterplanImage, projectFacts, villas } from "@/data/villas";

export const Route = createFileRoute("/masterplan")({
  head: () => ({
    meta: [
      { title: "Masterplan — Knowledge Village, Erbil" },
      {
        name: "description",
        content:
          "The Knowledge Village masterplan: 430,000 sqm on Kirkuk Road, Erbil, with 1,020 villas, parks, school, mosque, supermarket and a commercial boulevard.",
      },
      { property: "og:title", content: "Masterplan — Knowledge Village, Erbil" },
      {
        property: "og:description",
        content:
          "Street hierarchy, landscaped boulevards, public parks and a central plaza across a 430,000 sqm site.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/masterplan" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/masterplan" }],
  }),
  component: MasterplanPage,
});

const zones = [
  {
    title: "Residential clusters",
    body: "1,020 units arranged in four typologies, grouped into walkable clusters with shared green pockets and short cul-de-sacs that keep traffic out of family streets.",
  },
  {
    title: "Central plaza",
    body: "A public square at the heart of the village, framed by retail and cafés — the natural meeting point for residents in the evening.",
  },
  {
    title: "Commercial boulevard",
    body: "Retail frontage, offices and a supermarket line the main axis, keeping daily needs inside the gates and giving the village its own economy.",
  },
  {
    title: "Civic & education",
    body: "An on-site school and community mosque anchor the northern quarter, with service buildings and management facilities discreetly integrated.",
  },
  {
    title: "Green network",
    body: "Tree-lined streets, landscaped boulevards and public parks connect every cluster through a continuous pedestrian network.",
  },
  {
    title: "Access & circulation",
    body: "A clear hierarchy from the Kirkuk Road entrance through primary boulevards to residential lanes, with controlled gated access.",
  },
];

const aerials = ["p-002-002", "p-010-022", "p-016-037", "p-021-048", "p-027-062"] as const;

function MasterplanPage() {
  return (
    <>
      <section className="bg-stone-deep pt-36 pb-20 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Erbil · Kirkuk Road</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl md:text-7xl">The masterplan</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
            430,000 sqm planned as one connected village — streets, parks, civic buildings and
            commerce arranged so that daily life happens within walking distance.
          </p>
          <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-ivory/15 pt-10 md:grid-cols-4">
            {projectFacts.map((f) => (
              <div key={f.label}>
                <p className="font-display text-3xl text-ivory">{f.value}</p>
                <p className="eyebrow mt-2 text-ivory/50">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <img
            src={masterplanImage}
            alt="Aerial masterplan of Knowledge Village showing villa clusters, boulevards and parks"
            className="w-full border border-border bg-card object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Zones</p>
          <h2 className="rule-brass mt-4 font-display text-4xl md:text-5xl">
            How the village is organised
          </h2>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {zones.map((z) => (
              <div key={z.title} className="bg-background p-8">
                <h3 className="font-display text-2xl">{z.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{z.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="eyebrow text-brass">The village in context</p>
        <h2 className="rule-brass mt-4 font-display text-4xl md:text-5xl">Streetscapes and views</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {aerials.map((k, i) => (
            <Reveal key={k} delay={i * 80}>
              <img
                src={media[k]}
                alt="Knowledge Village streetscape and landscaping"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Amenities</p>
          <h2 className="rule-brass mt-4 font-display text-4xl">Inside the gates</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <li key={a.title} className="border-l-2 border-brass pl-5">
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <h2 className="font-display text-4xl">Choose your plot size</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-2xl border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                {["Typology", "Plot", "Built-up", "Total", "Floors", "Units", ""].map((h) => (
                  <th key={h} className="eyebrow py-4 pr-6 text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {villas.map((v) => (
                <tr key={v.slug} className="border-b border-border">
                  <td className="py-5 pr-6 font-display text-xl">{v.name}</td>
                  <td className="py-5 pr-6 text-muted-foreground">{v.plotArea}</td>
                  <td className="py-5 pr-6 text-muted-foreground">{v.builtUpArea}</td>
                  <td className="py-5 pr-6 text-muted-foreground">{v.totalBuildingArea}</td>
                  <td className="py-5 pr-6 text-muted-foreground">{v.floors}</td>
                  <td className="py-5 pr-6 text-muted-foreground">{v.units}</td>
                  <td className="py-5">
                    <Link
                      to="/villas/$slug"
                      params={{ slug: v.slug }}
                      className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-brass uppercase"
                    >
                      View <ArrowRight size={14} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
