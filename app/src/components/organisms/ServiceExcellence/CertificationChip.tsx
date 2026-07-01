import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { Box, Typography } from "@mui/material";

import { styles } from "./CertificateChip.styles";
import type { CertificationChip as CertificationChipType } from "./ServiceExcellence.types";

interface CertificationChipProps {
  chip: CertificationChipType;
}

const CertificationChip = ({ chip }: CertificationChipProps) => {
  return (
    <Box sx={styles.chip}>
      <VerifiedRoundedIcon sx={styles.icon} />

      <Typography component="span" sx={styles.label}>
        {chip.label}
      </Typography>
    </Box>
  );
};

export default CertificationChip;
