import { memo } from "react";

import { Box, Typography } from "@mui/material";

import type { FlavorNoteProps } from "./FlavorNote.types";

import { FlavorNoteStyles } from "./FlavorNote.styles";

const FlavorNoteComponent = ({ icon: Icon, label }: FlavorNoteProps) => {
  return (
    <Box sx={FlavorNoteStyles.root}>
      <Box sx={FlavorNoteStyles.iconWrapper}>
        <Icon fontSize="large" />
      </Box>

      <Typography sx={FlavorNoteStyles.label}>{label}</Typography>
    </Box>
  );
};

FlavorNoteComponent.displayName = "FlavorNote";

export const FlavorNote = memo(FlavorNoteComponent);
