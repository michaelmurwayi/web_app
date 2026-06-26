import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/atoms/AboutHeader/SectionHeading";

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
          <SectionHeading eyebrow={config.eyebrow} title={config.slogan} />
        </motion.div>
      </Box>
    </Box>
  );
};

CompanySloganComponent.displayName = "CompanySlogan";

export const CompanySlogan = memo(CompanySloganComponent);
