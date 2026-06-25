import AgricultureIcon from "@mui/icons-material/Agriculture";
import GavelIcon from "@mui/icons-material/Gavel";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";

import agronomy from "@/assets/agronomy.jpg";
import advocacy from "@/assets/advocacy.jpg";
import market from "@/assets/market.jpg";
import quality from "@/assets/quality.jpg";

import type { ServiceItem } from "./OurServices.types";

export const OUR_SERVICES: ServiceItem[] = [
  {
    id: 1,
    image: agronomy,
    icon: AgricultureIcon,
    title: "Agronomy",
    number: "01",
    description:
      "Training coffee growers on sustainable production and modern processing technologies to improve productivity, enhance coffee quality, and promote environmentally responsible farming practices.",
  },
  {
    id: 2,
    image: advocacy,
    icon: GavelIcon,
    title: "Policy Advocacy",
    number: "02",
    description:
      "Representing the interests of coffee farmers and industry stakeholders by advocating for policies and regulations that encourage fair trade, investment, and long-term sector growth.",
  },
  {
    id: 3,
    image: market,
    icon: PublicIcon,
    title: "Market Access",
    number: "03",
    description:
      "Facilitating market access through brokerage services at the Nairobi Coffee Exchange and Direct Sales, connecting coffee producers with local and international buyers while promoting fair pricing and sustainable market opportunities.",
  },
  {
    id: 4,
    image: quality,
    icon: VerifiedIcon,
    title: "Quality Control",
    number: "04",
    description:
      "Maintaining a stringent coffee quality control system through grading, inspection, and certification to protect consumers, ensure compliance with quality standards, and enhance access to local and international markets.",
  },
];

export const OUR_SERVICES_TITLE = "What We Do";

export const OUR_SERVICES_EYEBROW = "OUR SERVICES";

export const OUR_SERVICES_SUBTITLE =
  "Supporting the coffee value chain through agronomy, advocacy, market development, and uncompromising quality standards.";
