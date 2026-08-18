import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/EnquiryForm";
import { media } from "@/data/media";
import { contact, villas } from "@/data/villas";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Knowledge Village, Erbil" },
      {
        name: "description",
        content:
          "Register your interest in a Knowledge Village villa in Erbil. Contact MAP Consultancy Office for plans, availability and pricing.",
      },
      { property: "og:title", content: "Contact & Reservations — Knowledge Village, Erbil" },
      {
        property: "og:description",
        content: "Speak with MAP Consultancy Office about villa plans, availability and pricing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: contact.company,
          description: contact.discipline,
          telephone: contact.phoneHref,
          email: contact.email,
          address: { "@type": "PostalAddress", streetAddress: contact.address },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-16">
        <img
          src={media["p-027-062"]}
          alt="Knowledge Village street view at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-deep/80" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow text-brass">Reservations open</p>
          <h1 className="mt-4 font-display text-5xl text-ivory md:text-7xl">Let's talk</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/75">
            Tell us which typology suits your family and our team will follow up with plans,
            availability and payment options.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="rule-brass font-display text-3xl">MAP Architects &amp; Engineers</h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {contact.company} — {contact.discipline}. Designers of Knowledge Village for
              Knowledge University.
            </p>
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brass" />
                <span className="text-foreground">{contact.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="mt-0.5 shrink-0 text-brass" />
                <a href={`tel:${contact.phoneHref}`} className="text-foreground hover:text-brass">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-4">
                <Mail size={18} className="mt-0.5 shrink-0 text-brass" />
                <a href={`mailto:${contact.email}`} className="text-foreground hover:text-brass">
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-12 border-t border-border pt-8">
              <p className="eyebrow text-muted-foreground">Available typologies</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {villas.map((v) => (
                  <li key={v.slug}>
                    {v.name} — {v.plotArea} plot · {v.units} units
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 md:p-10">
            <h2 className="font-display text-3xl">Register your interest</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fields marked required help us respond quickly.
            </p>
            <div className="mt-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
