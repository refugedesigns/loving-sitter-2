import axios, { AxiosResponse } from "axios"
import { AuthApiData } from "../../interface/auth-api-data";

const registerUser = async (
  fullName: string,
  email: string,
  password: string
): Promise<AxiosResponse<AuthApiData, any> | { error: {message:string }}> => {
  const user = {
    fullName,
    email,
    password,
  };

  return await axios.post("/api/v1/user/local-signup", user).catch(() => ({
    error: { message: "Unable to connect to server, please try again." },
  }));
};

export default registerUser