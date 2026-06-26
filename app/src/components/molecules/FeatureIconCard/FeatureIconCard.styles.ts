import type { FeatureIconCardStyle } from "./FeatureIconCard.types";

export const FeatureIconCardStyles: FeatureIconCardStyle = {
  root: {
    display: "flex",

    alignItems: "flex-start",

    gap: 3,

    p: 3,

    borderRadius: "22px",

    border: "1px solid rgba(200,135,54,.15)",

    background: "rgba(255,255,255,.45)",

    backdropFilter: "blur(10px)",

    transition: ".35s",

    "&:hover": {
      transform: "translateY(-6px)",

      boxShadow: "0 18px 40px rgba(0,0,0,.12)",

      borderColor: "#C88736",
    },
  },

  iconWrapper: {
    width: 72,

    height: 72,

    borderRadius: "50%",

    border: "2px solid #C88736",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    color: "#9C5D24",

    flexShrink: 0,

    transition: ".3s",

    "& svg": {
      fontSize: 34,
    },

    "&:hover": {
      background: "#C88736",

      color: "#fff",

      transform: "rotate(8deg)",
    },
  },

  content: {
    flex: 1,
  },

  title: {
    fontWeight: 700,

    color: "#3B2414",

    fontSize: "1.15rem",

    mb: 1,

    textTransform: "uppercase",

    letterSpacing: ".05em",
  },

  description: {
    color: "#5E4A3C",

    lineHeight: 1.8,

    fontSize: ".96rem",
  },
};
