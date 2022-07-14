import {
  createSlice,
  createSelector,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit"
import { api } from "../api"
import { User } from "../../interface/user"
import { RootState } from "../store"

const dogsittersAdapter = createEntityAdapter()

const initialState = dogsittersAdapter.getInitialState({
  status: "idle",
  error: "",
})

const dogsitters = createSlice({
  name: "dogsitters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(api.endpoints.fetchAllDogsitters.matchPending, (state) => {
        state.status = "pending"
      })
      .addMatcher(
        api.endpoints.fetchAllDogsitters.matchRejected,
        (state, action) => {
          state.error = action.payload?.status as string
          state.status = "failed"
          dogsittersAdapter.updateMany(state, [])
        }
      )
      .addMatcher(
        api.endpoints.fetchAllDogsitters.matchFulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.status = "success"
          state.error=""
          dogsittersAdapter.upsertMany(state, action.payload)
        }
      )
  },
})

export const {
  selectAll: selectAllDogsiters,
  selectById: selectDogsitterById,
  selectIds: selectDogsitterIds,
} = dogsittersAdapter.getSelectors<RootState>((state) => state.dogsitters)

export const getFetchDogsitterStatus = (state: RootState) => state.dogsitters.status
export const getFetchDogsitterError = (state: RootState) => state.dogsitters.error

export default dogsitters.reducer
