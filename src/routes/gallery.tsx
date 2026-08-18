import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Lightbox } from "@/components/Lightbox";
import { media } from "@/data/media";
import { villas } from "@/data/villas";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Knowledge Village Villas in Erbil" },
      {
        name: "description",
        content:
          "Browse renderings of all four Knowledge Village villa typologies in Erbil: facades, entrances, gardens, balconies and streetscapes.",
      },
      { property: "og:title", content: "Gallery — Knowledge Village Villas in Erbil" },
      {
        property: "og:description",
        content: "Renderings of every villa typology, garden and streetscape at Knowledge Village.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => {
    const source = filter === "all" ? villas : villas.filter((v) => v.slug === filter);
    const seen = new Set<string>();
    return source.flatMap((v) =>
      v.gallery
        .filter((g) => !seen.has(g.key) && (seen.add(g.key), true))
        .map((g) => ({ src: media[g.key], alt: g.alt })),
    );
  }, [filter]);

  const filters = [{ slug: "all", name: "All images" }, ...villas];

  return (
    <>
      <section className="bg-stone-deep pt-36 pb-16 text-ivory">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Visual library</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Gallery</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
            Every rendering from the Knowledge Village design set — facades, entrances, gardens,
            balconies and street views across the four villa typologies.
          </p>
        </div>
      </section>

      <div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-4 md:px-8">
          {filters.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => {
                setFilter(f.slug);
                setOpen(null);
              }}
              className={`border px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors ${
                filter === f.slug
                  ? "border-brass bg-brass text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-brass hover:text-brass"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <p className="eyebrow text-muted-foreground">{items.length} images</p>
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
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

      <Lightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}
