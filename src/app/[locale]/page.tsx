import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

type Locale = "cs" | "en";

type Artwork = {
  id: string;
  name: Record<Locale, string>;
  category: Record<Locale, string>;
  gradient: string;
  accent: string;
};

const artworks: Artwork[] = [
  {
    id: "1",
    name: { cs: "Váza s reliéfem", en: "Relief Vase" },
    category: { cs: "Keramika", en: "Ceramics" },
    gradient: "linear-gradient(135deg, #d4cbc0 0%, #b8ae9f 100%)",
    accent: "#6b5e50",
  },
  {
    id: "2",
    name: { cs: "Talíř — motiv listů", en: "Plate — Leaf Motif" },
    category: { cs: "Keramika", en: "Ceramics" },
    gradient: "linear-gradient(135deg, #e2d3bb 0%, #c8b898 100%)",
    accent: "#7a6448",
  },
  {
    id: "3",
    name: { cs: "Lněná taška", en: "Linen Bag" },
    category: { cs: "Textil", en: "Textiles" },
    gradient: "linear-gradient(135deg, #ddd8d0 0%, #c4bcb0 100%)",
    accent: "#62574e",
  },
  {
    id: "4",
    name: { cs: "Hedvábný šátek", en: "Silk Scarf" },
    category: { cs: "Textil", en: "Textiles" },
    gradient: "linear-gradient(135deg, #ede0cc 0%, #d0c0a4 100%)",
    accent: "#7a6a50",
  },
  {
    id: "5",
    name: { cs: "Výšivka — Zahrada", en: "Embroidery — Garden" },
    category: { cs: "Výšivky", en: "Embroidery" },
    gradient: "linear-gradient(135deg, #d8cfc2 0%, #bfb09e 100%)",
    accent: "#6e6050",
  },
  {
    id: "6",
    name: { cs: "Výšivka — Ptáci", en: "Embroidery — Birds" },
    category: { cs: "Výšivky", en: "Embroidery" },
    gradient: "linear-gradient(135deg, #e4d8c4 0%, #ccba9e 100%)",
    accent: "#7c6a4e",
  },
];

