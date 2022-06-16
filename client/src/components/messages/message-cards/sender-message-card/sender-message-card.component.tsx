import React from 'react'

import { Box, Typography } from '@mui/material'

interface Props {
    message: string;
}

const SenderMessageCard: React.FC<Props> = ({message}) => {
  return (
    <Box className='self-end max-w-md p-4 rounded-full mr-2 shadow-md bg-gray-100'>
        <Typography>{message}</Typography>
    </Box>
  )
}

export default SenderMessageCard