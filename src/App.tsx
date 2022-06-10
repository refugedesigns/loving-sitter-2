import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import ListingsPage from "./pages/listings/listings-page";
import HomePage from "./pages/home/home-page.component";
import SignupPage from "./pages/signup/signup-page.component";
import SigninPage from "./pages/signin/signin-page.component";
import MessagesPage from "./pages/messages/messages-page.component";
import ProfilePage from "./pages/profile/profile-page.component";
import DogSitterDetailPage from "./pages/dogsitter-detail/dogsitter-detail-page.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProfilePage />
    </ThemeProvider>
  );
}

export default App;
