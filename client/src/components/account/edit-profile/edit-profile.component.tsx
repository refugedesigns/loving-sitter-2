import React, { useState, ChangeEvent } from "react";

import {
  TextField,
  Typography,
  InputLabel,
  Button,
  Box,
  Checkbox,
  Switch,
} from "@mui/material";

const EditProfile = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [monChecked, setMonChecked] = useState<boolean>(false);
  const [tuesChecked, setTuesChecked] = useState<boolean>(false);
  const [wedChecked, setWedChecked] = useState<boolean>(false);
  const [thursChecked, setThursChecked] = useState<boolean>(false);
  const [friChecked, setFriChecked] = useState<boolean>(false);
  const [satChecked, setSatChecked] = useState<boolean>(false);
  const [sunChecked, setSunChecked] = useState<boolean>(false);

  const handleChangeAvailability = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(event.target.checked);
  };

  const monChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMonChecked(event.target.checked);
  };

  const tuesChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTuesChecked(event.target.checked);
  };

  const wedChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWedChecked(event.target.checked);
  };

  const thursChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setThursChecked(event.target.checked);
  };

  const friChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFriChecked(event.target.checked);
  };

  const satChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSatChecked(event.target.checked);
  };

  const sunChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSunChecked(event.target.checked);
  };

  return (
    <Box className="flex flex-col max-w-xl mx-auto">
      <Typography
        className="mb-6 text-2xl font-semibold xl:text-3xl"
        align="center"
      >
        Edit Profile
      </Typography>
      <Box className="space-y-3">
        <Box>
          <Box className="flex items-center mb-2">
            <Typography className="uppercase font-bold mr-2">
              I'm Available:
            </Typography>
            <Box
              component={Switch}
              color="primary"
              checked={isAvailable}
              onChange={handleChangeAvailability}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          <Box className="flex items-center mb-2">
            <Typography className="uppercase font-bold mr-2">
              Availability:
            </Typography>
            <Box className="flex items-center flex-wrap mb-2">
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={monChecked}
                  onChange={monChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Mon</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={tuesChecked}
                  onChange={tuesChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Tue</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={wedChecked}
                  onChange={wedChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Wed</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={thursChecked}
                  onChange={thursChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Thurs</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={friChecked}
                  onChange={friChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Fri</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={satChecked}
                  onChange={satChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Sat</Box>
              </Box>
              <Box className="flex items-center">
                <Box
                  disabled={!isAvailable}
                  component={Checkbox}
                  checked={sunChecked}
                  onChange={sunChangeHandler}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <Box component={Typography}>Sun</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <InputLabel htmlFor="fullName">Full Name</InputLabel>
          <TextField
            id="fullName"
            aria-label="user full name"
            fullWidth
            size="small"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="emailAddress">Email Address</InputLabel>
          <TextField
            id="emailAddress"
            aria-label="user email address"
            fullWidth
            size="small"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="city">City</InputLabel>
          <TextField
            id="city"
            aria-label="user's city"
            fullWidth
            size="small"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
          <TextField
            id="phoneNumber"
            aria-label="user Phone Number"
            fullWidth
            size="small"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="address">Address</InputLabel>
          <TextField
            id="address"
            aria-label="user Address"
            fullWidth
            size="small"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="description">Description</InputLabel>
          <TextField
            id="description"
            aria-label="user Description"
            fullWidth
            multiline
            minRows={3}
          />
        </Box>
      </Box>
      <Button className="mx-auto my-3 py-2" variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default EditProfile;
