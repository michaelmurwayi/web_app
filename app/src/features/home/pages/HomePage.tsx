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

import {
  CoffeeExcellence,
  coffeeExcellenceConfig,
} from "@/components/organisms/CoffeeExcellence";

import {
  CompanySlogan,
  companySloganConfig,
} from "@/components/organisms/CompanySlogan";

import { Contact, contactConfig } from "@/components/organisms/Contact";
import { Footer, footerConfig } from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <Box>
      <Header config={headerConfig} />
      <AboutSection config={aboutSectionConfig} />
      <OurServices config={ourServicesConfig} />
      <CoffeeExcellence config={coffeeExcellenceConfig} />
      <CompanySlogan config={companySloganConfig} />
      <Contact config={contactConfig} />
      <Footer config={footerConfig} />
    </Box>
  );
};

export default HomePage;
