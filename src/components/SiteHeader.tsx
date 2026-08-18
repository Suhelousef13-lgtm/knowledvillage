import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/masterplan", label: "Masterplan" },
  { to: "/villas/$slug", params: { slug: "type-a" }, label: "Villas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "bg-gradient-to-b from-stone-deep/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span
            className={`font-display text-xl tracking-[0.18em] transition-colors ${
              scrolled || open ? "text-foreground" : "text-ivory"
            }`}
          >
            KNOWLEDGE
          </span>
          <span className="eyebrow mt-1 text-brass">Village · Erbil</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              params={"params" in l ? l.params : undefined}
              className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-brass ${
                scrolled ? "text-muted-foreground" : "text-ivory/80"
              }`}
              activeProps={{ className: "text-brass" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border border-brass px-5 py-2 text-xs tracking-[0.2em] text-brass uppercase transition-colors hover:bg-brass hover:text-accent-foreground"
          >
            Enquire
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled || open ? "text-foreground" : "text-ivory"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 pb-6 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              params={"params" in l ? l.params : undefined}
              onClick={() => setOpen(false)}
              className="py-3 text-sm tracking-[0.16em] text-foreground uppercase"
              activeProps={{ className: "text-brass" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 border border-brass py-3 text-center text-xs tracking-[0.2em] text-brass uppercase"
          >
            Register your interest
          </Link>
        </nav>
      )}
    </header>
  );
}
