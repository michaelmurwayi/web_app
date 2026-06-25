import { Box } from "@mui/material";

import { Header } from "@/components/organisms/Header/Header";
import { headerConfig } from "@/components/organisms/Header/Header.config";
import {
  AboutSection,
  aboutSectionConfig,
} from "@/components/organisms/AboutSection";

const HomePage = () => {
  return (
    <Box>
      <Header config={headerConfig} />
      <AboutSection config={aboutSectionConfig} />
    </Box>
  );
};

export default HomePage;
