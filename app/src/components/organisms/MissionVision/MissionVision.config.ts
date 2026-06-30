import CoffeeIcon from "@mui/icons-material/Coffee";
import EcoIcon from "@mui/icons-material/Forest";
import SpaIcon from "@mui/icons-material/Spa";

import missionImage from "../../../assets/mission.jpg";

import type { MissionVisionConfig } from "./MissionVision.types";

export const missionVisionConfig: MissionVisionConfig = {
  vision: {
    eyebrow: "CEBBA VISION",

    title: "Leading with",

    highlightedTitle: "Excellence",

    description:
      "To be the leading coffee brokerage agency globally, renowned for our total dedication to quality excellence by putting the producer at the centre of production, processing, marketing, and consumption of coffee globally.",
  },

  mission: {
    eyebrow: "CEBBA MISSION",

    title: "Growing with",

    highlightedTitle: "Purpose",

    description:
      "A coffee brokerage agency dedicated to the promotion of environmental sustainability, sustainable regenerative farmer-friendly practices to produce the highest quality cup to coffee lovers and enthusiasts.",
  },

  features: [
    {
      id: "1",

      title: "Sustainability",

      icon: EcoIcon,
    },

    {
      id: "2",

      title: "Regenerative",

      icon: SpaIcon,
    },

    {
      id: "3",

      title: "Quality Cup",

      icon: CoffeeIcon,
    },
  ],

  image: missionImage,

  imageAlt: "Premium Kenyan Coffee Beans",

  quote: "From Kenya to your cup — every bean tells Our story.",

  badge: {
    title: "Grade",

    value: "Quality",

    subtitle: "Premium",
  },
};
