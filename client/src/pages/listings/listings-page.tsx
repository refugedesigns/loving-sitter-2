import React, {useState, useEffect} from "react";
import axios from "axios"

import { Container, Box, Grid, Typography, TextField } from "@mui/material";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import addDays from "date-fns/addDays";

import Dogsitter from "../../components/dogsitter/dogsitter.component";
import withLayout from "../../components/hoc/layout-wrapper.component"

const ListingsPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(
    addDays(new Date(), 7)
  );
  const [googleUser, setGoogleUser] = useState();
  useEffect(() => {
    async function fetchGoogleUser() {
     const user = await axios.get("http://localhost:8000/api/v1/user/auth/google-login/success", {withCredentials: true})

     console.log(user.data);
    }
    fetchGoogleUser()
  }, [googleUser])
  return (
    <>
      <Container
        maxWidth="xl"
        className="pt-28 space-y-5 mx-auto flex flex-col items-center"
      >
        <Typography className="font-semibold" variant="h3">
          Your search result
        </Typography>
        <Box className="px-4 space-y-5  max-w-md  max-auto  md:flex md:space-y-0 md:space-x-4 md:max-w-3xl">
          <TextField
            className="md:w-1/2"
            fullWidth
            hiddenLabel
            placeholder="location"
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Box className="md:hidden flex space-x-3 items-center justify-center md:w-1/2">
              <MobileDatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography className="text-gray-500">to</Typography>
              <MobileDatePicker
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
            <Box className="hidden md:inline-flex space-x-2 items-center">
              <DatePicker
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <Typography
                className="text-gray-500
          "
              >
                to
              </Typography>
              <DatePicker
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </LocalizationProvider>
        </Box>
      </Container>
      <Container className="pt-16">
        <Grid
          className=""
          rowSpacing={3}
          columnSpacing={{ md: 3 }}
          direction="row"
          alignItems="center"
          justifyContent={{ xs: "center", md: "start" }}
          container
        >
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <Grid
                key={index}
                className="flex flex-col items-center"
                item
                xs={12}
                md={3}
                lg={3}
              >
                <Dogsitter />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default withLayout(ListingsPage);
