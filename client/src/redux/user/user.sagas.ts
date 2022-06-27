import { all, call, put, takeLatest, fork} from "redux-saga/effects";
import { ResponseGenerator } from "../../interface/auth-api-data";
import registerUser from "../../helpers/api-calls/register-user";
import { startLoading, stopLoading } from "./user.slice";
import userActionTypes from "./user.types";


function* signUp(data: {
  type: string;
  payload: { fullName: string; email: string; password: string };
}) {
  const { fullName, email, password } = data.payload;
  console.log(fullName, email, password)
  // try {
  //   yield put(startLoading())
  //   const response: ResponseGenerator = yield call(registerUser, fullName, email, password)
  //   console.log(response.data)
  //   yield put(stopLoading())
  // } catch (error) {
  //   yield put(stopLoading())
  // }
}

function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

export default function* userSaga() {
    yield all([fork(onSignUpStart)])
}