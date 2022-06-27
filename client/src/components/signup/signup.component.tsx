import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Paper,
  Box,
  TextField,
  InputLabel,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Signup = () => {
  const initialValues: {
    email: string;
    fullName: string;
    password: string;
    confirmpassword: string;
  } = {
    email: "",
    fullName: "",
    password: "",
    confirmpassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required("Name is required"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(6, "Password is too short"),
        confirmpassword: Yup.string().when("password", {
          is: (val: string) => (val && val.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
          ),
        }),
      })}
      onSubmit={(
        values: { fullName: string; email: string; password: string },
        { setSubmitting, resetForm }
      ) => {
        console.log(values);
        const { fullName, email, password } = values
       
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
        <Paper className="md:w-1/2 mx-auto p-4 mb-10">
          <Typography align="center" variant="h4" mt={5}>
            Signup
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
              <InputLabel htmlFor="fullName">Name</InputLabel>
              <TextField
                id="fullName"
                name="fullName"
                autoComplete="current-name"
                autoFocus
                placeholder="eg.John Doe"
                size="small"
                fullWidth
                helperText={touched.fullName ? errors.fullName : ""}
                error={touched.fullName && Boolean(errors.fullName)}
                value={values.fullName}
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
            <Box className="w-full">
              <InputLabel htmlFor="confirmpassword">
                Confirm password
              </InputLabel>
              <TextField
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="*******"
                size="small"
                fullWidth
                helperText={
                  //@ts-ignore
                  touched.confirmpassword ? errors.confirmpassword : ""
                }
                error={
                  //@ts-ignore
                  touched.confirmpassword && Boolean(errors.confirmpassword)
                }
                //@ts-ignore
                value={values.confirmpassword}
                onChange={handleChange}
              />
            </Box>
            <Box className="w-full flex flex-col items-center">
              <Button
                className="lg:w-1/2 whitespace-nowrap"
                disableElevation
                type="submit"
                variant="contained"
                startIcon={<MdOutlineDoubleArrow />}
              >
                Continue with email
              </Button>
              <Box className="flex items-center space-x-2 w-1/2">
                <Divider className="flex-1" />
                <Typography>or</Typography>
                <Divider className="flex-1" />
              </Box>
              <Button
                className="lg:w-1/2 whitespace-nowrap"
                variant="outlined"
                type="button"
                startIcon={<FcGoogle />}
              >
                Continue with Google
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Formik>
  );
};

export default Signup;
