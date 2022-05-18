import React, { useState } from "react";
import { Link } from "react-router-dom"
import {
  AppBar,
  Container,
  Box,
  Button,
  Toolbar,
  CardMedia,
  IconButton,
  Hidden,
  Tabs,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import MobileMenu from "../ui/mobile-header-menu.component";
import LinkTab from "../ui/link-tab.component";

const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<string | undefined>("Eric");
  const [tabValue, setTabValue] = useState(0);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
     setAnchorElUser(event.currentTarget);
   };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (
    <Box className="flex-1">
      <AppBar className="bg-white" position="fixed">
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between" disableGutters>
            <IconButton className="rounded-none">
              <CardMedia
                component="img"
                height="40"
                image="/assets/logo.png"
                alt="loving-sitter logo"
                className="object-contain w-max"
              />
            </IconButton>
            <Hidden mdUp>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls=""
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreVert color="primary" />
              </IconButton>
              <MobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
              />
            </Hidden>
            <Hidden mdDown>
              {!user ? (
                <Box className="space-x-3">
                  <Button>Become a sitter</Button>
                  <Button className="px-8" variant="outlined">
                    Login
                  </Button>
                  <Button className="px-8" variant="contained" disableElevation>
                    Signup
                  </Button>
                </Box>
              ) : (
                <Box className="flex items-center">
                  <Button className="text-gray-500 focus:text-[#f14140]">
                    Become a sitter
                  </Button>
                  <Button className="text-gray-500 focus:text-[#f14140]">
                    Notification
                  </Button>
                  <Tabs
                    value={tabValue}
                    onChange={handleChangeTab}
                    aria-label="logged in nav tabs"
                    className="mr-6"
                  >
                    <LinkTab label="My Jobs" to="/my-jobs" />
                    <LinkTab label="My Bookings" to="/my-bookings" />
                    <LinkTab label="Messages" to="/messages" />
                  </Tabs>
                  <Box>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu}>
                        <Avatar />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem>
                        <Box>Profile</Box>
                      </MenuItem>
                      <MenuItem>
                        <Box>Logout</Box>
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>
              )}
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
