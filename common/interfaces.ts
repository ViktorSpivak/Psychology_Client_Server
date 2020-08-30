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
export interface ILoginData {
  name: string;
  password: string;
}

export interface ISignInData extends ILoginData {
  email: string;
}
export interface ILoginResponseData {
  token: string;
}
