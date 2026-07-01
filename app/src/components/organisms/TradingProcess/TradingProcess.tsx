import { Box, Container, Typography } from "@mui/material";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";

import TradingProcessImage from "./TradingProcessImage";
import TradingProcessTimeline from "@/components/atoms/TradingProcess/TradingProcessTimeline";
import { styles } from "./TradingProcess.styles";
import type { TradingProcessProps } from "./TradingProcess.types";

const TradingProcess = ({ config }: TradingProcessProps) => {
  return (
    <Box component="section" sx={styles.section}>
      <Box sx={styles.backgroundGlow} />

      <Box sx={styles.backgroundGlowBottom} />

      <Container maxWidth="xl">
        <Box sx={styles.container}>
          {/* Left Content */}

          <Box sx={styles.left}>
            <SectionHeading eyebrow={config.eyebrow} title={config.title} />

            <Typography
              sx={{
                color: "secondary.main",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                lineHeight: 1.15,
                mb: 4,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.4rem",
                },
              }}
            >
              {config.highlightedTitle}
            </Typography>

            <Typography sx={styles.subtitle}>
              From the first enquiry to the final shipment, CEBBA ensures a
              transparent, efficient, and quality-driven coffee trading
              experience that connects Kenyan producers with buyers across the
              world.
            </Typography>

            <TradingProcessTimeline steps={config.steps} />
          </Box>

          {/* Right Image */}

          <TradingProcessImage image={config.image} badge={config.badge} />
        </Box>
      </Container>
    </Box>
  );
};

export default TradingProcess;
