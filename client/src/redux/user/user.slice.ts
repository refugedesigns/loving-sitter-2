import { createSlice, createSelector } from "@reduxjs/toolkit"
import { User } from "../../interface/user"
import { api } from "../api"
import { RootState } from "../store"
import setLogoutTime from "../../helpers/utils/set-autologout"

export interface UserSliceState {
  user: User
  expiryDate: string | Date 
  remainingTime: number | null
}

const user: User = {
  _id: "",
  fullName: "",
  email: "",
  isDogsitter: null,
  city: "",
  address: "",
  phoneNumber: "",
  profilePhoto: "",
  about: "",
  payments: [],
  isThirdParty: null,
  googleId: "",
  isAvailable: null,
  availabilityDays: [],
  price: null,
  imageGallery: [],
}

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user,
    expiryDate: "",
    remainingTime: null,
  } as UserSliceState,
  reducers: {
    logout: (state) => {
      state.user._id = ""
      state.user.fullName = ""
      state.user.email = ""
      state.user.isDogsitter = null
      state.user.city = ""
      state.user.address = ""
      state.user.profilePhoto = ""
      state.user.phoneNumber = ""
      state.user.about = ""
      state.user.isAvailable = null
      state.user.isThirdParty = null
      state.user.price = 0
      state.user.googleId = ""
      state.user.payments = []
      state.user.availabilityDays = []
      state.expiryDate = ""
      state.remainingTime = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        api.endpoints.fetchUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user
        }
      )
      .addMatcher(api.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.user = payload.user
        setLogoutTime(state)
      })
  },
})

const selectUserData = (state: RootState) => state.auth

export const { logout } = userSlice.actions

export const selectCurrentUser = createSelector(
  [selectUserData],
  (userData) => userData.user
)
export const selectExpiry = createSelector(
  [selectUserData],
  (userData) => userData.expiryDate
)
export const selectRemainingTime = createSelector(
  [selectUserData],
  (userData) => userData.remainingTime
)

export default userSlice.reducer
