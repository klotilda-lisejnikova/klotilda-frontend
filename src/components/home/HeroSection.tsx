import Image from "next/image";
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
      <Image
        src="/images/bg_hero.jpg"
        alt="hero-image"
        fill
        className="scale-105 object-cover"
        style={{ filter: "blur(2px)" }}
        sizes="100vw"
        priority
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(80, 100, 70, 0.2)" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="font-serif text-7xl font-light tracking-[0.15em] md:text-[9rem] md:leading-none"
          style={{
            animation: "fade-up 0.9s ease both",
            animationDelay: "0.15s",
            color: "#ffffff",
            textShadow:
              "0 2px 6px rgba(0,0,0,0.25), 0 12px 48px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.6)",
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
          <div
            className="h-px w-20"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
          <p
            className="text-sm font-light tracking-[0.35em] uppercase"
            style={{
              color: "#ffffff",
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            {hero.subtitle}
          </p>
          <div
            className="h-px w-20"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label={hero.scroll}
        className="hero-scroll absolute bottom-10 flex flex-col items-center gap-3"
        style={{
          animation: "fade-up 0.9s ease both",
          animationDelay: "0.6s",
        }}
      >
        <span className="text-xs tracking-[0.35em] uppercase">
          {hero.scroll}
        </span>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <line x1="11" y1="1" x2="11" y2="27" />
          <polyline points="3,19 11,27 19,19" />
        </svg>
      </a>
    </section>
  );
}
