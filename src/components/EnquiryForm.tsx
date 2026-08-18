import { useState } from "react";

import { contact, villas } from "@/data/villas";

const inputClass =
  "w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brass";

export function EnquiryForm({ defaultType }: { defaultType?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(defaultType ?? villas[0]!.name);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please enter your full name.");
    if (phone.trim().length < 6) return setError("Please enter a phone number we can reach you on.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("That email address doesn't look right.");
    setError(null);

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Villa of interest: ${type}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Knowledge Village enquiry — ${type}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-muted-foreground">Full name</span>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </label>
        <label className="block">
          <span className="eyebrow text-muted-foreground">Phone</span>
          <input
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07xx xxx xxxx"
            required
          />
        </label>
        <label className="block">
          <span className="eyebrow text-muted-foreground">Email (optional)</span>
          <input
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-muted-foreground">Villa of interest</span>
          <select className={inputClass} value={type} onChange={(e) => setType(e.target.value)}>
            {villas.map((v) => (
              <option key={v.slug} value={`${v.name} (${v.plotArea})`}>
                {v.name} — {v.plotArea}
              </option>
            ))}
            <option value="Undecided">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-muted-foreground">Message</span>
        <textarea
          className={`${inputClass} min-h-24 resize-none`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're looking for"
        />
      </label>

      {error && <p className="text-sm text-destructive">{error}</p>}
      {sent && (
        <p className="text-sm text-brass">
          Thank you — your email draft is open. You can also call {contact.phone} directly.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="bg-stone-deep px-8 py-4 text-xs tracking-[0.22em] text-ivory uppercase transition-colors hover:bg-brass hover:text-accent-foreground"
        >
          Register your interest
        </button>
        <a
          href={`tel:${contact.phoneHref}`}
          className="text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-brass"
        >
          or call {contact.phone}
        </a>
      </div>
    </form>
  );
}
