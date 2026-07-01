import service1 from "@/assets/advocacy.jpg";
import service2 from "@/assets/agronomy.jpg";
import service3 from "@/assets/market.jpg";
import service4 from "@/assets/quality.jpg";

import type { AboutHeroConfig } from "@/components/organisms/AboutHero";

export const serviceHeroConfig: AboutHeroConfig = {
  eyebrow: "OUR SERVICES",

  title: "Delivering Excellence,",

  highlightedTitle: "Across the Coffee Value Chain",

  description: [
    "CEBBA offers comprehensive coffee brokerage, marketing, quality assurance, and advisory services that connect Kenyan coffee producers with trusted local and international buyers.",

    "From farm to export, we provide professional expertise that promotes transparency, sustainable partnerships, and premium value for every stakeholder within the coffee industry.",
  ],

  established: "2008",

  stats: [
    {
      value: "",
      label: "",
    },
    {
      value: "",
      label: "",
    },
    {
      value: "",
      label: "",
    },
    {
      value: "",
      label: "",
    },
  ],

  images: [
    {
      id: "1",
      src: service1,
      alt: "Coffee Brokerage",
    },
    {
      id: "2",
      src: service2,
      alt: "Coffee Quality Inspection",
    },
    {
      id: "3",
      src: service3,
      alt: "Coffee Marketing",
    },
    {
      id: "4",
      src: service4,
      alt: "Coffee Export Services",
    },
  ],
};
