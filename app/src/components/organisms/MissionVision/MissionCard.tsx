import { Box, Typography } from "@mui/material";

import { styles } from "./MissionVision.styles";
import type { MissionCardConfig } from "./MissionVision.types";

interface MissionCardProps {
  card: MissionCardConfig;
}

const MissionCard = ({ card }: MissionCardProps) => {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          color: "secondary.main",
          textTransform: "uppercase",
          letterSpacing: 4,
          fontWeight: 600,
          fontSize: ".8rem",
        }}
      >
        {card.eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          mt: 2,
          mb: 2,
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          lineHeight: 1.15,
          fontSize: {
            xs: "2.3rem",
            md: "3.3rem",
          },

          "& span": {
            color: "secondary.main",
          },
        }}
      >
        {card.title}

        <br />

        <span>{card.highlightedTitle}</span>
      </Typography>

      <Box sx={styles.divider} />

      <Typography
        component="p"
        sx={{
          color: "text.secondary",
          lineHeight: 1.9,
          fontSize: "1.05rem",
        }}
      >
        {card.description}
      </Typography>
    </Box>
  );
};

export default MissionCard;
