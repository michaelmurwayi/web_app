import { Box, Container, Typography } from "@mui/material";

import StoryFeature from "./StoryFeature";
import { styles } from "./OurStory.styles";
import type { OurStoryConfig } from "./OurStory.types";

interface OurStoryProps {
  config: OurStoryConfig;
}

const OurStory = ({ config }: OurStoryProps) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="xl">
        <Box sx={styles.container}>
          {/* Left Image */}

          <Box sx={styles.imageWrapper}>
            <Box
              component="img"
              src={config.image}
              alt={config.imageAlt}
              sx={styles.image}
            />
          </Box>

          {/* Right Content */}

          <Box sx={styles.content}>
            <Typography sx={styles.eyebrow}>{config.eyebrow}</Typography>

            <Typography component="h2" sx={styles.title}>
              {config.title}

              <br />

              <span>{config.highlightedTitle}</span>
            </Typography>

            {config.paragraphs.map((paragraph) => (
              <Typography key={paragraph} sx={styles.paragraph}>
                {paragraph}
              </Typography>
            ))}

            <Box sx={styles.featureGrid}>
              {config.features.map((feature) => (
                <StoryFeature key={feature.id} feature={feature} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurStory;
