import { Box, Typography } from "@mui/material";

import type { FeatureBadgeConfig } from "./MissionVision.types";

interface FeatureBadgeProps {
  feature: FeatureBadgeConfig;
}

const FeatureBadge = ({ feature }: FeatureBadgeProps) => {
  const Icon = feature.icon;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
        py: 3,
        px: 2,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        gap: 1.5,

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 6,
          borderColor: "secondary.main",
        },
      }}
    >
      <Icon
        color="secondary"
        sx={{
          fontSize: 36,
        }}
      />

      <Typography
        align="center"
        sx={{
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {feature.title}
      </Typography>
    </Box>
  );
};

export default FeatureBadge;