export default function HomePage() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;

  const craftNames = {
    ceramics: t("about.crafts.ceramics"),
    textiles: t("about.crafts.textiles"),
    embroidery: t("about.crafts.embroidery"),
  };

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center"
      >
        {/* Subtle dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #78716c 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            opacity: 0.06,
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <p
            className="mb-8 text-[0.65rem] tracking-[0.45em] text-stone-400 uppercase"
            style={{ animation: "fade-up 0.9s ease both" }}
          >
            Praha · Česká republika
          </p>

          <h1
            className="font-serif text-7xl font-light tracking-[0.15em] text-stone-800 md:text-[9rem] md:leading-none"
            style={{
              animation: "fade-up 0.9s ease both",
              animationDelay: "0.15s",
            }}
          >
            {t("hero.title")}
          </h1>

          <div
            className="mt-8 flex items-center gap-5"
            style={{
              animation: "fade-up 0.9s ease both",
              animationDelay: "0.3s",
            }}
          >
            <div className="h-px w-16 bg-stone-300" />
            <p className="text-[0.65rem] font-light tracking-[0.35em] text-stone-500 uppercase">
              {t("hero.subtitle")}
            </p>
            <div className="h-px w-16 bg-stone-300" />
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label={t("hero.scroll")}
          className="absolute bottom-10 flex flex-col items-center gap-2.5 text-stone-400 transition-colors hover:text-stone-600"
          style={{
            animation: "fade-up 0.9s ease both",
            animationDelay: "0.6s",
          }}
        >
          <span className="text-[0.6rem] tracking-[0.35em] uppercase">
            {t("hero.scroll")}
          </span>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <line x1="7" y1="1" x2="7" y2="17" />
            <polyline points="2,12 7,17 12,12" />
          </svg>
        </a>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────  text*/}
      <section id="about" className="scroll-mt-16 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex items-end gap-3">
                <span
                  className="font-serif text-9xl leading-none font-light text-stone-200 select-none"
                  aria-hidden="true"
                >
                  {t("about.number")}
                </span>
                <h2 className="mb-2 font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
                  {t("about.title")}
                </h2>
              </div>

              <p className="mb-5 leading-relaxed text-stone-600">
                {t("about.bio1")}
              </p>
              <p className="mb-10 leading-relaxed text-stone-600">
                {t("about.bio2")}
              </p>

              <div className="flex flex-wrap gap-2">
                {(["ceramics", "textiles", "embroidery"] as const).map(
                  (craft) => (
                    <span
                      key={craft}
                      className="border border-stone-300 px-4 py-1.5 text-[0.7rem] tracking-[0.25em] text-stone-500 uppercase"
                    >
                      {craftNames[craft]}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Decorative placeholder — replaced by real photo in production */}
            <div className="relative">
              <div
                className="aspect-[4/5] w-full"
                style={{
                  background:
                    "linear-gradient(160deg, #e8dece 0%, #d4c4a8 45%, #c4b090 100%)",
                }}
              >
                <div className="absolute inset-5 border border-stone-300/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p
                    className="font-serif text-xl tracking-[0.5em] text-stone-500/40 uppercase"
                    aria-hidden="true"
                  >
                    Ateliér
                  </p>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute -right-5 -bottom-5 hidden h-28 w-28 md:block"
                style={{ background: "#d4c4a8" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ──────────────────────────────────── */}
      <section
        id="gallery"
        className="scroll-mt-16 py-28 md:py-36"
        style={{ background: "#f5efe6" }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-14 flex items-end gap-3">
            <span
              className="font-serif text-9xl leading-none font-light text-stone-300/60 select-none"
              aria-hidden="true"
            >
              {t("gallery.number")}
            </span>
            <div className="mb-2">
              <h2 className="font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
                {t("gallery.title")}
              </h2>
              <p className="mt-1 text-xs tracking-widest text-stone-500">
                {t("gallery.subtitle")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <article key={artwork.id} className="group">
                <div className="relative overflow-hidden">
                  <div
                    className="aspect-square w-full transition-transform duration-700 group-hover:scale-105"
                    style={{ background: artwork.gradient }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,255,255,0.07) 18px, rgba(255,255,255,0.07) 19px)",
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-2.5 py-1 text-[0.6rem] tracking-[0.2em] uppercase"
                        style={{
                          background: "rgba(250,250,248,0.82)",
                          color: artwork.accent,
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        {artwork.category[locale]}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="border border-t-0 border-stone-200 px-4 py-3"
                  style={{ background: "#fafaf8" }}
                >
                  <p className="font-serif text-sm tracking-wide text-stone-700">
                    {artwork.name[locale]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section
        className="py-28 md:py-36"
        style={{
          background:
            "linear-gradient(135deg, #e8dece 0%, #d9c9ae 50%, #ccbb9c 100%)",
        }}
      >
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div
            className="mx-auto mb-10 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <div className="h-px w-12 bg-stone-600/30" />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-stone-600/40"
            >
              <rect x="6" y="0" width="2" height="14" fill="currentColor" />
              <rect x="0" y="6" width="14" height="2" fill="currentColor" />
            </svg>
            <div className="h-px w-12 bg-stone-600/30" />
          </div>

          <h2 className="font-serif text-4xl font-light tracking-[0.15em] text-stone-800 md:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mt-5 text-sm tracking-wide text-stone-600">
            {t("cta.subtitle")}
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-block border border-stone-700 px-10 py-3.5 text-[0.7rem] tracking-[0.3em] text-stone-700 uppercase transition-all hover:bg-stone-700 hover:text-[#fafaf8]"
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="scroll-mt-16 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-16 flex items-end gap-3">
            <span
              className="font-serif text-9xl leading-none font-light text-stone-200 select-none"
              aria-hidden="true"
            >
              {t("contact.number")}
            </span>
            <div className="mb-2">
              <h2 className="font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
                {t("contact.title")}
              </h2>
              <p className="mt-1 text-xs tracking-widest text-stone-500">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-0">
            <a
              href={`mailto:${t("contact.email")}`}
              className="group flex items-center gap-5 text-stone-600 transition-colors hover:text-stone-900"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-stone-300 transition-colors group-hover:border-stone-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <div>
                <p className="mb-0.5 text-[0.6rem] tracking-[0.3em] text-stone-400 uppercase">
                  Email
                </p>
                <p className="font-serif tracking-wide">{t("contact.email")}</p>
              </div>
            </a>

            <div
              className="h-px w-10 bg-stone-200 sm:mx-12 sm:h-10 sm:w-px"
              aria-hidden="true"
            />

            <a
              href="https://instagram.com/klotilda_art"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 text-stone-600 transition-colors hover:text-stone-900"
            >
              <div className="flex h-12 w-12 items-center justify-center border border-stone-300 transition-colors group-hover:border-stone-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-0.5 text-[0.6rem] tracking-[0.3em] text-stone-400 uppercase">
                  Instagram
                </p>
                <p className="font-serif tracking-wide">
                  {t("contact.instagram")}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
