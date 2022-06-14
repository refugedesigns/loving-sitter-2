import React from "react";

import { Avatar, Box, Card, Typography, IconButton } from "@mui/material";
import { FiSettings } from "react-icons/fi";

const NextBookingCard = () => {
  return (
    <Card className="p-4 max-w-lg shadow-xl rounded-lg space-y-6 mb-4 mx-auto">
      <Box className="flex items-center justify-between">
        <Typography
          variant="subtitle2"
          className="uppercase tracking-widest text-xs font-bold"
        >
          Your Next Booking
        </Typography>
        <IconButton>
          <FiSettings className="text-gray-400 h-4 w-4" />
        </IconButton>
      </Box>
      <Typography className="text-xl">5 April 2020, 10-12AM</Typography>
      <Box className="flex items-center space-x-4">
        <Avatar className="w-12 h-12" />
        <Typography className="text-xl font-semibold">Norma Byers</Typography>
      </Box>
    </Card>
  );
};

export default NextBookingCard;
