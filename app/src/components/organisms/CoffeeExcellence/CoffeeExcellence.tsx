import { memo } from "react";

import { Box, Stack, Typography } from "@mui/material";

import EcoIcon from "@mui/icons-material/Forest";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";
import { FeatureIconCard } from "@/components/molecules/FeatureIconCard";
import { FlavorNote } from "@/components/molecules/FlavorNote";
import { CoffeeBeansBackground } from "@/components/molecules/CoffeeBeanBackground";

import type { CoffeeExcellenceConfig } from "./CoffeeExcellence.types";
import { coffeeBeansConfig } from "@/config/animations/coffeeCherry.config";

import { CoffeeExcellenceStyles } from "./CoffeeExcellence.styles";

export interface CoffeeExcellenceProps {
  config: CoffeeExcellenceConfig;
}

const CoffeeExcellenceComponent = ({ config }: CoffeeExcellenceProps) => {
  return (
    <Box component="section" sx={CoffeeExcellenceStyles.root}>
      <CoffeeBeansBackground config={coffeeBeansConfig} />

      <Box sx={CoffeeExcellenceStyles.container}>
        {/* Heading */}

        <Box sx={CoffeeExcellenceStyles.heading}>
          <SectionHeading eyebrow={config.eyebrow} title={config.title} />

          <Typography sx={CoffeeExcellenceStyles.description}>
            {config.description}
          </Typography>
        </Box>

        {/* Content */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "5fr 7fr",
            },
            gap: {
              xs: 6,
              lg: 8,
            },
            alignItems: "center",
          }}
        >
          {/* Left */}

          <Box>
            <Stack sx={CoffeeExcellenceStyles.leftColumn}>
              {config.featureItems.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                >
                  <FeatureIconCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </motion.div>
              ))}
            </Stack>
          </Box>

          {/* Right */}

          <Box>
            <Stack sx={CoffeeExcellenceStyles.rightColumn}>
              {/* Image */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
              >
                <Box sx={CoffeeExcellenceStyles.imageWrapper}>
                  <Box
                    component="img"
                    src={config.image.src}
                    alt={config.image.alt}
                    sx={CoffeeExcellenceStyles.image}
                  />
                </Box>
              </motion.div>

              {/* Coffee Grades */}

              <Box sx={CoffeeExcellenceStyles.chipSection}>
                <Typography sx={CoffeeExcellenceStyles.chipTitle}>
                  {config.gradesTitle}
                </Typography>

                <Box sx={CoffeeExcellenceStyles.chipContainer}>
                  {config.coffeeGrades.map((grade) => (
                    <Box key={grade} sx={CoffeeExcellenceStyles.chip}>
                      {grade}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Flavor Notes */}

              <Box sx={CoffeeExcellenceStyles.flavorSection}>
                <Typography sx={CoffeeExcellenceStyles.chipTitle}>
                  {config.flavorTitle}
                </Typography>

                <Box sx={CoffeeExcellenceStyles.flavorContainer}>
                  {config.flavorNotes.map((note) => (
                    <FlavorNote
                      key={note.label}
                      icon={note.icon}
                      label={note.label}
                    />
                  ))}
                </Box>
              </Box>

              {/* Sustainability */}

              <Box sx={CoffeeExcellenceStyles.banner}>
                <Box sx={CoffeeExcellenceStyles.bannerIcon}>
                  <EcoIcon />
                </Box>

                <Box>
                  <Typography sx={CoffeeExcellenceStyles.bannerTitle}>
                    {config.sustainability.title}
                  </Typography>

                  <Typography sx={CoffeeExcellenceStyles.bannerDescription}>
                    {config.sustainability.description}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

CoffeeExcellenceComponent.displayName = "CoffeeExcellence";

const CoffeeExcellence = memo(CoffeeExcellenceComponent);

export { CoffeeExcellence };
