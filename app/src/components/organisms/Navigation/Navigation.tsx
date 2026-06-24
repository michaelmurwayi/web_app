import { memo, useMemo, useState } from "react";

import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { NavLink } from "react-router-dom";

import type { NavigationProps } from "./Navigation.types";

import navigationStyles from "@/components/organisms/Navigation/Navigation.styles";
import NAVIGATION_CONSTANTS from "@/components/organisms/Navigation/Navigation.constants";

const NavigationComponent = ({ config }: NavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: NAVIGATION_CONSTANTS.SCROLL_THRESHOLD,
  });

  const navigationItems = useMemo(() => config.menuItems, [config.menuItems]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  const containerStyles = {
    ...navigationStyles.container,

    backgroundColor: scrolled
      ? NAVIGATION_CONSTANTS.BACKGROUND.SCROLLED
      : NAVIGATION_CONSTANTS.BACKGROUND.DEFAULT,

    boxShadow: scrolled
      ? NAVIGATION_CONSTANTS.SHADOW.SCROLLED
      : NAVIGATION_CONSTANTS.SHADOW.DEFAULT,
  };

  return (
    <>
      <Box component="header" sx={navigationStyles.header}>
        <Container maxWidth="xl">
          <Box sx={containerStyles}>
            <Box component={NavLink} to="/" sx={navigationStyles.brand}>
              {config.brand.logo && (
                <Box
                  component="img"
                  src={config.brand.logo}
                  alt={config.brand.name}
                  sx={navigationStyles.logo}
                />
              )}

              <Typography variant="h6" sx={navigationStyles.brandText}>
                {config.brand.name}
              </Typography>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={navigationStyles.desktopNav}
            >
              {navigationItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {({ isActive }) => (
                    <Typography
                      sx={{
                        ...navigationStyles.menuItem,
                        fontWeight: isActive ? 700 : 400,
                        color: isActive ? "primary.main" : "text.primary",
                      }}
                    >
                      {item.label}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>

            <Box sx={navigationStyles.rightSection}>
              <Button
                component={NavLink}
                to={config.cta.path}
                variant="contained"
                sx={navigationStyles.ctaButton}
              >
                {config.cta.label}
              </Button>

              <IconButton
                aria-label="Open navigation menu"
                onClick={handleDrawerToggle}
                sx={navigationStyles.mobileMenuButton}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <Drawer anchor="right" open={mobileOpen} onClose={handleCloseDrawer}>
        <Box sx={navigationStyles.drawer}>
          <Box sx={navigationStyles.drawerHeader}>
            <IconButton onClick={handleCloseDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleCloseDrawer}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={navigationStyles.drawerFooter}>
            <Button
              component={NavLink}
              to={config.cta.path}
              variant="contained"
              fullWidth
              onClick={handleCloseDrawer}
              sx={navigationStyles.mobileCTA}
            >
              {config.cta.label}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export const Navigation = memo(NavigationComponent);
