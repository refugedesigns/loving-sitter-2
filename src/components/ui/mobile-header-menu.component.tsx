import React from "react";

import { Menu, MenuItem, IconButton } from "@mui/material";

import { Login, HowToReg, ChairAlt } from "@mui/icons-material";

interface Props {
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
}

const MobileHeaderMenu: React.FC<Props> = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
}) => {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="mobile-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton>
          <Login />
        </IconButton>
        <p>Login</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <HowToReg />
        </IconButton>
        <p>Signup</p>
      </MenuItem>
      <MenuItem>
        <IconButton>
          <ChairAlt />
        </IconButton>
        <p>Become a sitter</p>
      </MenuItem>
    </Menu>
  );
};

export default MobileHeaderMenu;
