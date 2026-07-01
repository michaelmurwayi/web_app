import backgroundImage from "@/assets/service-excellence.jpg";

import type { ServiceExcellenceConfig } from "./ServiceExcellence.types";

export const serviceExcellenceConfig: ServiceExcellenceConfig = {
  eyebrow: "Credentials & Compliance",

  title: "Statutory",

  highlightedTitle: "Licenses",

  description:
    "Licensed for Kenyan Direct Sales and NCE Auction trading. Advancing coffee from the farmer to the world through marketing, agronomy, advocacy, and quality control.",

  backgroundImage,

  certifications: [
    {
      id: "1",
      label: "AFA • AGRICULTURE AND FOODS AUTHORITY ( Direct Sale )",
    },
    {
      id: "2",
      label: "CMA • CAPITAL MARKETS AUTHORITY",
    },
    {
      id: "3",
      label: "NAIROBI CITY COUNCIL • BUSINESS REGISTRATION CERTIFICATE",
    },
  ],
};
