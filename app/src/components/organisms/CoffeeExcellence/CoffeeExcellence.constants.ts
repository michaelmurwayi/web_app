import CoffeeIcon from "@mui/icons-material/Coffee";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EcoIcon from "@mui/icons-material/Forest";

import SpaIcon from "@mui/icons-material/Spa";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WineBarIcon from "@mui/icons-material/WineBar";

import type { FeatureItem, FlavorItem } from "./CoffeeExcellence.types";

export const featureItems: FeatureItem[] = [
  {
    icon: CoffeeIcon,
    title: "Premium Quality",
    description:
      "Grown in rich volcanic soils, Kenya AA is the crown jewel of African coffee. Graded for its exceptionally large bean size, this flagship coffee is world-renowned for its bold body, remarkable clarity, and a brilliantly crisp, bright acidity that elevates every sip.",
  },
  {
    icon: AutoAwesomeIcon,
    title: "Distinctive Flavour",
    description:
      "Expect the unexpected. Premium Kenyan coffee behaves like a fine wine, offering a complex, multi-layered sensory experience. Each cup bursts with vibrant notes of blackcurrant, juicy citrus, and a sophisticated, wine-like finish.",
  },
  {
    icon: WorkspacePremiumIcon,
    title: "Masterfully Graded",
    description:
      "Kenya uses a meticulous sizing system to ensure unrivaled consistency. From the massive Elephant (E) beans and prized Peaberries (PB), to the flagship AA and AB blends, every single bean is sorted to guarantee peak flavor performance.",
  },
  {
    icon: EcoIcon,
    title: "Sustainable Production",
    description:
      "Exceptional coffee respects both the earth and its people. At CEBBA, we champion the dedicated smallholder estates and cooperative societies behind Kenya's finest harvests. By advocating for meticulous hand-picking methods and eco-friendly wet processing, we help protect our rich agricultural ecosystems while ensuring fair trade, sustainable livelihoods, and premium quality from farm to cup.",
  },
];

export const flavorNotes: FlavorItem[] = [
  {
    icon: SpaIcon,
    label: "Blackcurrant",
  },
  {
    icon: WbSunnyOutlinedIcon,
    label: "Citrus",
  },
  {
    icon: WineBarIcon,
    label: "Wine",
  },
];

export const coffeeGrades = ["E", "AB", "PB", "C", "T", "TT", "MH", "ML"];
