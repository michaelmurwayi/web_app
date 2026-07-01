import { Box, Container, Typography } from "@mui/material";

import BackgroundOverlay from "./BackgroundOverlay";
import CertificationChip from "./CertificationChip";
import { styles } from "./ServiceExcellence.styles";
import type { ServiceExcellenceConfig } from "./ServiceExcellence.types";

interface ServiceExcellenceProps {
  config: ServiceExcellenceConfig;
}

const ServiceExcellence = ({ config }: ServiceExcellenceProps) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="xl">
        <Box sx={styles.container}>
          {/* Background */}

          <BackgroundOverlay image={config.backgroundImage} />

          {/* Content */}

          <Box sx={styles.content}>
            <Typography component="span" sx={styles.eyebrow}>
              {config.eyebrow}
            </Typography>

            <Typography component="h2" sx={styles.title}>
              {config.title}

              <Box
                component="span"
                sx={{
                  display: "block",
                }}
              >
                {config.highlightedTitle}
              </Box>
            </Typography>

            <Typography component="p" sx={styles.description}>
              {config.description}
            </Typography>

            <Box sx={styles.chips}>
              {config.certifications.map((chip) => (
                <CertificationChip key={chip.id} chip={chip} />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceExcellence;
