import React from 'react'

import { Input, Button, Box } from '@mui/material'

const InputBox = () => {
  return (
    <Box className="flex">
      <Input
        multiline
        maxRows={5}
        fullWidth
        className="px-10 rounded-none"
        disableUnderline
        placeholder='Type your message here...'
      />
      <Button disableElevation className="rounded-none" variant="contained">
        Send
      </Button>
    </Box>
  );
}

export default InputBox