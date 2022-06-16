import React from 'react'

import { Paper, Box,  TextField, InputLabel, Button, Typography, Divider } from '@mui/material'
import { FcGoogle } from "react-icons/fc"
import { MdOutlineDoubleArrow } from 'react-icons/md'

const Signup = () => {
  return (
    <Paper className="md:w-1/2 mx-auto p-4">
        <Typography align="center" variant='h4' mt={5}>Signup</Typography>
        <Box className="flex flex-col items-center w-full space-y-6 p-4">
          <Box className='w-full'>
            <InputLabel>Email Address</InputLabel>
            <TextField fullWidth />
          </Box>
          <Box className='w-full'>
            <InputLabel>Name</InputLabel>
            <TextField fullWidth />
          </Box>
          <Box className='w-full'>
            <InputLabel>Password</InputLabel>
            <TextField fullWidth />
          </Box>
          <Button className='lg:w-1/2 whitespace-nowrap' disableElevation type="submit" variant='contained' startIcon={<MdOutlineDoubleArrow />}>Continue with email</Button>
          <Box className='flex items-center space-x-2 w-1/2'>
            <Divider className='flex-1' />
            <Typography>or</Typography>
            <Divider className='flex-1'/>
          </Box>
          <Button className='lg:w-1/2 whitespace-nowrap' variant="outlined" type='button' startIcon={<FcGoogle />} >Continue with Google</Button>
        </Box>
    </Paper>
  )
}

export default Signup
