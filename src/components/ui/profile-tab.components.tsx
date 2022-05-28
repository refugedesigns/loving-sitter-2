import React from 'react'

import { Typography, Box } from '@mui/material'

interface Props {
    children?: React.ReactNode;
    index: number;
    value: number
}

const ProfileTabPanel: React.FC<Props> = ({children, value, index, ...other}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="min-h-full bg-green-200 w-full"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default ProfileTabPanel