import { memo } from "react";

import { Box, Link, Typography } from "@mui/material";

import type { FooterProps } from "./Footer.types";
import { FooterStyles } from "./Footer.styles";

const FooterComponent = ({ config }: FooterProps) => {
  return (
    <Box component="footer" sx={FooterStyles.root}>
      <Box sx={FooterStyles.container}>
        <Typography sx={FooterStyles.text}>{config.copyright}</Typography>

        <Link
          href={config.website.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={FooterStyles.link}
        >
          {config.website.label}
        </Link>
      </Box>
    </Box>
  );
};

FooterComponent.displayName = "Footer";

export const Footer = memo(FooterComponent);
