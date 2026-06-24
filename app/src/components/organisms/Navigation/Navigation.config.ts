import { routes } from "@/router/routes";
import type { NavigationConfig } from "./Navigation.types";
import logo from "@/assets/hero.png";

export const navigationConfig: NavigationConfig = {
  brand: {
    name: "CEBBA",
    logo,
  },

  menuItems: [
    {
      id: "home",
      label: "Home",
      path: routes.home,
    },
  ],

  cta: {
    label: "Get Started",
    path: routes.getStarted,
  },
};
