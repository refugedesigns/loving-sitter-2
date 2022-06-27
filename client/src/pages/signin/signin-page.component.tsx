import React from 'react'
import { Container } from '@mui/material'
import Signin from '../../components/signin/signin.component'
import withLayout from "../../components/hoc/layout-wrapper.component"

const SigninPage = () => {
  return (
    <Container className='pt-28'>
      <Signin />
    </Container>
  )
}

export default withLayout(SigninPage)
