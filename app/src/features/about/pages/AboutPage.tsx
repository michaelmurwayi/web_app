import { Box } from "@mui/material";
import AboutHero, {
  aboutHeroConfig,
} from "../../../components/organisms/AboutHero";
import { OurStory, ourStoryConfig } from "@/components/organisms/OurStory";
import {
  MissionVision,
  missionVisionConfig,
} from "@/components/organisms/MissionVision";
import {
  CompanySloganDark,
  companySloganConfig,
} from "@/components/organisms/CompanySlogan";

const AboutPage = () => {
  return (
    <Box>
      <AboutHero config={aboutHeroConfig} />
      <OurStory config={ourStoryConfig} />
      <MissionVision config={missionVisionConfig} />
      <CompanySloganDark config={companySloganConfig} />
    </Box>
  );
};

export default AboutPage;
