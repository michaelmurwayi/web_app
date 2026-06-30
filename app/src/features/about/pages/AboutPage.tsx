import { Box } from "@mui/material";
import AboutHero, {
  aboutHeroConfig,
} from "../../../components/organisms/AboutHero";

const AboutPage = () => {
  return (
    <Box>
      <AboutHero config={aboutHeroConfig} />
    </Box>
  );
};

export default AboutPage;
