import type { FlavorNoteStyle } from "./FlavorNote.types";

export const FlavorNoteStyles: FlavorNoteStyle = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1.5,
    minWidth: 100,
  },

  iconWrapper: {
    width: 68,
    height: 68,

    borderRadius: "50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    border: "2px solid #C88736",

    background: "linear-gradient(180deg,#5C3718 0%,#3E2411 100%)",

    color: "#F7E8CF",

    transition: "all .35s ease",

    "& svg": {
      fontSize: 30,
    },

    "&:hover": {
      transform: "translateY(-5px) scale(1.05)",
      boxShadow: "0 12px 24px rgba(200,135,54,.35)",
      background: "linear-gradient(180deg,#C88736 0%,#9B5C22 100%)",
    },
  },

  label: {
    color: "#4A2E1A",

    fontWeight: 700,

    textTransform: "uppercase",

    letterSpacing: ".08em",

    fontSize: ".85rem",

    textAlign: "center",
  },
};
