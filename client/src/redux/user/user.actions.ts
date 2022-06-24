import userActionTypes from "./user.types";

export const signUpStart = ({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
  password: string;
}) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: {fullName, email, password}
});
