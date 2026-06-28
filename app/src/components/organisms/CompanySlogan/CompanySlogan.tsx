import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

import type { CompanySloganConfig } from "./CompanySlogan.types";

import { CompanySloganStyles } from "./CompanySlogan.styles";

export interface CompanySloganProps {
  config: CompanySloganConfig;
}

const CompanySloganComponent = ({ config }: CompanySloganProps) => {
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

CompanySloganComponent.displayName = "CompanySlogan";

export const CompanySlogan = memo(CompanySloganComponent);
