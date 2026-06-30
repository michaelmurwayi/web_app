import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

// Import the prop types from your base component to prevent the naming conflict
import type { CompanySloganProps } from "./CompanySlogan";

import { CompanySloganStyles } from "./CompanySloganDark.styles";

const CompanySloganDarkComponent = ({ config }: CompanySloganProps) => {
  return (
    <Box component="section" sx={CompanySloganStyles.root}>
      <Box sx={CompanySloganStyles.container}>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Box sx={CompanySloganStyles.quoteContainer}>
            <Typography sx={CompanySloganStyles.quoteMark}>❝</Typography>

            <Typography component="blockquote" sx={CompanySloganStyles.slogan}>
              {config.slogan}
            </Typography>

            <Typography sx={CompanySloganStyles.quoteMark}>❞</Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

CompanySloganDarkComponent.displayName = "CompanySloganDark";

export const CompanySloganDark = memo(CompanySloganDarkComponent);
