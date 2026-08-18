import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { contact, villas } from "@/data/villas";

export function SiteFooter() {
  return (
    <footer className="bg-stone-deep text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl tracking-[0.14em]">KNOWLEDGE VILLAGE</p>
          <p className="eyebrow mt-2 text-brass">Erbil · Kirkuk Road</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/70">
            A 430,000 sqm residential village of 1,020 contemporary classical villas, designed by
            MAP Architects &amp; Engineers for Knowledge University.
          </p>
        </div>

        <div>
          <p className="eyebrow text-ivory/50">Villa types</p>
          <ul className="mt-5 space-y-3 text-sm">
            {villas.map((v) => (
              <li key={v.slug}>
                <Link
                  to="/villas/$slug"
                  params={{ slug: v.slug }}
                  className="text-ivory/80 transition-colors hover:text-brass"
                >
                  {v.name} — {v.plotArea}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/masterplan" className="text-ivory/80 transition-colors hover:text-brass">
                Masterplan
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-ivory/80 transition-colors hover:text-brass">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-ivory/50">Sales &amp; enquiries</p>
          <ul className="mt-5 space-y-4 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brass" />
              <span>
                {contact.company}
                <br />
                {contact.address}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brass" />
              <a href={`tel:${contact.phoneHref}`} className="hover:text-brass">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-brass" />
              <a href={`mailto:${contact.email}`} className="hover:text-brass">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6 text-center text-xs tracking-[0.16em] text-ivory/40 uppercase">
        © {new Date().getFullYear()} MAP Architects &amp; Engineers
      </div>
    </footer>
  );
}
