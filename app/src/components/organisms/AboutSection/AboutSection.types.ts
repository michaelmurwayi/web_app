import type { SxProps, Theme } from "@mui/material";

export interface AboutSlide {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface AboutSectionConfig {
  slides: AboutSlide[];
  autoPlay: boolean;
  autoPlayDelay: number;
}

export interface AboutSectionProps {
  config: AboutSectionConfig;
}

export interface AboutSectionStyle {
  root: SxProps<Theme>;
  container: SxProps<Theme>;
  slide: SxProps<Theme>;
  content: SxProps<Theme>;
  image: SxProps<Theme>;
  contentWrapper: SxProps<Theme>;
  slideTitle: SxProps<Theme>;
  description: SxProps<Theme>;
  indicators: SxProps<Theme>;
  indicator: SxProps<Theme>;
  navigation: SxProps<Theme>;
}
