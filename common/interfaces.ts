
export interface IUser {
  name: string
  email: string
  password?: string
  id?: string
}
// export interface IFormValues {
//   name: string;
//   phone: string;
//   email: string;
//   text: string;
// }
export interface IPosterList {
  poster_path: string
}
export interface ILoginResponse {
  name: string
  password: string
}
export interface ILoginRequest {
  name: string
  password: string
}

export interface ISignInData extends ILoginResponse {
  email: string
}
export interface ILoginResponseData {
  token: string
}
export interface IUserMessage {
  name: string
  phone: string
  email: string
  text: string
}
// export interface IUserRequestState {
//   userRequest : {name: "",
//   phone: "",
//   email: "",
//   text: "",},
//   currentRequestId:string| null,
//   isLoading: boolean,
//   error:ErrorConstructor| null,

// }
export interface IMailMassage {
  to: string
  from: string
  subject: string
  html: string
}
export interface INewPropertiesUser {
  name?: string
  phone?: string
  email?: string
  token?: string | null
}
export interface INewPropertiesPost {
  photo?: string
  text?: string
  topic?: string
  headline?: string
}
export interface INewPropertiesRequest {
  name?: string
  phone?: string
  email?: string
  text?: string
}
export interface INewPropertiesFeedback {
  // date?: string;
  description?: string
  name?: string
}
export interface INewPropertiesDiploma {
  photo?: string 
  name?: string 
  text?: string
}
export interface IPost {
  photo?: string
  date?: string
  description?: string
  topic?: string
  headline?: string
}
 
export type IPage= {page:number}
export interface IDiploma {
  photo?: string 
  name?: string 
  text?: string
}
export interface IFeedback {
  date?: string
  description?: string
  name?: string
}
export type TElementId = { id: string };
export interface ICredentials {
  username: string
  password: string
}
export interface IListProps {
  list:[IFeedback]
}
export interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}
export interface IState {
isLoading: boolean;
currentRequestId:string|null;
error:null|{
  name?: string
  message?: string
  stack?: string
  code?: string
};
}
export interface IUserMessageState extends IState {userData: {}|IUserMessage}

export interface IFeedbackState extends IState {feedbackList:[] | [IFeedback]}

export interface IDiplomaState extends IState {diplomaList:[] | [IDiploma]}

export interface IPostState extends IState {postList:[] | [IPost]}

export interface IUserResServer{
  data:string
}