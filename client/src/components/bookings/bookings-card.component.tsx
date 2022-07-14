import React from "react";

import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { FiSettings } from "react-icons/fi";
const BookingsCard = () => {
  return (
    <Box className="border border-gray-300 border-solid my-3 p-3 rounded-lg space-y-3">
      <Box className="flex justify-between items-center">
        <Typography className="tracking-wide">8 April 2020, 7-9PM</Typography>
        <IconButton>
          <FiSettings className="text-gray-400 h-4 w-4" />
        </IconButton>
      </Box>
      <Box className="flex justify-between">
        <Box className="flex items-center space-x-4">
          <Avatar />
          <Typography className="font-semibold tracking-wide">
            Charles Compton
          </Typography>
        </Box>
        <Typography className="mr-10 uppercase text-xs tracking-widest font-bold text-gray-400">
          Accepted
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingsCard;
