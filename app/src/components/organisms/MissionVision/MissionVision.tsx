import { Box, Container, Typography } from "@mui/material";

import FeatureBadge from "./FeatureBadge";
import MissionCard from "./MissionCard";
import { styles } from "./MissionVision.styles";
import type { MissionVisionConfig } from "./MissionVision.types";

interface MissionVisionProps {
  config: MissionVisionConfig;
}

const MissionVision = ({ config }: MissionVisionProps) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="xl">
        <Box sx={styles.container}>
          {/* Left Content */}

          <Box sx={styles.left}>
            <MissionCard card={config.vision} />

            <MissionCard card={config.mission} />

            <Box sx={styles.featureGrid}>
              {config.features.map((feature) => (
                <FeatureBadge key={feature.id} feature={feature} />
              ))}
            </Box>
          </Box>

          {/* Right Image */}

          <Box sx={styles.right}>
            <Box
              component="img"
              src={config.image}
              alt={config.imageAlt}
              sx={styles.image}
            />

            {/* Quote Overlay */}

            <Box sx={styles.imageOverlay}>
              <Typography sx={styles.quote}>"{config.quote}"</Typography>

              <Typography sx={styles.quoteAuthor}>CEBBA Kenya</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MissionVision;
