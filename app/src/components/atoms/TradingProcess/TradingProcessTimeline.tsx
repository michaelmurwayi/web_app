import { Box } from "@mui/material";

import { ProcessStep } from "@/components/molecules/ProcessStep";

import type { ProcessStep as ProcessStepType } from "@/components/organisms/TradingProcess";

interface TradingProcessTimelineProps {
  steps: ProcessStepType[];
}

const TradingProcessTimeline = ({ steps }: TradingProcessTimelineProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {steps.map((step, index) => (
        <ProcessStep
          key={step.id}
          step={step}
          isLast={index === steps.length - 1}
        />
      ))}
    </Box>
  );
};

export default TradingProcessTimeline;
