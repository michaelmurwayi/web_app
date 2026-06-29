import coffeeImage from "@/assets/coffee-excellence.jpg";

import type { CoffeeExcellenceConfig } from "./CoffeeExcellence.types";

import {
  coffeeGrades,
  featureItems,
  flavorNotes,
} from "./CoffeeExcellence.constants";

export const coffeeExcellenceConfig: CoffeeExcellenceConfig = {
  eyebrow: "Kenyan Coffee Excellence",

  title: "Excellence in Every Bean",

  description:
    "Kenyan coffee is internationally celebrated for its exceptional bean quality, vibrant acidity, complex flavour profile, and environmentally responsible production practices that preserve quality from farm to cup.",

  image: {
    src: coffeeImage,
    alt: "Premium Kenyan Coffee",
  },

  gradesTitle: "Primary Coffee Grades",

  flavorTitle: "Signature Flavour Notes",

  sustainability: {
    title: "Sustainable Coffee Production",

    description:
      "Exceptional coffee respects both the earth and its people. At CEBBA, we champion the dedicated smallholder estates and cooperative societies behind Kenya's finest harvests. By advocating for meticulous hand-picking methods and eco-friendly wet processing, we help protect our rich agricultural ecosystems while ensuring fair trade, sustainable livelihoods, and premium quality from farm to cup.",
  },

  featureItems,

  flavorNotes,

  coffeeGrades,
};
