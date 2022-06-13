import React from 'react'

import { Container, Card, Box, Typography } from '@mui/material'
import withLayout from "../../components/hoc/layout-wrapper.component"
import NextBookingCard from '../../components/bookings/next-booking-card.component'
import BookingsCard from '../../components/bookings/bookings-card.component'

const BookingsPage = () => {
  return (
    <Container className="pt-16 md:pt-0 lg:pt-24 mb-4">
      <Box>
        <NextBookingCard />
        <Card className="max-w-lg rounded-lg p-4 py-10 overflow-y-auto shadow-xl h-[380px] md:h-[600px] lg:h-[400px] xl:h-[500px]">
          <Box>
            <Typography className="uppercase tracking-widest text-xs font-bold">
              Current Bookings:
            </Typography>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <BookingsCard key={index} />
              ))}
          </Box>
          <Box className='mt-6'>
            <Typography className="uppercase tracking-widest text-xs font-bold">
              Past Bookings:
            </Typography>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <BookingsCard key={index} />
              ))}
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default withLayout(BookingsPage)