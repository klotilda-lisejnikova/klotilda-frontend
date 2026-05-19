import type { Artwork } from "@/types/gallery";

export const artworks: Artwork[] = [
  {
    id: "1",
    name: { cs: "Váza s reliéfem", en: "Relief Vase" },
    category: { cs: "Keramika", en: "Ceramics" },
    gradient: "linear-gradient(135deg, #d4cbc0 0%, #b8ae9f 100%)",
    accent: "#6b5e50",
    image: "/images/gallery/kolekce_vazy_01.jpg",
  },
  {
    id: "2",
    name: { cs: "Talíř — motiv listů", en: "Plate — Leaf Motif" },
    category: { cs: "Keramika", en: "Ceramics" },
    gradient: "linear-gradient(135deg, #e2d3bb 0%, #c8b898 100%)",
    accent: "#7a6448",
    image: "/images/gallery/kolekce_vazy_02.jpg",
  },
  {
    id: "3",
    name: { cs: "Lněná taška", en: "Linen Bag" },
    category: { cs: "Textil", en: "Textiles" },
    gradient: "linear-gradient(135deg, #ddd8d0 0%, #c4bcb0 100%)",
    accent: "#62574e",
    image: "/images/gallery/kolekce_vazy_03.jpg",
  },
  {
    id: "4",
    name: { cs: "Hedvábný šátek", en: "Silk Scarf" },
    category: { cs: "Textil", en: "Textiles" },
    gradient: "linear-gradient(135deg, #ede0cc 0%, #d0c0a4 100%)",
    accent: "#7a6a50",
    image: "/images/gallery/mikina_vysivka_01.jpg",
  },
  {
    id: "5",
    name: { cs: "Výšivka — Zahrada", en: "Embroidery — Garden" },
    category: { cs: "Výšivky", en: "Embroidery" },
    gradient: "linear-gradient(135deg, #d8cfc2 0%, #bfb09e 100%)",
    accent: "#6e6050",
    image: "/images/gallery/saty_vysivka_01.jpg",
  },
  {
    id: "6",
    name: { cs: "Výšivka — Ptáci", en: "Embroidery — Birds" },
    category: { cs: "Výšivky", en: "Embroidery" },
    gradient: "linear-gradient(135deg, #e4d8c4 0%, #ccba9e 100%)",
    accent: "#7c6a4e",
    image: "/images/gallery/vysivka_houbobaba_01.jpg",
  },
];
