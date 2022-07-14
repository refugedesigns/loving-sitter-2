import React, { useEffect } from "react"

import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import {
  selectCurrentUser,
  selectExpiry,
  selectRemainingTime,
  logout,
} from "./redux/user/user.slice"
import { User } from "./interface/user"

import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import theme from "./theme/theme"
import ListingsPage from "./pages/listings/listings-page"
import HomePage from "./pages/home/home-page.component"
import SignupPage from "./pages/signup/signup-page.component"
import SigninPage from "./pages/signin/signin-page.component"
import MessagesPage from "./pages/messages/messages-page.component"
import AccountPage from "./pages/account/account-page.component"
import DogSitterDetailPage from "./pages/dogsitter-detail/dogsitter-detail-page.component"
import BookingsPage from "./pages/bookings/bookings.component"
import RequestsPage from "./pages/requests/requests.component"
import PrivateRoute, {
  ProtectedRouteProps,
} from "./components/private-route/private-route.component"
function App() {
  const user: User = useSelector(selectCurrentUser)
  const adjexpiryDate = useSelector(selectExpiry)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log(user)

  useEffect(() => {
    console.log(new Date(adjexpiryDate))
    if (new Date(adjexpiryDate) <= new Date()) {
      dispatch(logout())
    }

    const remainingMilliseconds = new Date(adjexpiryDate).getTime() - new Date().getTime()
    setTimeout(() => {
      dispatch(logout())
      navigate("/dogsitter-listings")
    }, remainingMilliseconds)
  }, [adjexpiryDate, dispatch])

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: !!user._id,
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/dogsitter-listings" element={<ListingsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            user._id ? <Navigate to="/dogsitter-listings" /> : <SignupPage />
          }
        />
        <Route
          path="/login"
          element={
            user._id ? <Navigate to="/dogsitter-listings" /> : <SigninPage />
          }
        />
        <Route
          path="/accounts"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<AccountPage />}
            />
          }
        />
        <Route
          path="/messages"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<MessagesPage />}
            />
          }
        />
        <Route
          path="/requests"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<RequestsPage />}
            />
          }
        />
        <Route
          path="/bookings"
          element={
            <PrivateRoute
              {...defaultProtectedRouteProps}
              outlet={<BookingsPage />}
            />
          }
        />
        <Route
          path="/dogsitter/:dogsitterId"
          element={<DogSitterDetailPage />}
        />
        <Route path="*" element={<h3>This page does not exist</h3>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
