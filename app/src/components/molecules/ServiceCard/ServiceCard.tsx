import { memo } from "react";

import { Box, Typography } from "@mui/material";

import type { ServiceCardProps } from "./ServiceCard.types";

import { serviceCardStyles } from "./ServiceCard.styles";

const ServiceCardComponent = ({
  image,
  icon: Icon,
  title,
  description,
  number,
}: ServiceCardProps) => {
  return (
    <Box sx={serviceCardStyles.root}>
      <Box sx={serviceCardStyles.imageContainer}>
        <Box
          component="img"
          src={image}
          alt={title}
          loading="lazy"
          sx={serviceCardStyles.image}
        />
      </Box>

      <Box sx={serviceCardStyles.iconWrapper}>
        <Icon fontSize="large" />
      </Box>

      <Box sx={serviceCardStyles.content}>
        <Typography sx={serviceCardStyles.title}>{title}</Typography>

        <Typography sx={serviceCardStyles.description}>
          {description}
        </Typography>
      </Box>

      <Typography sx={serviceCardStyles.number}>{number}</Typography>

      <Box sx={serviceCardStyles.overlay} />
    </Box>
  );
};

ServiceCardComponent.displayName = "ServiceCard";

export const ServiceCard = memo(ServiceCardComponent);
