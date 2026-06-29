import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps, Theme } from "@mui/material";

export interface FeatureIconCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface FeatureIconCardStyle {
  root: SxProps<Theme>;
  iconWrapper: SxProps<Theme>;
  content: SxProps<Theme>;
  title: SxProps<Theme>;
  description: SxProps<Theme>;
}
