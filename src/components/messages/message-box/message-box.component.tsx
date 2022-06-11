import React from 'react'

import { Paper, Box, Divider } from '@mui/material'
import MessageBoxHeader from './message-box-header.component'
import SenderMessageCard from '../message-cards/sender-message-card/sender-message-card.component'
import RecipientMessageCard from '../message-cards/recipient-message-card/recipient-message-card.component'
import InputBox from './input-box.component'

const MessageBox = () => {
  return (
    <Box className="flex-1 flex flex-col bg-white shadow-md h-full">
      <MessageBoxHeader />
      <Box className="flex-1 py-10 overflow-y-auto flex flex-col space-y-4">
        <SenderMessageCard message="Hey Marry! I'm your dogsitter for next week. I can't wait to meet your companion!" />
        <RecipientMessageCard message="Hey Kenneth! So glad to hear! Looking forward to it. When can you come pick up Spike?" />
        <SenderMessageCard message="I'll send you details" />
      </Box>
      <Divider />
      <InputBox />
    </Box>
  );
}

export default MessageBox