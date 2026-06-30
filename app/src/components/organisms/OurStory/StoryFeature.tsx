import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Typography } from "@mui/material";

import { styles } from "./OurStory.styles";
import type { StoryFeature as StoryFeatureType } from "./OurStory.types";

interface StoryFeatureProps {
  feature: StoryFeatureType;
}

const StoryFeature = ({ feature }: StoryFeatureProps) => {
  return (
    <Box sx={styles.featureItem}>
      <CheckCircleRoundedIcon color="secondary" sx={{ fontSize: 22 }} />

      <Typography variant="body1" sx={styles.featureText}>
        {feature.title}
      </Typography>
    </Box>
  );
};

export default StoryFeature;
