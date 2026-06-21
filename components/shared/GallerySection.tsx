"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  id: string;
  src: string;
  caption: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "1", src: "/images/gallery/gallery-1.png", caption: "Helping a client at our office" },
  { id: "2", src: "/images/gallery/gallery-2.png", caption: "The team preparing client bookings" },
  { id: "3", src: "/images/gallery/gallery-3.png", caption: "Walking a client through their options" },
  { id: "4", src: "/images/gallery/gallery-4.png", caption: "Flight bookings made easy" },
  { id: "5", src: "/images/gallery/gallery-5.png", caption: "Following up with our clients" },
  { id: "6", src: "/images/gallery/gallery-6.png", caption: "At the airport with a client" },
  { id: "7", src: "/images/gallery/gallery-7.png", caption: "Helping travellers reach their dream destinations" },
];

export default function GallerySection() {
  const [slide, setSlide] = useState(0);
  const [preview, setPreview] = useState<number | null>(null);
  const images = GALLERY_IMAGES;

  function goTo(i: number) {
    if (images.length === 0) return;
    setSlide(((i % images.length) + images.length) % images.length);
  }

  function goToPreview(i: number) {
    if (images.length === 0) return;
    setPreview(((i % images.length) + images.length) % images.length);
  }

  useEffect(() => {
    if (preview === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setPreview(null);
      if (e.key === "ArrowRight") setPreview((p) => (p === null ? p : (p + 1) % images.length));
      if (e.key === "ArrowLeft") setPreview((p) => (p === null ? p : (p - 1 + images.length) % images.length));
    }

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview, images.length]);

  return (
    <div>
      {/* Slider */}
      <div className="reveal-scale neu-raised overflow-hidden p-3 sm:p-4">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          {images.map((img, i) => (
            <Image
              key={img.id}
              src={img.src}
              alt={img.caption}
              fill
              sizes="(min-width: 1024px) 1100px, 100vw"
              priority={i === 0}
              className="object-cover transition-opacity duration-500"
              style={{ opacity: i === slide ? 1 : 0 }}
            />
          ))}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => goTo(slide - 1)}
                aria-label="Previous photo"
                className="neu-raised-sm neu-press absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
              >
                <ChevronIcon dir="left" />
              </button>
              <button
                type="button"
                onClick={() => goTo(slide + 1)}
                aria-label="Next photo"
                className="neu-raised-sm neu-press absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center"
              >
                <ChevronIcon dir="right" />
              </button>
            </>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 px-1">
          <p className="truncate text-sm font-medium text-ink-soft">{images[slide]?.caption}</p>
          {images.length > 1 && (
            <div className="flex shrink-0 items-center gap-1.5">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className="h-2 w-2 rounded-full transition-all"
                  style={{
                    background: i === slide ? "var(--brand-blue-deep)" : "var(--base-dark)",
                    width: i === slide ? "1.25rem" : "0.5rem",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Standalone grid */}
      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => goToPreview(i)}
            aria-label={`Preview ${img.caption}`}
            className="group reveal-scale neu-raised relative aspect-square overflow-hidden p-2 text-left"
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="(min-width: 1024px) 260px, 45vw"
              className="rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-2 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
              <span className="neu-raised-sm flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                <ZoomIcon />
              </span>
            </span>
            <span className="absolute inset-x-2 bottom-2 truncate rounded-lg bg-black/45 px-2.5 py-1 text-left text-[11px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox preview */}
      {preview !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[preview].caption}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-6 sm:top-6"
          >
            <CloseIcon />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-4xl flex-col items-center"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]">
              <Image
                src={images[preview].src}
                alt={images[preview].caption}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
                priority
              />
            </div>

            <p className="mt-4 text-center text-sm font-medium text-white/90">
              {images[preview].caption}
            </p>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreview(preview - 1);
                  }}
                  aria-label="Previous photo"
                  className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:-translate-x-14"
                >
                  <ChevronIcon dir="left" light />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPreview(preview + 1);
                  }}
                  aria-label="Next photo"
                  className="absolute right-0 top-1/2 flex h-11 w-11 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:translate-x-14"
                >
                  <ChevronIcon dir="right" light />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ChevronIcon({ dir, light = false }: { dir: "left" | "right"; light?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M9 2.5 4 7l5 4.5" : "M5 2.5 10 7l-5 4.5"}
        stroke={light ? "#fff" : "var(--ink)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M11.8 11.8 15 15" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 6v4M6 8h4" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 3 13 13M13 3 3 13" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
