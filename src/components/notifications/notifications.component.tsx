import React from "react";

import { Box, Typography, Divider } from "@mui/material";

const Notifications = () => {
  return (
    <Box className="absolute top-12 left-3  bg-white m-4 w-[400px] shadow-lg rounded-lg">
      <Box className="flex justify-between items-center p-4">
        <Typography className="text-black" variant="h6">Notifications</Typography>
        <Typography className="text-blue-600 hover:cursor-pointer hover:underline">Mark All Read</Typography>
      </Box>
      <Divider />
      <Box className="py-6 px-4">
        <Typography className="text-gray-400 text-2xl text-center">There are no new nofications</Typography>
      </Box>
    </Box>
  );
};

export default Notifications;
