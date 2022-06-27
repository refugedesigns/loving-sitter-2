import React from "react";

import { Typography, Box, Divider } from "@mui/material";
import UserDisplayCard from "../user-display-card/user-display-card.component";

const UserDisplayList = () => {
  return (
    <Box className="min-w-sm h-full bg-white flex flex-col shadow-md">
      <Box className="h-20 flex items-center px-5">
        <Typography className="text-2xl" variant="h6">
          Inbox Messages
        </Typography>
      </Box>
      <Divider />
      <Box className="overflow-y-auto flex-1">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <UserDisplayCard key={index} />
          ))}
      </Box>
    </Box>
  );
};

export default UserDisplayList;
