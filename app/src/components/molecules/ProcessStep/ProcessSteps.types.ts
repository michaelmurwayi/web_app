import type { ProcessStep as ProcessStepModel } from "@/components/organisms/TradingProcess";

export interface ProcessStepProps {
  step: ProcessStepModel;
  isLast?: boolean;
}
