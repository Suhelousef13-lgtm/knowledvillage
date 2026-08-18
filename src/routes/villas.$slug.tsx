import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

import { EnquiryForm } from "@/components/EnquiryForm";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";
import { media } from "@/data/media";
import { getVilla, villas } from "@/data/villas";

export const Route = createFileRoute("/villas/$slug")({
  loader: ({ params }) => {
    const villa = getVilla(params.slug);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Villa unavailable — Knowledge Village" }, { name: "robots", content: "noindex" }],
      };
    }
    const v = loaderData.villa;
    const title = `${v.name} — ${v.plotArea} Villa in Erbil | Knowledge Village`;
    return {
      meta: [
        { title },
        { name: "description", content: v.intro.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: v.intro.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/villas/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/villas/${params.slug}` }],
    };
  },
  component: VillaPage,
});

function VillaPage() {
  const { villa } = Route.useLoaderData();
  const [open, setOpen] = useState<number | null>(null);
  const items = villa.gallery.map((g) => ({ src: media[g.key], alt: g.alt }));
  const others = villas.filter((v) => v.slug !== villa.slug);

  const specs = [
    { label: "Plot area", value: villa.plotArea },
    { label: "Built-up area", value: villa.builtUpArea },
    { label: "Total building area", value: villa.totalBuildingArea },
    { label: "Green area", value: villa.greenArea },
    { label: "Floors", value: villa.floors },
    { label: "Units in village", value: `${villa.units}` },
    { label: "Style", value: villa.style },
    { label: "Facade materials", value: villa.facade },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end">
        <img
          src={media[villa.hero]}
          alt={`${villa.name} exterior`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep/85 to-stone-deep/25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8">
          <p className="eyebrow text-brass">
            Typology {villa.code} · {villa.tagline}
          </p>
          <h1 className="mt-4 font-display text-5xl text-ivory md:text-7xl">{villa.name}</h1>
          <p className="mt-4 text-sm tracking-[0.18em] text-ivory/75 uppercase">
            {villa.plotArea} plot · {villa.builtUpArea} per floor · {villa.units} units
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="rule-brass font-display text-3xl md:text-4xl">About this villa</h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">{villa.intro}</p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-px bg-border">
              {specs.map((s) => (
                <div key={s.label} className="bg-background p-5">
                  <dt className="eyebrow text-muted-foreground">{s.label}</dt>
                  <dd className="mt-2 font-display text-xl text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Floor plans</p>
          <h2 className="rule-brass mt-4 font-display text-3xl md:text-4xl">
            Ground &amp; first floor layouts
          </h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {[
              { title: "Ground floor", key: villa.groundPlan, features: villa.groundFeatures },
              { title: "First floor", key: villa.firstPlan, features: villa.firstFeatures },
            ].map((plan) => (
              <div key={plan.title} className="bg-background p-6 md:p-8">
                <h3 className="font-display text-2xl">{plan.title}</h3>
                <img
                  src={media[plan.key]}
                  alt={`${villa.name} ${plan.title.toLowerCase()} plan`}
                  loading="lazy"
                  className="mt-6 w-full border border-border bg-ivory object-contain"
                />
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="shrink-0 text-brass" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="eyebrow text-brass">Gallery</p>
        <h2 className="rule-brass mt-4 font-display text-3xl md:text-4xl">
          {villa.name} in detail
        </h2>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpen(i)}
              className="mb-5 block w-full overflow-hidden bg-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      <section className="bg-stone-deep py-20 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brass">Enquire</p>
            <h2 className="mt-4 font-display text-4xl">Reserve a {villa.name}</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Request the full plan set, availability and pricing for this typology.
            </p>
            <div className="mt-10 space-y-3">
              {others.map((v) => (
                <Link
                  key={v.slug}
                  to="/villas/$slug"
                  params={{ slug: v.slug }}
                  className="flex items-center justify-between border-b border-ivory/15 pb-3 text-sm text-ivory/80 transition-colors hover:text-brass"
                >
                  <span>
                    {v.name} · {v.plotArea}
                  </span>
                  <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-ivory p-8 text-foreground md:p-10">
            <EnquiryForm defaultType={`${villa.name} (${villa.plotArea})`} />
          </div>
        </div>
      </section>

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
