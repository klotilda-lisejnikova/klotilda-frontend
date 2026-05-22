"use client";

import Image from "next/image";
import { useState } from "react";
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

  const visible = available.filter((f) => !failed.has(f));

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
        {imageUrls[active] && (
          <Image
            key={active}
            src={imageUrls[active]!}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
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
      </div>

      {visible.length > 1 && (
        <div className="flex gap-2">
          {visible.map((field) => (
            <button
              key={field}
              onClick={() => setActive(field)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden bg-stone-100 ${
                active === field ? "ring-2 ring-stone-800" : "opacity-60"
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
  );
}
