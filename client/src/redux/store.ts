import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import userReducer from "./user/user.slice"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
