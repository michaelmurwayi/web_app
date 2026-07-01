import AgricultureIcon from "@mui/icons-material/Agriculture";
import GavelIcon from "@mui/icons-material/Gavel";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedIcon from "@mui/icons-material/Verified";

import agronomy from "@/assets/agronomy.jpg";
import advocacy from "@/assets/advocacy.jpg";
import market from "@/assets/market.jpg";
import quality from "@/assets/quality.jpg";

import type { ServiceItem } from "@/components/organisms/OurServices";

export const OUR_SERVICES: ServiceItem[] = [
  {
    id: 1,
    image: agronomy,
    icon: AgricultureIcon,
    title: "Agronomy",
    number: "01",
    description:
      "Our dedicated field agents work directly on the ground with coffee growers, providing continuous training on sustainable production and modern processing technologies. We guide growers through modern pulping, fermentation, and drying techniques to preserve the unique, premium characteristics of the cherry at the factory level.Through these hands-on efforts, we empower farmers to optimize their operations, enhance crop quality, and significantly boost productivity while championing environmentally responsible farming practices.",
  },
  {
    id: 2,
    image: advocacy,
    icon: GavelIcon,
    title: "Policy Advocacy",
    number: "02",
    description:
      "At CEBBA we serve as a strong, unified voice for coffee farmers and industry stakeholders, actively engaging with regulatory bodies and policy-makers. Our advocacy efforts focus on shaping a transparent, fair-trade ecosystem that encourages sustainable investment, protects smallholder interests, and drives long-term growth across the Kenyan coffee sector.We collaborate with industry associations to foster long-term structural reforms that make the local coffee economy resilient against global market and climate volatility.",
  },
  {
    id: 3,
    image: market,
    icon: PublicIcon,
    title: "Market Access",
    number: "03",
    description:
      "We bridge the gap between production and the global marketplace by providing expert brokerage and market access. Leveraging our licenses for both the Nairobi Coffee Exchange (NCE) and Direct Sales channels, we strategically position and market premium coffee lots, connecting local producers with reputable domestic and international buyers while championing fair pricing and sustainable trade relationships.By providing transparent market intelligence and evaluating global trends, we shield producers from price manipulation and work to secure premium payouts for superior quality.",
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
