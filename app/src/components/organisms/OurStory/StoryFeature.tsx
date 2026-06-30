import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Stack, Typography } from "@mui/material";

import type { StoryFeature as StoryFeatureType } from "./OurStory.types";

interface StoryFeatureProps {
  feature: StoryFeatureType;
}

const StoryFeature = ({ feature }: StoryFeatureProps) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <CheckCircleRoundedIcon color="secondary" fontSize="small" />

      <Typography variant="body1" fontWeight={600}>
        {feature.title}
      </Typography>
    </Stack>
  );
};

export default StoryFeature;
