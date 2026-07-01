import { Box, Container, Grid, Typography } from "@mui/material";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";
import { ServiceCard } from "@/components/molecules/CoreService";

import { styles } from "./CoreServices.styles";
import type { CoreServicesProps } from "./CoreServices.types";

const CoreServices = ({ config }: CoreServicesProps) => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="xl">
        <SectionHeading eyebrow={config.eyebrow} title={config.title} />

        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            color: "secondary.main",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            lineHeight: 1.15,
            mb: 3,
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
          }}
        >
          {config.highlightedTitle}
        </Typography>

        <Typography sx={styles.subtitle}>{config.subtitle}</Typography>

        <Grid
          container
          spacing={{
            xs: 3,
            md: 4,
          }}
        >
          {config.services.map((service) => (
            <Grid
              key={service.id}
              size={{
                xs: 12,
                md: 6,
                lg: 3,
              }}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreServices;
