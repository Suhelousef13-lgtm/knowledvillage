import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export type LightboxItem = { src: string; alt: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + delta + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, step]);

  if (!open) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-100 flex items-center justify-center bg-stone-deep/95 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 text-ivory/70 transition-colors hover:text-brass"
      >
        <X size={26} />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 text-ivory/70 transition-colors hover:text-brass md:left-8"
          >
            <ChevronLeft size={34} />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 text-ivory/70 transition-colors hover:text-brass md:right-8"
          >
            <ChevronRight size={34} />
          </button>
        </>
      )}

      <figure className="max-h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.alt}
          className="mx-auto max-h-[80vh] w-auto object-contain"
        />
        <figcaption className="mt-4 text-center text-xs tracking-[0.16em] text-ivory/60 uppercase">
          {item.alt} · {index + 1}/{items.length}
        </figcaption>
      </figure>
    </div>
  );
}
