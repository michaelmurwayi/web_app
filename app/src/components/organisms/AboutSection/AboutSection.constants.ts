import type { AboutSlide } from "./AboutSection.types";
import About from "@/assets/about.png";
import Source from "@/assets/source.png";

export const ABOUT_SECTION_SLIDES: AboutSlide[] = [
  {
    id: 1,
    eyebrow: "WE ARE CEBBA",
    title: "About Us",
    description:
      "At CEBBA we are driven by the welfare of coffee producers, ensuring fair compensation and fostering sustainable practices that empower farmers and creating wealth for local communities. Our sustainable operations are designed to drive positive climate outcomes by integrating eco-friendly farming techniques that not only support healthier ecosystems but also ensure the long-term viability of coffee cultivation. Through this commitment, they actively contribute to climate resilience while strengthening local communities and securing a sustainable future for coffee growers worldwide.. Committed to quality excellence, Coffee Estates Bourgeoisie Brokers Agency Limited meticulously curates and delivers premium coffee, satisfying even the most discerning palates and setting a new standard in the global coffee trade.",
    image: About,
    reverse: false,
  },
  {
    id: 2,
    eyebrow: "OUR ORIGIN",
    title: "SOURCED FROM ALL REGIONS",
    description:
      "We offer the full spectrum of Kenya’s unique coffee profiles by sourcing directly from major growing regions across the country, each imparting distinct characteristics shaped by unique altitudes, microclimates, and rich volcanic soils. In the high-altitude central highlands, Nyeri produces beans with intense, bright acidity and complex flavor profiles, while the Eastern Region similarly yields high-quality Arabica known for its vibrant acidity and prominent fruity notes. Moving westward, the North Rift Region spans a wide range of medium to high altitudes that translate into nuanced, vibrant notes of citrus lime, grapefruit, and light strawberry. In contrast, the lower altitudes and wetter climates of Western and Nyanza Kenya offer a gentler cup, yielding coffees with softer acidity and more delicate, subtle floral and citrus notes.",
    image: Source,
    reverse: true,
  },
];

export const ABOUT_SECTION_TITLE = "About";

export const ABOUT_SECTION_DESCRIPTION =
  "Discover the journey behind every bean—from the farms where it is grown to the cup you enjoy.";

export const INDICATOR_ACTIVE_COLOR = "#C88736";

export const INDICATOR_INACTIVE_COLOR = "#D8D3CD";
