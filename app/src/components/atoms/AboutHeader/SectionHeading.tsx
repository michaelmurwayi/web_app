import { memo } from "react";

import { Box, Typography } from "@mui/material";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

const SectionHeadingComponent = ({ eyebrow, title }: SectionHeadingProps) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#B7782E",
          fontSize: "0.9rem",
          fontWeight: 700,
          letterSpacing: "4px",
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        {eyebrow}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "#D6C2A6",
          }}
        />

        <Box
          sx={{
            color: "#B7782E",
            fontSize: 18,
          }}
        >
          ✦
        </Box>

        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "#D6C2A6",
          }}
        />
      </Box>

      <Typography
        component="h2"
        sx={{
          fontSize: {
            xs: "2.3rem",
            md: "3.4rem",
          },
          fontWeight: 700,
          color: "#2E1B12",
          fontFamily: "Playfair Display, serif",
          lineHeight: 1.15,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "#D6C2A6",
          }}
        />

        <Box
          sx={{
            color: "#B7782E",
            fontSize: 18,
          }}
        >
          ✦
        </Box>

        <Box
          sx={{
            flex: 1,
            height: "1px",
            bgcolor: "#D6C2A6",
          }}
        />
      </Box>
    </Box>
  );
};

SectionHeadingComponent.displayName = "SectionHeading";

export const SectionHeading = memo(SectionHeadingComponent);
