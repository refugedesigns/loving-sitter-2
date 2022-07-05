import React from "react"

import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../redux/user/user.slice"
import { Menu, MenuItem, IconButton, Box, Tab } from "@mui/material"

import { Login, HowToReg, ChairAlt } from "@mui/icons-material"
import LinkTab from "./link-tab.component"

interface Props {
  mobileMoreAnchorEl: HTMLElement | null
  isMobileMenuOpen: boolean
  handleMobileMenuClose: () => void
}

const MobileHeaderMenu: React.FC<Props> = React.memo(
  ({ mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose }) => {
    const user = useSelector(selectCurrentUser)
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id="mobile-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {!user._id ? (
          <Box>
            <MenuItem>
              <IconButton>
                <Login />
              </IconButton>
              <p>Login</p>
            </MenuItem>
            <MenuItem>
              <IconButton>
                <HowToReg />
              </IconButton>
              <p>Signup</p>
            </MenuItem>
            {!user.isDogsitter && (
              <MenuItem>
                <IconButton>
                  <ChairAlt />
                </IconButton>
                <p>Become a sitter</p>
              </MenuItem>
            )}
          </Box>
        ) : (
          <Box>
            <MenuItem>
              <LinkTab label="Requests" to="/requests" value="/requets" />
            </MenuItem>
            <MenuItem>
              <LinkTab label="Bookings" to="/bookings" value="/bookings" />
            </MenuItem>
            <MenuItem>
              <LinkTab label="Messages" to="/messages" value="/messages" />
            </MenuItem>
            <MenuItem>
              <LinkTab label="Account" to="/account" value="/account" />
            </MenuItem>
            <MenuItem>
              <Tab label="Logout" />
            </MenuItem>
          </Box>
        )}
      </Menu>
    )
  }
)

export default MobileHeaderMenu
