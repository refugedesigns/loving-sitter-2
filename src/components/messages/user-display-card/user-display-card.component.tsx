import React from "react";

import { Paper, Avatar, Typography, Box, Divider } from "@mui/material";

const UserDisplayCard = () => {
  return (
    <>
      <Paper className="shadow-none flex items-center justify-between space-x-4 sp  py-5 px-3 hover:cursor-pointer">
        <Box className="flex items-center space-x-4">
          <Box className="relative">
            <Avatar className="h-14 w-14" />
            <Box style={{border: "2px solid white"}} className="h-4 w-4 bg-green-500 rounded-full absolute right-0 bottom-1" />
          </Box>
          <Box>
            <Typography className="font-semibold tracking-wide" variant="body1">
              Marry Wills
            </Typography>
            <Typography className="italic text-gray-400" variant="subtitle2">
              I will send you details
            </Typography>
          </Box>
        </Box>
        <Typography className="text-gray-400" variant="subtitle2">
          Yesterday
        </Typography>
      </Paper>
      <Divider />
    </>
  );
};

export default UserDisplayCard;
