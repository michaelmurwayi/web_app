import type { NavigationConfig } from "./Navigation.types";

import logo from "@/assets/logo.png";

import stockSummaryTemplate from "@/assets/resources/stock-summary-template.pdf";
import saleSummaryTemplate from "@/assets/resources/sale-summary-template.pdf";
import growerAgreement from "@/assets/resources/grower-agreement.pdf";
import coffeeTariffs from "@/assets/resources/coffee-tariffs.pdf";
import coffeeCalendar from "@/assets/resources/coffee-calendar.pdf";

export const navigationConfig: NavigationConfig = {
  brand: {
    name: "CEBBA",
    logo,
  },

  menuItems: [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
  ],

  resources: [
    {
      id: "stock-summary",
      label: "Stock Summary Template",
      fileUrl: stockSummaryTemplate,
    },
    {
      id: "sale-summary",
      label: "Sale Summary Template",
      fileUrl: saleSummaryTemplate,
    },
    {
      id: "grower-agreement",
      label: "Grower Agreement",
      fileUrl: growerAgreement,
    },
    {
      id: "coffee-tariffs",
      label: "Coffee Tariffs",
      fileUrl: coffeeTariffs,
    },
    {
      id: "coffee-calendar",
      label: "Coffee Calendar",
      fileUrl: coffeeCalendar,
    },
  ],
};
