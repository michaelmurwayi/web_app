import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { styles } from "./ProcessSteps.styles";
import type { ProcessStepProps } from "./ProcessSteps.types";

const ProcessStepComponent = ({ step, isLast = false }: ProcessStepProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.timeline}>
        <Box sx={styles.circle}>{step.number}</Box>

        {!isLast && <Box sx={styles.line} />}
      </Box>

      <Box sx={styles.content}>
        <Typography sx={styles.title}>{step.title}</Typography>

        <Typography sx={styles.description}>{step.description}</Typography>
      </Box>
    </Box>
  );
};

ProcessStepComponent.displayName = "ProcessStep";

export default memo(ProcessStepComponent);
