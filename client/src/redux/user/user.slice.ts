import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../../interface/user";

const initialState: {isLoading: boolean, user: User} = {
  isLoading: false,
  user: {
    _id: "",
    fullName: "",
    email: "",
    isDogsitter: false,
    profilePhoto: "",
    imageGallery: [],
    payments: [],
    isAvailable: false,
    availabilityDays: [],
    price: 0,
    isThirdParty: false,
    googleId: null,
    about: "",
    city: "",
    address: "",
    phoneNumber: "",
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
        state.user._id = action.payload._id;
        state.user.fullName = action.payload.fullName;
        state.user.email = action.payload.email; 
        state.user.isDogsitter = action.payload.isDogsitter;
        state.user.isAvailable = action.payload.isAvailable;
        state.user.payments = action.payload.payments;
        state.user.profilePhoto = action.payload.profilePhoto;
        state.user.imageGallery = action.payload.imageGallery;
        state.user.price = action.payload.price;
        state.user.availabilityDays = action.payload.availabilityDays
        state.user.isThirdParty = action.payload.isThirdParty;
        state.user.googleId = action.payload.googleId;
        state.user.about = action.payload.about;
        state.user.address = action.payload.address;
        state.user.phoneNumber = action.payload.phoneNumber;
        state.user.city = action.payload.city;
    },
    startLoading: (state) => {
        state.isLoading = true
    }, 
    stopLoading: (state) => {
        state.isLoading = false
    }
  },
});

export const { addUser, startLoading, stopLoading } = userSlice.actions

export default userSlice.reducer