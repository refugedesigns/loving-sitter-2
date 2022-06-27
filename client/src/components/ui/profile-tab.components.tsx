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
      className="min-h-full w-full overflow-y-auto"
    >
      {value === index && (
        <Box sx={{ p: 3, mt:3}}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default ProfileTabPanel