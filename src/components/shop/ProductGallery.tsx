"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ImageField } from "@/services";

interface Props {
  imageUrls: Partial<Record<ImageField, string>>;
  alt: string;
}

const FIELDS: ImageField[] = ["image1", "image2", "image3"];

export default function ProductGallery({ imageUrls, alt }: Props) {
  const available = FIELDS.filter((f) => imageUrls[f]);
  const [active, setActive] = useState<ImageField>(available[0] ?? "image1");
  const [failed, setFailed] = useState<Set<ImageField>>(new Set());
  const [loaded, setLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const visible = available.filter((f) => !failed.has(f));

  useEffect(() => {
    setLoaded(false);
  }, [active]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        const idx = visible.indexOf(active);
        if (idx < visible.length - 1) setActive(visible[idx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const idx = visible.indexOf(active);
        if (idx > 0) setActive(visible[idx - 1]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, active, visible, closeLightbox]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          className="group relative aspect-square w-full cursor-zoom-in overflow-hidden bg-stone-100"
          onClick={() => setLightboxOpen(true)}
        >
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-stone-200" />
          )}
          {imageUrls[active] && (
            <Image
              key={active}
              src={imageUrls[active]!}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
              priority
              onLoad={() => setLoaded(true)}
              onError={() =>
                setFailed((prev) => {
                  const next = new Set(prev);
                  next.add(active);
                  const fallback = visible.find((f) => f !== active);
                  if (fallback) setActive(fallback);
                  return next;
                })
              }
            />
          )}
          <div className="absolute bottom-2 right-2 rounded-full bg-white/70 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
            <svg className="h-4 w-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {visible.length > 1 && (
          <div className="flex gap-2">
            {visible.map((field) => (
              <button
                key={field}
                onClick={() => setActive(field)}
                className={`relative h-20 w-20 shrink-0 overflow-hidden bg-stone-100 transition-opacity ${
                  active === field ? "ring-2 ring-stone-800" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={imageUrls[field]!}
                  alt={alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && imageUrls[active] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Zavřít"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
            onClick={closeLightbox}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {visible.length > 1 && (
            <>
              <button
                aria-label="Předchozí"
                className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 disabled:opacity-30"
                disabled={visible.indexOf(active) === 0}
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = visible.indexOf(active);
                  if (idx > 0) setActive(visible[idx - 1]);
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label="Další"
                className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25 disabled:opacity-30"
                disabled={visible.indexOf(active) === visible.length - 1}
                onClick={(e) => {
                  e.stopPropagation();
                  const idx = visible.indexOf(active);
                  if (idx < visible.length - 1) setActive(visible[idx + 1]);
                }}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative aspect-square w-[min(90vw,90vh)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrls[active]!}
              alt={alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {visible.length > 1 && (
            <div className="absolute bottom-4 flex gap-2">
              {visible.map((field, i) => (
                <button
                  key={field}
                  aria-label={`Obrázek ${i + 1}`}
                  onClick={(e) => { e.stopPropagation(); setActive(field); }}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    active === field ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
