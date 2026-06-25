import HEADER_CONSTANTS from "@/components/organisms/Header/Header.contants";

export const headerStyles = {
  root: {
    position: "relative",
    overflow: "hidden",

    minHeight: "100vh",

    background: "radial-gradient(circle at center, #fdf9f3 0%, #f8f3ea 100%)",
  },
  body: {
    position: "relative",

    zIndex: 2,

    maxWidth: HEADER_CONSTANTS.MAX_WIDTH,

    margin: "0 auto",

    minHeight: "calc(100vh - 80px)",

    px: HEADER_CONSTANTS.SECTION_PADDING_X,
    py: HEADER_CONSTANTS.SECTION_PADDING_Y,

    display: "flex",

    flexDirection: {
      xs: "column",
      md: "row",
    },

    alignItems: "center",

    gap: {
      xs: 6,
      md: 4,
      lg: 12,
    },
  },

  leftPanel: {
    flex: HEADER_CONSTANTS.LEFT_FLEX,

    fontFamily: '"Playfair Display", serif',

    fontSize: {
      xs: "2.5rem",
      sm: "2rem",
      md: "3rem",
      lg: "4rem",
      xl: "5rem",
    },

    fontWeight: 700,

    lineHeight: 0.95,

    letterSpacing: "-0.03em",

    color: "#23160f",
  },

  rightPanel: {
    flex: 1.3,

    width: {
      xs: "100%",
      md: "55%",
      lg: "60%",
    },

    display: "flex",
    flexDirection: "column",

    alignItems: {
      xs: "center",
      md: "flex-start",
    },

    textAlign: {
      xs: "center",
      md: "left",
    },
  },

  word: {
    fontFamily: '"Playfair Display", serif',

    fontSize: {
      xs: "2.8rem",
      sm: "3rem",
      md: "4rem",
      lg: "5rem",
      xl: "6.2rem",
    },

    lineHeight: 1.2,

    fontWeight: 700,

    color: "#23160f",

    letterSpacing: "-0.03em",
  },

  accentWord: {
    color: "#c88736",
  },

  circleImage: {
    width: HEADER_CONSTANTS.IMAGE_SIZE,
    height: HEADER_CONSTANTS.IMAGE_SIZE,

    borderRadius: "50%",

    objectFit: "cover",

    border: "3px solid #c88736",

    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
  },

  description: {
    mt: 4,

    maxWidth: {
      xs: "100%",
      md: "700px",
      lg: "850px",
    },

    width: "100%",

    fontSize: {
      xs: "1rem",
      md: "1.05rem",
      lg: "1.15rem",
    },

    lineHeight: 1.9,

    color: "#5f5348",

    textAlign: {
      xs: "center",
      md: "left",
    },
  },

  actions: {
    mt: 4,

    display: "flex",

    flexDirection: {
      xs: "column",
      sm: "row",
    },

    width: {
      xs: "100%",
      sm: "auto",
    },

    gap: 2,
  },
};
