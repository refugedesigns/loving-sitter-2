import React from 'react'

import { Container } from '@mui/material'
import DogsitterDetailCard from '../../components/dogsitter-detail/dogsitter-detail-card.component'
import withLayout from "../../components/hoc/layout-wrapper.component"
import DogsitterBookingCard from '../../components/dogsitter-detail/dogsitter-booking-card.component'

const DogSitterDetailPage = () => {
  return (
    <Container className='pt-28 relative xl:flex'>
        <DogsitterDetailCard />
        <DogsitterBookingCard />
    </Container>
  )
}

export default withLayout(DogSitterDetailPage)