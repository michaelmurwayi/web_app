import { Box, Container, Typography } from "@mui/material";

import {
  Navigation,
  navigationConfig,
} from "@/components/organisms/Navigation";

import AboutHeroImageGrid from "./AboutHeroImageGrid";
import AboutHeroStats from "./AboutHeroStats";
import { styles } from "./AboutHero.styles";
import type { AboutHeroConfig } from "./AboutHero.types";

interface AboutHeroProps {
  config: AboutHeroConfig;
}

const AboutHero = ({ config }: AboutHeroProps) => {
  return (
    <>
      {/* Navigation */}
      <Box sx={styles.navigationWrapper}>
        <Navigation config={navigationConfig} />
      </Box>

      {/* Hero */}
      <Box component="section" sx={styles.section}>
        <Container maxWidth="xl">
          <Box sx={styles.container}>
            <Box sx={styles.left}>
              <Typography sx={styles.eyebrow}>{config.eyebrow}</Typography>

              <Typography component="h1" sx={styles.title}>
                {config.title}
                <br />
                <span>{config.highlightedTitle}</span>
              </Typography>

              {config.description.map((paragraph) => (
                <Typography key={paragraph} sx={styles.description}>
                  {paragraph}
                </Typography>
              ))}

              <AboutHeroStats stats={config.stats} />
            </Box>

            <AboutHeroImageGrid
              images={config.images}
              established={config.established}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutHero;
