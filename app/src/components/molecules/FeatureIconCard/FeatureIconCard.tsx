import { memo } from "react";

import { Box, Typography } from "@mui/material";

import type { FeatureIconCardProps } from "./FeatureIconCard.types";

import { FeatureIconCardStyles } from "./FeatureIconCard.styles";

const FeatureIconCardComponent = ({
  icon: Icon,
  title,
  description,
}: FeatureIconCardProps) => {
  return (
    <Box sx={FeatureIconCardStyles.root}>
      <Box sx={FeatureIconCardStyles.iconWrapper}>
        <Icon fontSize="large" />
      </Box>

      <Box sx={FeatureIconCardStyles.content}>
        <Typography sx={FeatureIconCardStyles.title}>{title}</Typography>

        <Typography sx={FeatureIconCardStyles.description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

FeatureIconCardComponent.displayName = "FeatureIconCard";

export const FeatureIconCard = memo(FeatureIconCardComponent);
