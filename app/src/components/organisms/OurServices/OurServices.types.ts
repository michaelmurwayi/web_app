import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps, Theme } from "@mui/material";

export interface ServiceItem {
  id: number;
  image: string;
  icon: SvgIconComponent;
  title: string;
  description: string;
  number: string;
}

export interface OurServicesConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export interface OurServicesProps {
  config: OurServicesConfig;
}

export interface OurServicesStyle {
  root: SxProps<Theme>;
  container: SxProps<Theme>;
  header: SxProps<Theme>;
  subtitle: SxProps<Theme>;
  cards: SxProps<Theme>;
}
