import { Stack, Typography } from "@mui/material";

import type { AboutHeroStat } from "./AboutHero.types";
import { styles } from "./AboutHero.styles";

interface Props {
  stats: AboutHeroStat[];
}

const AboutHeroStats = ({ stats }: Props) => {
  return (
    <Stack sx={styles.statsContainer}>
      {stats.map((stat) => (
        <Stack key={stat.label}>
          <Typography sx={styles.statValue}>{stat.value}</Typography>

          <Typography sx={styles.statLabel}>{stat.label}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default AboutHeroStats;
