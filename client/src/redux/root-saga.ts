import { all, fork } from "redux-saga/effects";
import userSaga from "./user/user.sagas";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
