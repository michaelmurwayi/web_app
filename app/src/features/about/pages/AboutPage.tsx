import { Box } from "@mui/material";
import AboutHero, {
  aboutHeroConfig,
} from "../../../components/organisms/AboutHero";
import { OurStory, ourStoryConfig } from "@/components/organisms/OurStory";

const AboutPage = () => {
  return (
    <Box>
      <AboutHero config={aboutHeroConfig} />
      <OurStory config={ourStoryConfig} />
    </Box>
  );
};

export default AboutPage;
