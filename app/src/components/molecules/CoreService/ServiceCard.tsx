import { useState } from "react";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { styles } from "./ServiceCard.styles";
import type { ServiceCardProps } from "./ServiceCard.types";

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const Icon = service.icon;

  return (
    <Card sx={styles.card}>
      <Box sx={styles.imageWrapper}>
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          sx={styles.image}
        />

        <Box sx={styles.overlay} />

        <Box sx={styles.icon}>
          <Icon fontSize="large" />
        </Box>
      </Box>

      <CardContent sx={styles.content}>
        <Typography sx={styles.title}>{service.title}</Typography>

        <Typography sx={styles.subtitle}>{service.subtitle}</Typography>

        <Typography sx={styles.description}>{service.description}</Typography>

        <Box sx={styles.expandHeader}>
          <Typography sx={styles.expandTitle}>Key Deliverables</Typography>

          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={[styles.expandButton, expanded && styles.expandButtonOpen]}
          >
            <ExpandMoreRoundedIcon />
          </IconButton>
        </Box>

        <Collapse in={expanded}>
          <List disablePadding>
            {service.deliverables.map((item) => (
              <ListItem key={item} disablePadding sx={styles.listItem}>
                <ListItemIcon sx={styles.listIcon}>
                  <CheckCircleRoundedIcon color="secondary" fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography sx={styles.listText}>{item}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
