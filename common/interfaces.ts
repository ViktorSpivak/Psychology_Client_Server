
export interface IUser {
  name: string
  email: string
  password?: string
  id?: string
}

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

export interface ValidationErrors {
  errorMessage: string
  field_errors: Record<string, string>
}

export interface IError {name?: string
  message?: string
  stack?: string
  code?: string
}

export interface IResponse {data:string
}
export interface IState {
isLoading: boolean;
currentRequestId:string|null;
response:IResponse|null;
error:null|IError;
}

export interface IUserMessageState extends IState {userData: null |IUserMessage}

export interface IFeedbackState extends IState {feedbackList:null | [IFeedback]}

export interface IDiplomaState extends IState {diplomaList:null | [IDiploma]}

export interface IPostState extends IState {postList:null | [IPost]}
