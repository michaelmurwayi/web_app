import type { SvgIconComponent } from "@mui/icons-material";

export interface FeatureItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FlavorItem {
  icon: SvgIconComponent;
  label: string;
}

export interface CoffeeImage {
  src: string;
  alt: string;
}

export interface SustainabilityConfig {
  title: string;
  description: string;
}

export interface CoffeeExcellenceConfig {
  eyebrow: string;

  title: string;

  description: string;

  image: CoffeeImage;

  gradesTitle: string;

  flavorTitle: string;

  sustainability: SustainabilityConfig;

  featureItems: FeatureItem[];

  flavorNotes: FlavorItem[];

  coffeeGrades: string[];
}
