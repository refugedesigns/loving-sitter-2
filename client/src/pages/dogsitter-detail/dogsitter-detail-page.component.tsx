import React from 'react'

import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { selectDogsitterById } from "../../redux/dogsitter/dogsitter.slice"
import { Dogsitter as DogsitterInterface } from "../../interface/user"

import { Container } from '@mui/material'
import DogsitterDetailCard from '../../components/dogsitter-detail/dogsitter-detail-card.component'
import withLayout from "../../components/hoc/layout-wrapper.component"
import DogsitterBookingCard from '../../components/dogsitter-detail/dogsitter-booking-card.component'


const DogSitterDetailPage = () => {
  const { dogsitterId } = useParams()
  const { fullName, about, city, id, profilePhoto, availabilityDays, price } =
    useSelector((state: RootState) =>
      selectDogsitterById(state, dogsitterId as string)
    ) as DogsitterInterface
  return (
    <Container className='pt-28 relative xl:flex'>
        <DogsitterDetailCard fullName={fullName} about={about} city={city} profilePhoto={profilePhoto} availabilityDays={availabilityDays} id={id} />
        <DogsitterBookingCard price={price as number} id={id} />
    </Container>
  )
}

export default withLayout(DogSitterDetailPage)