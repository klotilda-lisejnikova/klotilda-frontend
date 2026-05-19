import type { Locale } from "./locale";

export type Artwork = {
  id: string;
  name: Record<Locale, string>;
  category: Record<Locale, string>;
  gradient: string;
  accent: string;
  image?: string;
};
