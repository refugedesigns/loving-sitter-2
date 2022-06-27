import React from 'react'
import { Container } from '@mui/material'
import Signup from '../../components/signup/signup.component'
import withLayout from "../../components/hoc/layout-wrapper.component"

const SignupPage = () => {
  return (
    <Container className='pt-28'>
      <Signup />
    </Container>
  )
}

export default withLayout(SignupPage)
