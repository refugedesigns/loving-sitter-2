import React from "react";

import { Card, Typography, Box, Avatar } from "@mui/material";

interface Props {
  message: string;
}

const RecipientMessageCard: React.FC<Props> = ({ message }) => {
  return (
    <Box className="bg-teal-300 flex space-x-2 items-center p-4 rounded-full ml-2 max-w-md">
      <Avatar />
      <Box>
        <Typography>{message}</Typography>
      </Box>
    </Box>
  );
};

export default RecipientMessageCard;
