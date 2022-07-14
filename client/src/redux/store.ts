import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "./storage"
import logger from "redux-logger"
import { api } from "./api";
import userReducer from "./user/user.slice"
import dogsitterReducer from "./dogsitter/dogsitter.slice"

const middlewares = [api.middleware]

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: userReducer,
  dogsitters: dogsitterReducer
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
