import React from "react";

import {
  AppBar,
  Container,
  Box,
  Button,
  Toolbar,
  CardMedia,
  IconButton,
  Hidden,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

import MobileMenu from "../ui/mobile-header-menu.component";

const Header = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
              <Box className="space-x-3">
                <Button>Become a sitter</Button>
                <Button className="px-8" variant="outlined">
                  Login
                </Button>
                <Button className="px-8" variant="contained" disableElevation>
                  Signup
                </Button>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
