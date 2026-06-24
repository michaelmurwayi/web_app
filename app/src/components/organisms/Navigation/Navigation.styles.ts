// src/config/components/navigation/navigation.styles.ts

import NAVIGATION_CONSTANTS from "./Navigation.constants";

const navigationStyles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: NAVIGATION_CONSTANTS.Z_INDEX,
  },

  container: {
    height: NAVIGATION_CONSTANTS.HEIGHT,

    px: {
      xs: 2,
      md: 4,
      lg: 6,
    },

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",

    borderBottom: "1px solid",
    borderColor: "#EADDCA",

    transition: NAVIGATION_CONSTANTS.TRANSITION,
  },

  brand: {
    textDecoration: "none",
    color: "inherit",

    display: "flex",
    alignItems: "center",
    gap: 1.5,
  },

  logo: {
    height: NAVIGATION_CONSTANTS.LOGO_HEIGHT,
    width: "auto",
    objectFit: "contain",
  },

  brandText: {
    fontWeight: 400,
    letterSpacing: "-0.02em",
    color: "text.primary",
  },

  desktopNav: {
    display: {
      xs: "none",
      md: "flex",
    },

    gap: NAVIGATION_CONSTANTS.DESKTOP_GAP,
    alignItems: "center",
  },

  menuItem: {
    fontSize: "0.95rem",

    transition: "all 0.25s ease",

    cursor: "pointer",

    position: "relative",

    "&:hover": {
      color: "primary.dark",
      transform: "translateY(-1px)",
    },
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: NAVIGATION_CONSTANTS.ACTION_GAP,
  },

  ctaButton: {
    display: {
      xs: "none",
      md: "inline-flex",
    },

    borderRadius: NAVIGATION_CONSTANTS.BORDER_RADIUS,

    px: 3,
    py: 1.2,

    textTransform: "none",
    fontWeight: 600,
  },

  mobileMenuButton: {
    display: {
      xs: "flex",
      md: "none",
    },
  },

  drawer: {
    width: NAVIGATION_CONSTANTS.DRAWER_WIDTH,

    height: "100%",

    display: "flex",
    flexDirection: "column",
  },

  drawerHeader: {
    p: 2,

    display: "flex",
    justifyContent: "flex-end",
  },

  drawerFooter: {
    p: 2,
    mt: "auto",
  },

  mobileCTA: {
    borderRadius: NAVIGATION_CONSTANTS.BORDER_RADIUS,

    py: 1.4,

    textTransform: "none",
  },
};

export default navigationStyles;
