export interface IUser {
  name: string;
  email: string;
  password?: string;
  id?: string;
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
export interface INewPropertiesUser {
  name?: string;
  phone?: string;
  email?: string;
  token?: string | null;
}
export interface INewPropertiesPost {
  photo?: string;
  text?: string;
  topic?: string;
  headline?: string;
}
export interface INewPropertiesRequest {
  name?: string;
  phone?: string;
  email?: string;
  text?: string;
}

export interface IPost {
  photo?: string;
  date?: string;
  description?: string;
  topic?: string;
  headline?: string;
}
export type TElementId = { id: string };
export interface Credentials {
  username: string;
  password: string;
}
