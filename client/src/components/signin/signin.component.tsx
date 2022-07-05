import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Formik } from "formik"
import * as Yup from "yup"

import { selectCurrentUser } from "../../redux/user/user.slice"
import { useLoginMutation } from "../../redux/api"

import {
  Paper,
  Box,
  TextField,
  InputLabel,
  Button,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineDoubleArrow } from "react-icons/md"
import { User } from "../../interface/user"

const Signin = () => {
  const navigate = useNavigate()
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation()

  const user: User = useSelector(selectCurrentUser)

  const googleLogin = () => {
    window.open("http://localhost:8000/api/v1/user/auth/google-login", "_self")
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(6, "Password is too short"),
      })}
      onSubmit={async (
        values: { email: string; password: string },
        { setSubmitting, resetForm }
      ) => {
        try {
          await login(values).unwrap()
          navigate("/dogsitter-listings")
        } catch (error) {
          console.log(error)
        }
        setSubmitting(false)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Paper className="md:w-1/2 mx-auto p-4">
          <Typography align="center" variant="h4" mt={5}>
            Signin
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            className="flex flex-col items-center w-full space-y-6 p-4"
          >
            <Box className="w-full">
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <TextField
                id="email"
                name="email"
                type="email"
                autoComplete="current-email"
                placeholder="example@email.com"
                size="small"
                fullWidth
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                onChange={handleChange}
              />
            </Box>
            <Box className="w-full">
              <InputLabel htmlFor="password">Password</InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="*******"
                size="small"
                fullWidth
                helperText={touched.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
                value={values.password}
                onChange={handleChange}
              />
            </Box>
            {isLoading ? (
              <Button
                className="lg:w-1/2 whitespace-nowrap"
                disableElevation
                variant="contained"
              >
                <CircularProgress className="h-5 w-5 text-white" />
              </Button>
            ) : (
              <Button
                className="lg:w-1/2 whitespace-nowrap"
                disableElevation
                type="submit"
                variant="contained"
                startIcon={<MdOutlineDoubleArrow />}
              >
                Continue with email
              </Button>
            )}

            <Box className="flex items-center space-x-2 w-1/2">
              <Divider className="flex-1" />
              <Typography>or</Typography>
              <Divider className="flex-1" />
            </Box>
            <Button
              onClick={googleLogin}
              className="lg:w-1/2 whitespace-nowrap"
              variant="outlined"
              type="button"
              startIcon={<FcGoogle />}
            >
              Continue with Google
            </Button>
          </Box>
        </Paper>
      )}
    </Formik>
  )
}

export default Signin
