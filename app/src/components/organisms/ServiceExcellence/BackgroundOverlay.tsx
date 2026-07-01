import { Box } from "@mui/material";

interface BackgroundOverlayProps {
  image: string;
}

const BackgroundOverlay = ({ image }: BackgroundOverlayProps) => {
  return (
    <>
      <Box
        component="img"
        src={image}
        alt="Coffee Background"
        sx={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",

          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,

          background: `
            linear-gradient(
              90deg,
              rgba(22,14,8,.92) 0%,
              rgba(22,14,8,.82) 45%,
              rgba(22,14,8,.70) 100%
            )
          `,
        }}
      />
    </>
  );
};

export default BackgroundOverlay;
