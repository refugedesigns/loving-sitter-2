import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../redux/user/user.slice"
import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Card,
  Container,
  Hidden,
  IconButton,
  Button,
} from "@mui/material"
import { Menu } from "@mui/icons-material"

import SearchInput from "../../components/search-input/search-input.component"

const HomePage = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <Grid className="" container>
      <Grid className="min-h-screen" item xs={12} md={6}>
        <Container maxWidth="xl">
          <Card className="shadow-none flex justify-between items-center px-4 pt-8 sm:pt-16 lg:pt-12">
            <CardMedia
              component="img"
              height="40"
              image="/assets/logo.png"
              alt="loving-sitter logo"
              className="object-contain w-max hover:cursor-pointer"
            />
            <IconButton className="lg:hidden">
              <Menu className="h-8 w-8" />
            </IconButton>
          </Card>
          <Box className="mt-10 sm:mt-40 lg:mt-10 p-4 space-y-14 max-w-md mx-auto">
            <Typography
              className="text-center font-semibold text-4xl sm:text-5xl"
              variant="h3"
            >
              Find the care your dog deserves
            </Typography>
            <SearchInput />
          </Box>
        </Container>
      </Grid>
      <Hidden mdDown>
        <Grid
          className="relative bg-home-page bg-no-repeat bg-cover min-h-screen"
          item
          md={6}
        >
          <Box className="absolute flex right-10 top-10 space-x-4">
            <Button variant="text" className="text-white hover:underline">
              Become a sitter
            </Button>
            {!user._id && (
              <Box className="space-x-6">
                <Button variant="outlined" className="px-8 text-white">
                  <Link className="text-inherit no-underline" to="/login">
                    Login
                  </Link>
                </Button>
                <Button variant="contained" className="px-8">
                  <Link className="text-inherit no-underline" to="/signup">
                    Signup
                  </Link>
                </Button>
              </Box>
            )}
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default HomePage
