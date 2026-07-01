import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { styles } from "./ProcessBadge.styles";
import type { ProcessBadgeProps } from "./ProcessBadge.types";

const ProcessBadgeComponent = ({ badge }: ProcessBadgeProps) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.number}>{badge.number}</Typography>

      <Typography sx={styles.title}>{badge.title}</Typography>

      <Box sx={styles.divider} />

      <Typography sx={styles.subtitle}>{badge.subtitle}</Typography>
    </Box>
  );
};

ProcessBadgeComponent.displayName = "ProcessBadge";

export default memo(ProcessBadgeComponent);
