import React from "react";

import { Divider, Avatar, Typography, Box, IconButton } from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";

const MessageBoxHeader = () => {
  return (
    <Box className="shadow-md">
      <Box className="bg-white h-20 px-5 flex items-center justify-between">
        <Box className="flex items-center space-x-2">
          <Box>
            <Avatar className="h-12 w-12" />
            <Box />
          </Box>
          <Typography className="tracking-wide font-semibold" variant="h6">
            Marry Wills
          </Typography>
        </Box>
        <IconButton>
          <MoreHorizRounded />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
};

export default MessageBoxHeader;
