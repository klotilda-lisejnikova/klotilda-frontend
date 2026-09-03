import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GallerySection from "@/components/home/GallerySection";
import CtaSection from "@/components/home/CtaSection";
import ContactSection from "@/components/home/ContactSection";
import { services, type GalleryItem } from "@/services";

// Regenerate the landing page (incl. the gallery) at most every 10 minutes.
export const revalidate = 600;

export default async function HomePage() {
  let galleryItems: GalleryItem[] = [];
  try {
    const result = await services.gallery.getAll({ active: true });
    galleryItems = result.data;
  } catch (err) {
    console.error("[HomePage] Failed to fetch gallery:", err);
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection items={galleryItems} />
      <CtaSection />
      <ContactSection />
    </>
  );
}
