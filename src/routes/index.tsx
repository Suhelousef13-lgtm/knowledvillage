import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { EnquiryForm } from "@/components/EnquiryForm";
import { media } from "@/data/media";
import { Reveal } from "@/components/Reveal";
import {
  amenities,
  eleganceVideo,
  elegancePoster,
  heroPoster,
  heroVideo,
  masterplanImage,
  projectFacts,
  villas,
} from "@/data/villas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knowledge Village — 1,020 Classical Villas in Erbil" },
      {
        name: "description",
        content:
          "Knowledge Village: a 430,000 sqm masterplanned community on Erbil's Kirkuk Road with 1,020 contemporary classical villas from 200 to 500 sqm. Register your interest.",
      },
      { property: "og:title", content: "Knowledge Village — 1,020 Classical Villas in Erbil" },
      {
        property: "og:description",
        content:
          "A 430,000 sqm residential village in Erbil with four villa typologies, parks, school, mosque and commercial district.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ApartmentComplex",
          name: "Knowledge Village",
          numberOfAccommodationUnits: 1020,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Erbil",
            addressRegion: "Kurdistan",
            addressCountry: "IQ",
            streetAddress: "Kirkuk Road",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-deep/85 via-stone-deep/35 to-stone-deep/45" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
          <p className="eyebrow text-brass">Erbil · Kirkuk Road · 2026</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] text-ivory md:text-7xl">
            Your home is here.
            <br />
            A village built around living well.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80">
            1,020 contemporary classical villas across 430,000 sqm — tree-lined boulevards, parks,
            a school, a mosque and a commercial heart, designed by MAP Architects &amp; Engineers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-brass px-8 py-4 text-xs tracking-[0.22em] text-accent-foreground uppercase transition-colors hover:bg-ivory"
            >
              Register your interest
            </Link>
            <Link
              to="/masterplan"
              className="border border-ivory/40 px-8 py-4 text-xs tracking-[0.22em] text-ivory uppercase transition-colors hover:border-brass hover:text-brass"
            >
              View the masterplan
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 md:grid-cols-4 md:px-8">
          {projectFacts.map((f) => (
            <div key={f.label}>
              <p className="font-display text-4xl text-foreground">{f.value}</p>
              <p className="eyebrow mt-2 text-muted-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-brass">The project</p>
            <h2 className="rule-brass mt-4 font-display text-4xl md:text-5xl">
              A vibrant, sustainable community in Erbil
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Knowledge Village is a contemporary mixed-residential development of 1,020 units,
              arranged within a clear hierarchy of streets, landscaped boulevards, public parks and
              neighbourhood amenities. Housing typologies range from elegant villas to modern
              townhouses, unified by an architectural identity inspired by timeless European design.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Community facilities, commercial areas, recreational spaces and a central public plaza
              are placed to encourage social interaction and put everyday services within reach.
              Wide tree-lined streets, generous green spaces and pedestrian-friendly pathways give
              the village both function and character.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="eyebrow text-muted-foreground">Client</dt>
                <dd className="mt-2 text-foreground">Knowledge University</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Type of work</dt>
                <dd className="mt-2 text-foreground">Design · Residential</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/masterplan" className="group block">
              <img
                src={masterplanImage}
                alt="Masterplan of Knowledge Village showing streets, parks and villa clusters"
                loading="lazy"
                className="w-full border border-border bg-card object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-brass uppercase">
                Explore the masterplan <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brass">Villa typologies</p>
            <h2 className="rule-brass mt-4 font-display text-4xl md:text-5xl">
              Four plot sizes, one architectural language
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {villas.map((v, i) => (
              <Reveal key={v.slug} delay={i * 90}>
                <Link
                  to="/villas/$slug"
                  params={{ slug: v.slug }}
                  className="group block bg-card"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={media[v.card]}
                      alt={`${v.name} exterior rendering`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <p className="eyebrow text-brass">
                        {v.code} · {v.plotArea}
                      </p>
                      <h3 className="mt-2 font-display text-2xl">{v.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {v.units} units · {v.builtUpArea} built-up · {v.floors}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-brass"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <video
          className="h-[70vh] w-full object-cover"
          src={eleganceVideo}
          poster={elegancePoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-stone-deep/45 px-5 text-center">
          <div>
            <p className="eyebrow text-brass">Coming soon</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-ivory md:text-5xl">
              Timeless elegance, refined details and exceptional living
            </h2>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-brass">Village amenities</p>
          <h2 className="rule-brass mt-4 font-display text-4xl md:text-5xl">
            Everything within the gates
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a) => (
            <div key={a.title} className="bg-background p-8">
              <h3 className="font-display text-2xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-stone-deep py-24 text-ivory">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-brass">Register your interest</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Be first to reserve your villa
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Share a few details and our team will send you plans, availability and pricing for the
              typology you're interested in.
            </p>
            <Link
              to="/gallery"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-brass uppercase"
            >
              Browse the full gallery <ArrowRight size={14} />
            </Link>
          </div>
          <div className="bg-ivory p-8 text-foreground md:p-10">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
