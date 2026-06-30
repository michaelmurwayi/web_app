import { Box } from "@mui/material";

import type { AboutHeroImage } from "./AboutHero.types";
import { styles } from "./AboutHero.styles";

interface AboutHeroImageGridProps {
  images: AboutHeroImage[];
  established: string;
}

const AboutHeroImageGrid = ({
  images,
  established,
}: AboutHeroImageGridProps) => {
  const leftColumn = images.slice(0, 2);
  const rightColumn = images.slice(2, 4);

  return (
    <Box sx={styles.right}>
      <Box sx={styles.imageGrid}>
        <Box sx={styles.column}>
          {leftColumn.map((image) => (
            <Box
              key={image.id}
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                ...styles.image,
                height: image.id === leftColumn[0]?.id ? 300 : 220,
                mt: image.id === leftColumn[0]?.id ? 4 : 0,
              }}
            />
          ))}
        </Box>

        <Box sx={styles.column}>
          {rightColumn.map((image) => (
            <Box
              key={image.id}
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                ...styles.image,
                height: image.id === rightColumn[0]?.id ? 220 : 300,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHeroImageGrid;
