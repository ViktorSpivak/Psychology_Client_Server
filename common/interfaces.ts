export interface IUser {
  name: string;
  email: string;
}
export interface IFormValues {
  name: string;
  phone: string;
  email: string;
  text: string;
}
export interface IPosterList {
  poster_path: string;
}
export interface ILoginResponse {
  name: string;
  password: string;
}
export interface ILoginRequest {
  name: string;
  password: string;
}

export interface ISignInData extends ILoginResponse {
  email: string;
}
export interface ILoginResponseData {
  token: string;
}
export interface IUserRequest {
  name: string;
  phone: string;
  email: string;
  text: string;
}
export interface IMailMassage {
  to: string;
  from: string;
  subject: string;
  html: string;
}
