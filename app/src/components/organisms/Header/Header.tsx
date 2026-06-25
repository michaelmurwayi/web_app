import { memo } from "react";

import { Box, Typography } from "@mui/material";

import { Navigation } from "@/components/organisms/Navigation";
import { navigationConfig } from "@/components/organisms/Navigation";
import { TypewriterText } from "@/components/atoms/TyperWriterText/TypeWriterText";
import { CoffeeBeansBackground } from "@/components/molecules/CoffeeBeanBackground";

import { coffeeBeansConfig } from "@/config/animations/coffeeBeans.config";
import { headerStyles } from "./Header.styles";

import type { HeaderProps } from "./Header.types";

const HeaderComponent = ({ config }: HeaderProps) => {
  return (
    <Box sx={headerStyles.root}>
      <CoffeeBeansBackground config={coffeeBeansConfig} />
      <Navigation config={navigationConfig} />

      <Box sx={headerStyles.body}>
        <Box sx={headerStyles.leftPanel}>
          <TypewriterText
            words={config.words}
            typingSpeed={80}
            wordDelay={300}
          />
        </Box>

        <Box sx={headerStyles.rightPanel}>
          <Box
            component="img"
            src={config.showcaseImage}
            alt="Coffee Showcase"
            sx={headerStyles.circleImage}
          />

          <Typography sx={headerStyles.description}>
            {config.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const Header = memo(HeaderComponent);
