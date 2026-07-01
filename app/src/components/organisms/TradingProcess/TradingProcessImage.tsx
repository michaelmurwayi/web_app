import { Box } from "@mui/material";

import { ProcessBadge } from "@/components/molecules/ProcessBadge";

import { styles } from "./TradingProcess.styles";
import type { ProcessBadge as ProcessBadgeType } from "./TradingProcess.types";

interface TradingProcessImageProps {
  image: string;
  badge: ProcessBadgeType;
}

const TradingProcessImage = ({ image, badge }: TradingProcessImageProps) => {
  return (
    <Box sx={styles.imageContainer}>
      <Box
        component="img"
        src={image}
        alt="Coffee Trading Process"
        sx={styles.image}
      />

      <Box sx={styles.badgeWrapper}>
        <ProcessBadge badge={badge} />
      </Box>
    </Box>
  );
};

export default TradingProcessImage;
