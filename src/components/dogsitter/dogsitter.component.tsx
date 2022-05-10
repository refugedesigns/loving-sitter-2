import React from "react";

import { Card, Avatar, Typography, Box, Divider } from "@mui/material";
import { Star } from "@mui/icons-material";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Dogsitter = () => {
  return (
    <Card className="flex space-x-2 max-w-md lg:block lg:max-w-[16rem] lg:space-x-0">
      <Box className="w-[50%] lg:w-[25%] lg:h-[25%] lg:p-2 lg:mx-auto">
        <Avatar className="rounded-none w-full h-full lg:rounded-full lg:w-20 lg:h-20" />
      </Box>
      <Box className="p-2 space-y-2 lg:mx-auto lg:p-0">
        <Typography className="lg:text-center" variant="h6">
          Norma Byers
        </Typography>
        <Typography
          className="italic text-gray-500 lg:text-center"
          variant="subtitle2"
        >
          Loving pet sitter
        </Typography>
        <Box className="lg:text-center">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Star className="text-yellow-500" key={index} />
            ))}
        </Box>
        <Typography className="lg:text-center" variant="subtitle2">
          Dog sitting, cat sitting, pocket pet and bird care
        </Typography>
        <Divider />
        <Box className="flex items-center justify-between lg:p-2">
          <Box className="flex items-center">
            <LocationMarkerIcon className="h-6 w-6 text-red-500" />
            <Typography className="text-gray-500" variant="subtitle1">
              Toronto, Ontario
            </Typography>
          </Box>
          <Box>
            <Typography className="font-semibold" variant="body1">
              $17/hr
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Dogsitter;
