import { WritableDraft } from "immer/dist/internal";
import { UserSliceState } from "../../redux/user/user.slice";
export default function setLogoutTime(state: WritableDraft<UserSliceState>) {
    const remainingMilliseconds = 60 * 1000
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
    state.expiryDate = expiryDate.toISOString()
    state.remainingTime = remainingMilliseconds
}