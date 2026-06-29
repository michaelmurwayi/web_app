import type { HeaderConfig } from "./Header.types";
import heroImage from "@/assets/header.jpg";

export const headerConfig: HeaderConfig = {
  showcaseImage: heroImage,

  words: ["COFFEE", "ESTATES", "BOURGEOISIE", "BROKERS", "AGENCY"],

  description:
    "The Coffee Estates' Bourgeoisie Brokers Agency Limited (CEBBA) was established by coffee producers to champion the clamour for fair returns from the 'farm to coffee cup' by all players in the Kenya coffee value chain.Top on the list in this journey is climate resilience, sustainable production practices, sourcing, supply chain, and market access. CEBBA draws its membership from Kenya small and medium-sized coffee estates and emerging Coffee Cooperative Societies from new coffee growing regions across all 33 coffee-producing counties in Kenya.",

  actions: [
    {
      id: "trade",
      label: "Start Trading",
      path: "/contact",
      variant: "contained",
    },
    {
      id: "offerings",
      label: "View Offerings",
      path: "/services",
      variant: "outlined",
    },
  ],
};
