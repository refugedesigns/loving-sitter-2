import React from 'react'

import { TextField, Typography, InputLabel,Button, Box } from '@mui/material'

const EditProfile = () => {
  return (
    <Box className="flex flex-col max-w-xl mx-auto">
      <Typography className="mb-4 text-2xl font-semibold xl:text-3xl" align="center">
        Edit Profile
      </Typography>
      <Box className="space-y-3">
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
}

export default EditProfile