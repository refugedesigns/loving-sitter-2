import React from "react";

import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import ListingsPage from "./pages/listings/listings-page";
import HomePage from "./pages/home/home-page.component";
import SignupPage from "./pages/signup/signup-page.component";
import SigninPage from "./pages/signin/signin-page.component";
import MessagesPage from "./pages/messages/messages-page.component";
import AccountPage from "./pages/account/account-page.component";
import DogSitterDetailPage from "./pages/dogsitter-detail/dogsitter-detail-page.component";
import BookingsPage from "./pages/bookings/bookings.component"
import RequestsPage from "./pages/requests/requests.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/dogsitter-listings" element={<ListingsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/accounts" element={<AccountPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/requests" element={<RequestsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/dogsitter/:dogsitterId" element={<DogSitterDetailPage />} />
        <Route path="*" element={<h3>This page does not exist</h3>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
