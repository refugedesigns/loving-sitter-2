import React from "react";

import {
  Card,
  Button,
  Typography,
  Rating,
  Box,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  MobileDatePicker,
  TimePicker,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import addDays from "date-fns/addDays";

const DogsitterBookingCard = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(
    addDays(new Date(), 7)
  );
  const [value, setValue] = React.useState<Date | null>(null);
  return (
    <Card className="flex flex-col max-w-md px-4 py-8 space-y-8 mx-auto mb-10 h-max xl:fixed xl:right-[5%] 2xl:mr-[200px]">
      <Box className="mx-auto flex flex-col items-center space-y-6">
        <Typography className="font-semibold text-5xl text-red-400" variant="h5">$30/hr</Typography>
        <Rating value={4} readOnly />
      </Box>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box>
          <Box className="md:hidden block">
            <Typography className="uppercase text-xl font-semibold">
              Drop-in
            </Typography>
            <Box>
              <MobileDatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-2/3" {...params} />
                )}
              />
              <MobileTimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-1/3" {...params} />
                )}
              />
            </Box>
          </Box>
          <Box className="hidden md:block">
            <Typography className="uppercase text-xl font-semibold">
              Drop-in
            </Typography>
            <Box>
              <DatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-2/3" {...params} />
                )}
              />
              <TimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-1/3" {...params} />
                )}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="md:hidden block">
            <Typography className="uppercase text-xl font-semibold">
              Drop-off
            </Typography>
            <Box>
              <MobileDatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-2/3" {...params} />
                )}
              />
              <MobileTimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-1/3" {...params} />
                )}
              />
            </Box>
          </Box>
          <Box className="hidden md:block">
            <Typography className="uppercase text-xl font-semibold">
              Drop-off
            </Typography>
            <Box>
              <DatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-2/3" {...params} />
                )}
              />
              <TimePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => (
                  <TextField className="w-1/3" {...params} />
                )}
              />
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
      <Button className="w-max mx-auto" variant="contained">Send Request</Button>
      <Button className="w-max mx-auto px-12" variant="contained">Message</Button>
    </Card>
  );
};

export default DogsitterBookingCard;
