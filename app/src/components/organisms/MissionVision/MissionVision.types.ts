import type { SvgIconComponent } from "@mui/icons-material";

export interface MissionCardConfig {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
}

export interface FeatureBadgeConfig {
  id: string;
  title: string;
  icon: SvgIconComponent;
}

export interface ImageBadgeConfig {
  title: string;
  value: string;
  subtitle: string;
}

export interface MissionVisionConfig {
  vision: MissionCardConfig;
  mission: MissionCardConfig;

  features: FeatureBadgeConfig[];

  image: string;
  imageAlt: string;

  quote: string;

  badge: ImageBadgeConfig;
}
