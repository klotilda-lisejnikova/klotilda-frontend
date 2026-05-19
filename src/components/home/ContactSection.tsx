import { useTranslations } from "next-intl";
import { getContactTranslations } from "@/i18n/home";

export default function ContactSection() {
  const t = useTranslations("home");
  const contact = getContactTranslations(t);

  return (
    <section id="contact" className="scroll-mt-16 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-16 flex items-end gap-3">
          <span
            className="font-serif text-9xl leading-none font-light text-stone-200 select-none"
            aria-hidden="true"
          >
            {contact.number}
          </span>
          <div className="mb-2">
            <h2 className="font-serif text-2xl font-light tracking-[0.2em] text-stone-800">
              {contact.title}
            </h2>
            <p className="mt-1 text-xs tracking-widest text-stone-500">
              {contact.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-0">
          <a
            href={`mailto:${contact.email}`}
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
              <p className="font-serif tracking-wide">{contact.email}</p>
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
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <p className="mb-0.5 text-[0.6rem] tracking-[0.3em] text-stone-400 uppercase">
                Instagram
              </p>
              <p className="font-serif tracking-wide">{contact.instagram}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
