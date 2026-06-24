import { memo, useMemo, useState } from "react";

import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Button,
  Typography,
  useScrollTrigger,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { NavLink } from "react-router-dom";

import type { NavigationProps } from "./Navigation.types";

import navigationStyles from "@/components/organisms/Navigation/Navigation.styles";
import NAVIGATION_CONSTANTS from "@/components/organisms/Navigation/Navigation.constants";

const NavigationComponent = ({ config }: NavigationProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [resourceAnchor, setResourceAnchor] = useState<null | HTMLElement>(
    null,
  );

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

  const handleOpenResources = (event: React.MouseEvent<HTMLElement>) => {
    setResourceAnchor(event.currentTarget);
  };

  const handleCloseResources = () => {
    setResourceAnchor(null);
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
            {/* Brand */}
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

            {/* Desktop Navigation */}
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
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "primary.main" : "text.primary",
                      }}
                    >
                      {item.label}
                    </Typography>
                  )}
                </NavLink>
              ))}
            </Box>

            {/* Right Section */}
            <Box sx={navigationStyles.rightSection}>
              <Button
                variant="contained"
                onClick={handleOpenResources}
                endIcon={<KeyboardArrowDownRoundedIcon />}
                sx={navigationStyles.resourceButton}
              >
                Resources
              </Button>

              <Menu
                anchorEl={resourceAnchor}
                open={Boolean(resourceAnchor)}
                onClose={handleCloseResources}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 260,
                    borderRadius: 2,
                  },
                }}
              >
                {config.resources.map((resource) => (
                  <MenuItem
                    key={resource.id}
                    component="a"
                    href={resource.fileUrl}
                    download
                    onClick={handleCloseResources}
                  >
                    {resource.label}
                  </MenuItem>
                ))}
              </Menu>

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

      {/* Mobile Drawer */}

      <Drawer anchor="right" open={mobileOpen} onClose={handleCloseDrawer}>
        <Box sx={navigationStyles.drawer}>
          {/* Drawer Header */}

          <Box sx={navigationStyles.drawerHeader}>
            <IconButton onClick={handleCloseDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}

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

          {/* Resources */}

          <Box sx={navigationStyles.drawerFooter}>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 1,
                fontWeight: 700,
                color: "text.secondary",
              }}
            >
              Resources
            </Typography>

            <List disablePadding>
              {config.resources.map((resource) => (
                <ListItem key={resource.id} disablePadding>
                  <ListItemButton
                    component="a"
                    href={resource.fileUrl}
                    download
                  >
                    <ListItemText primary={resource.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export const Navigation = memo(NavigationComponent);
