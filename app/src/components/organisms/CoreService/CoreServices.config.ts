import type { CoreServicesConfig } from "./CoreServices.types";

import brokerage from "@/assets/market.jpg";
import exportImg from "@/assets/agronomy.jpg";
import quality from "@/assets/quality.jpg";

import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

export const coreServicesConfig: CoreServicesConfig = {
  eyebrow: "CORE SERVICES",

  title: "What We Do",

  highlightedTitle: "",

  subtitle:
    "Delivering comprehensive brokerage, export, and quality assurance solutions that connect Kenyan coffee with global markets.",

  services: [
    {
      id: "marketing",

      title: "Marketing",

      subtitle: "Global and Local Markets",

      description:
        "We bridge the gap between production and the global marketplace by providing expert brokerage and market access. ",

      image: brokerage,

      icon: HandshakeRoundedIcon,

      deliverables: [
        "Direct Sales",
        "Nairobi Coffee Exchange (NCE) Auction Representation",
      ],
    },

    {
      id: "agronomy",

      title: "Agronomy",

      subtitle: "Technical Support & Capacity Building",

      description:
        "Our dedicated field agents work directly on the ground with coffee growers, providing continuous training on sustainable production and modern processing technologies. ",

      image: exportImg,

      icon: LocalShippingRoundedIcon,

      deliverables: [
        "Soil Nutrition & Health Management",
        "Crop Management",
        "Field Reporting & Data Tracking",
      ],
    },

    {
      id: "policy advocacy",

      title: "Policy Advocacy",

      subtitle: "Maintaining excellence",

      description:
        "We serve as a strong, unified voice for coffee farmers and industry stakeholders, actively engaging with regulatory bodies and policy-makers. ",

      image: quality,

      icon: VerifiedRoundedIcon,

      deliverables: [
        "Regulatory & Policy Engagement",
        "Fair Trade & Equitable Pricing Frameworks",
        "Public Relations & Sector Awareness",
      ],
    },
    {
      id: "quality",

      title: "Quality Assurance",

      subtitle: "Maintaining excellence",

      description:
        "We maintain a rigorous quality assurance framework at every phase of the post-harvest chain to ensure every batch meets the highest export benchmarks.",

      image: quality,

      icon: VerifiedRoundedIcon,

      deliverables: ["Coffee Grading", "Quality Audits", "Compliance Support"],
    },
  ],
};
