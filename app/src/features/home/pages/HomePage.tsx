import { Box } from "@mui/material";

import { Header } from "@/components/organisms/Header/Header";
import { headerConfig } from "@/components/organisms/Header/Header.config";
import {
  AboutSection,
  aboutSectionConfig,
} from "@/components/organisms/AboutSection";
import {
  OurServices,
  ourServicesConfig,
} from "@/components/organisms/OurServices";

const HomePage = () => {
  return (
    <Box>
      <Header config={headerConfig} />
      <AboutSection config={aboutSectionConfig} />
      <OurServices config={ourServicesConfig} />
    </Box>
  );
};

export default HomePage;
