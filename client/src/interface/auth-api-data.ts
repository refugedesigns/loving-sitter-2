import { User } from "./user";

export interface AuthApiDataSuccess {
  user: User;
}

export interface AuthApiData {
  error?: { message: string };
  success?: AuthApiDataSuccess;
}

export interface ResponseGenerator {
  config?:any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}