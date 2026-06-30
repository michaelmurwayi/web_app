import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-3.jpeg";
import about3 from "@/assets/about-2.jpg";
import about4 from "@/assets/about-4.jpeg";

import type { AboutHeroConfig } from "./AboutHero.types";

export const aboutHeroConfig: AboutHeroConfig = {
  eyebrow: "ABOUT CEBBA",

  title: "Rooted in Kenya,",

  highlightedTitle: "Trusted Worldwide",

  description: [
    "Coffee Estate Brokers and Buyers Association (CEBBA) is committed to connecting Kenyan coffee growers with global markets through quality, transparency, and sustainable partnerships.",

    "From sourcing premium coffee cherries to exporting world-class green beans, we work alongside farmers, millers, exporters, and buyers to deliver exceptional Kenyan coffee.",
  ],

  established: "2008",

  stats: [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "40+",
      label: "Export Markets",
    },
    {
      value: "500+",
      label: "Partner Farmers",
    },
    {
      value: "AA",
      label: "Premium Grade",
    },
  ],

  images: [
    {
      id: "1",
      src: about1,
      alt: "Coffee Farm",
    },
    {
      id: "2",
      src: about2,
      alt: "Coffee Processing",
    },
    {
      id: "3",
      src: about3,
      alt: "Coffee Beans",
    },
    {
      id: "4",
      src: about4,
      alt: "Coffee Export",
    },
  ],
};
