import { memo } from "react";

import { Box, Stack, Typography } from "@mui/material";

import type { ContactInfoCardProps } from "./ContactInfoCard.types";

import { ContactInfoCardStyles } from "./ContactInfoCard.styles";

const ContactInfoCardComponent = ({
  icon: Icon,
  title,
  items,
}: ContactInfoCardProps) => {
  return (
    <Box sx={ContactInfoCardStyles.root}>
      <Box sx={ContactInfoCardStyles.iconWrapper}>
        <Icon />
      </Box>

      <Stack sx={ContactInfoCardStyles.content}>
        <Typography sx={ContactInfoCardStyles.title}>{title}</Typography>

        {items.map((item) => (
          <Typography key={item} sx={ContactInfoCardStyles.item}>
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

ContactInfoCardComponent.displayName = "ContactInfoCard";

export const ContactInfoCard = memo(ContactInfoCardComponent);
