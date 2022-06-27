import { createSlice, createSelector } from "@reduxjs/toolkit";
import { User } from "../../interface/user";
import { api } from "../api";
import { RootState } from "../store";

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
};

const userSlice = createSlice({
  name: "auth",
  initialState: {
    user
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.fetchUser.matchFulfilled, (state, {payload}) => {
      state.user = payload.user
    })
  }
})

const selectUser = (state: RootState) => state.auth.user

export const selectCurrentUser = createSelector([selectUser], userData => userData)

export default userSlice.reducer 




