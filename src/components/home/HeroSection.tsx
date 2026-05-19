import { useTranslations } from "next-intl";
import { getHeroTranslations } from "@/i18n/home";

export default function HeroSection() {
  const t = useTranslations("home");
  const hero = getHeroTranslations(t);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
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
          {hero.title}
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
            {hero.subtitle}
          </p>
          <div className="h-px w-16 bg-stone-300" />
        </div>
      </div>

      <a
        href="#about"
        aria-label={hero.scroll}
        className="absolute bottom-10 flex flex-col items-center gap-2.5 text-stone-400 transition-colors hover:text-stone-600"
        style={{
          animation: "fade-up 0.9s ease both",
          animationDelay: "0.6s",
        }}
      >
        <span className="text-[0.6rem] tracking-[0.35em] uppercase">
          {hero.scroll}
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
  );
}
