import React from "react";

import {
  Box,
  Grid,
  Typography,
  CardMedia,
  Card,
  Container,
  Hidden,
  CssBaseline,
  IconButton,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import SearchInput from "../../components/search-input/search-input.component";

const HomePage = () => {
  return (
    <Grid className="" container>
      <CssBaseline />
      <Grid className="h-screen" item xs={12} md={6}>
        <Container maxWidth="xl">
          <Card className="shadow-none flex justify-between items-center px-4 pt-8 sm:pt-16 lg:pt-12">
            <CardMedia
              component="img"
              height="40"
              image="/assets/logo.png"
              alt="loving-sitter logo"
              className="object-contain w-max"
            />
            <IconButton className="lg:hidden">
              <Menu className="h-8 w-8" />
            </IconButton>
          </Card>
        </Container>
        <Box className="mt-10 sm:mt-40 lg:mt-10 p-4 space-y-14 max-w-md mx-auto">
          <Typography
            className="text-center font-semibold text-4xl sm:text-5xl"
            variant="h3"
          >
            Find the care your dog deserves
          </Typography>
          <SearchInput />
        </Box>
      </Grid>
      <Hidden mdDown>
        <Grid className="relative" item md={6}>
          <Box className="absolute right-10 top-10 space-x-6">
            <Button variant="text" className="text-white hover:underline">Become a sitter</Button>
            <Button variant="outlined" className="px-8 text-white">Login</Button>
            <Button variant="contained" className="px-8">Signup</Button>
          </Box>

          <CardMedia
            component="img"
            image="/assets/homepage-dog.png"
            alt="Picture of a dog"
            className="h-screen"
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default HomePage;
