import type { useTranslations } from "next-intl";

type T = ReturnType<typeof useTranslations>;

export const getHeroTranslations = (t: T) => ({
  title: t("hero.title"),
  subtitle: t("hero.subtitle"),
  scroll: t("hero.scroll"),
});

export const getAboutTranslations = (t: T) => ({
  number: t("about.number"),
  title: t("about.title"),
  bio1: t("about.bio1"),
  bio2: t("about.bio2"),
  crafts: {
    ceramics: t("about.crafts.ceramics"),
    textiles: t("about.crafts.textiles"),
    embroidery: t("about.crafts.embroidery"),
  },
});

export const getGalleryTranslations = (t: T) => ({
  number: t("gallery.number"),
  title: t("gallery.title"),
  subtitle: t("gallery.subtitle"),
});

export const getCtaTranslations = (t: T) => ({
  title: t("cta.title"),
  subtitle: t("cta.subtitle"),
  button: t("cta.button"),
});

export const getContactTranslations = (t: T) => ({
  number: t("contact.number"),
  title: t("contact.title"),
  subtitle: t("contact.subtitle"),
  email: t("contact.email"),
  instagram: t("contact.instagram"),
});
