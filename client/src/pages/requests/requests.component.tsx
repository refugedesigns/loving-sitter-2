import React from "react";

import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box
} from "@mui/material";
import DogsitterRequest from "../../components/dogsitter-requests/dogsitter-request.component";
import withLayout from "../../components/hoc/layout-wrapper.component"

const RequestsPage = () => {
  return (
    <Container maxWidth='lg' className="pt-20 overflow-hidden">
      <TableContainer className="bg-white max-h-[700px]">
        <Table stickyHeader aria-label="requests table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Owner Info</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Pickup Time</TableCell>
              <TableCell align="center">Dropoff Time</TableCell>
              <TableCell align="center">Payment Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array(20).fill(null).map((_, index) => (
                <DogsitterRequest
                key={index}
                name="Norma Byers"
                pickupTime="June 5th, 10:15AM"
                dropoffTime="June 10th 15:00PM"
                requestStatus="Pending"
                paymentStatus="Unpaid  "
                />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default withLayout(RequestsPage);
