import processImage from "@/assets/about-2.jpg";

import type { TradingProcessConfig } from "./TradingProcess.types";

export const tradingProcessConfig: TradingProcessConfig = {
  eyebrow: "HOW IT WORKS",

  title: "Our Trading",

  highlightedTitle: "Process",

  image: processImage,

  badge: {
    number: "6",

    title: "STEP PROCESS",

    subtitle: "From Farm to Market",
  },

  steps: [
    {
      id: 1,

      number: "1",

      title: "Farmer Onboarding",

      description:
        "Registration of new farmers by our staff and onboarding them into the CEBBA network",
    },

    {
      id: 2,

      number: "2",

      title: "Milling",

      description:
        "Coffee is delivered to the mill for processing by the farmer.They can use any mill of their choice.The mill provides a milling statement of the coffee delivered after processing in this records are updated into our database.",
    },

    {
      id: 3,

      number: "3",

      title: "Warehousing",

      description:
        "The mill then delivers the coffee to a goverment licensed warehouse for storage. It is at this storage location where coffee is sold and collected by the buyer on succeful payment of the concinment",
    },

    {
      id: 4,

      number: "4",

      title: "Coffee Sale",

      description:
        "The coffee can be sold through the National Coffee Exchange ( NCE ) Auction which takes place through on tuesdays ( Depending on the NCE auction Roaster).It can also be sold through Direct Sale which is handled through the Agriculture and Foods Authority ( AFA ).",
    },

    {
      id: 5,

      number: "5",

      title: "Payment",

      description:
        "All payments are procesed as per the goverment regulations.",
    },

    {
      id: 6,

      number: "6",

      title: "Reporting",

      description:
        "We offer follow up documents to all our farmers for transparency on the status of their coffee.",
    },
  ],
};
