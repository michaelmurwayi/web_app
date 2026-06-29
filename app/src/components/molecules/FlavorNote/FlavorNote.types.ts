import type { SvgIconComponent } from "@mui/icons-material";
import type { SxProps, Theme } from "@mui/material";

export interface FlavorNoteProps {
  icon: SvgIconComponent;
  label: string;
}

export interface FlavorNoteStyle {
  root: SxProps<Theme>;
  iconWrapper: SxProps<Theme>;
  label: SxProps<Theme>;
}
