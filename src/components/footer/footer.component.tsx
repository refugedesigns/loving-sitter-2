import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
const Footer = React.memo(() => {
  return (
    <BottomNavigation showLabels className="bg-[#f14140]">
      <BottomNavigationAction className="text-white" label="Loving Sitter" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
});

export default Footer;
