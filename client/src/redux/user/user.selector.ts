import { createSelector } from "reselect";
import { User } from "../../interface/user";


const selectUser = (state: {user: {isLoading: boolean, user: User}}) => state.user

export const selectCurrentUser = createSelector([selectUser], userData => userData.user)

export const selectIsLoading = createSelector([selectUser], userData => userData.isLoading)