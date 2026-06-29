import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";
import { ServiceCard } from "@/components/molecules/ServiceCard";

import type { OurServicesProps } from "./OurServices.types";

import { OurServicesStyles } from "./OurServices.styles";

const OurServicesComponent = ({ config }: OurServicesProps) => {
  return (
    <Box component="section" id="our-services" sx={OurServicesStyles.root}>
      <Box sx={OurServicesStyles.container}>
        <Box sx={OurServicesStyles.header}>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} />

          <Typography sx={OurServicesStyles.subtitle}>
            {config.subtitle}
          </Typography>
        </Box>

        <Box sx={OurServicesStyles.cards}>
          {config.services.map((service) => {
            const Icon = service.icon;

            return (
              <ServiceCard
                key={service.id}
                image={service.image}
                icon={service.icon}
                title={service.title}
                description={service.description}
                number={service.number}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

OurServicesComponent.displayName = "OurServices";

export const OurServices = memo(OurServicesComponent);
