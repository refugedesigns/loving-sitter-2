import React, { useCallback, useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../redux/user/user.slice"
import {
  AppBar,
  Container,
  Box,
  Button,
  Toolbar,
  CardMedia,
  IconButton,
  Hidden,
  Tabs,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  ClickAwayListener,
} from "@mui/material"
import { MoreVert } from "@mui/icons-material"

import MobileMenu from "../ui/mobile-header-menu.component"
import LinkTab from "../ui/link-tab.component"
import RegisterDositterModal from "../modals/register-dogsitter/register-dositter.component"
import Notifications from "../notifications/notifications.component"

const Header = React.memo(() => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const user = useSelector(selectCurrentUser)
  const [tabValue, setTabValue] = useState(0)
  const [openRegisterDogsitterModal, setOpenRegisterDogsitterModal] =
    useState<boolean>(false)
  const [openNotification, setOpenNotification] = useState<boolean>(false)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const location = useLocation()

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenRegisterDogsitterModal = () => {
    setOpenRegisterDogsitterModal(true)
  }

  const handleCloseRegisterDogsitterModal = () => {
    setOpenRegisterDogsitterModal(false)
  }

  const handleOpenNotifications = () => {
    setOpenNotification(true)
  }

  const handleClickAwayNotifications = () => {
    setOpenNotification(false)
  }

  return (
    <Box className="flex-1">
      <AppBar className="bg-white" position="fixed">
        <Container maxWidth="xl">
          <RegisterDositterModal
            openRegisterDogsitterModal={openRegisterDogsitterModal}
            handleCloseRegisterDogsitterModal={
              handleCloseRegisterDogsitterModal
            }
          />
          <Toolbar className="flex justify-between" disableGutters>
            <Link to="/">
              <IconButton className="rounded-none">
                <CardMedia
                  component="img"
                  height="40"
                  image="/assets/logo.png"
                  alt="loving-sitter logo"
                  className="object-contain w-max"
                />
              </IconButton>
            </Link>
            <Hidden mdUp>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls=""
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreVert color="primary" />
              </IconButton>
              <MobileMenu
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
              />
            </Hidden>
            <Hidden mdDown>
              {!user._id ? (
                <Box className="space-x-3">
                  <Button>Become a sitter</Button>
                  <Button className="px-8" variant="outlined">
                    <Link className="text-inherit no-underline" to="/login">Login</Link>
                  </Button>
                  <Button className="px-8" variant="contained" disableElevation>
                    <Link className="text-inherit no-underline" to="/signup">Signup</Link> 
                  </Button>
                </Box>
              ) : (
                <Box className="flex items-center relative">
                  {!user.isDogsitter && (
                    <Button
                      onClick={handleOpenRegisterDogsitterModal}
                      className="text-gray-500 focus:text-[#f14140]"
                    >
                      Become a sitter
                    </Button>
                  )}
                  <ClickAwayListener
                    mouseEvent="onMouseDown"
                    touchEvent="onTouchStart"
                    onClickAway={handleClickAwayNotifications}
                  >
                    <Box className="">
                      <Button
                        onClick={handleOpenNotifications}
                        className="text-gray-500 focus:text-[#f14140]"
                      >
                        Notification
                      </Button>
                      {openNotification && <Notifications />}
                    </Box>
                  </ClickAwayListener>
                  <Tabs
                    value={
                      (location.pathname === "/bookings" ||
                        location.pathname === "/requests" ||
                        location.pathname === "/messages") &&
                      location.pathname
                    }
                    onChange={handleChangeTab}
                    aria-label="logged in nav tabs"
                    className="mr-6"
                  >
                    {user.isDogsitter && (
                      <LinkTab
                        label="Requests"
                        to="/requests"
                        value="/requests"
                      />
                    )}
                    <LinkTab
                      label="Bookings"
                      to="/bookings"
                      value="/bookings"
                    />
                    <LinkTab
                      label="Messages"
                      to="/messages"
                      value="/messages"
                    />
                  </Tabs>
                  <Box>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu}>
                        <Avatar />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem>
                        <Box>Account</Box>
                      </MenuItem>
                      <MenuItem>
                        <Box>Logout</Box>
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>
              )}
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
})

export default Header
