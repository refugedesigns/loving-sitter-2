import React from "react";

import {
  TableRow,
  TableCell,
  Avatar,
  Typography,
  IconButton,
  Badge,
  Box
} from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";

interface Props {
  imageUrl?: string;
  name: string;
  requestStatus: string;
  pickupTime: string;
  dropoffTime: string;
  paymentStatus?: string;
}

const DogsitterRequest: React.FC<Props> = ({
  name,
  imageUrl,
  requestStatus,
  pickupTime,
  dropoffTime,
  paymentStatus,
}) => {
  return (
    <TableRow>
      <TableCell
        className="flex items-center space-x-4"
        component="th"
        scope="row"
      >
        <Avatar src={imageUrl} />
        <Typography>{name}</Typography>
      </TableCell>
      <TableCell align="center">
        <Box className="bg-gray-200 py-2 rounded-full">{requestStatus}</Box>
      </TableCell>
      <TableCell align="center">{pickupTime}</TableCell>
      <TableCell align="center">{dropoffTime}</TableCell>
      <TableCell align="center">
        <Box className="bg-gray-300 py-2 rounded-full w-max mx-auto px-4">{paymentStatus}</Box>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <FiMoreVertical />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default DogsitterRequest;
