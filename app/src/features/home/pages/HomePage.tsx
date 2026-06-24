import { Box } from "@mui/material";

import { Header } from "@/components/organisms/Header/Header";
import { headerConfig } from "@/components/organisms/Header/Header.config";

const HomePage = () => {
  return (
    <Box>
      <Header config={headerConfig} />
    </Box>
  );
};

export default HomePage;
