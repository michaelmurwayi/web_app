import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps, Theme } from "@mui/material";

export interface ServiceCardProps {
  image: string;
  icon: SvgIconComponent;
  title: string;
  description: string;
  number: string;
}

export interface ServiceCardStyles {
  root: SxProps<Theme>;
  image: SxProps<Theme>;
  overlay: SxProps<Theme>;
  imageContainer: SxProps<Theme>;
  content: SxProps<Theme>;
  iconWrapper: SxProps<Theme>;
  title: SxProps<Theme>;
  description: SxProps<Theme>;
  number: SxProps<Theme>;
  decoration: SxProps<Theme>;
}
