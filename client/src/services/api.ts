import Axios from "axios";
import {IDiploma, IFeedback, IPage, IPost, IUserMessage, IUserResServer} from "../../../common/interfaces";

// Axios.defaults.baseURL = "https://psychology-server.herokuapp.com";
// Axios.defaults.baseURL = "http://localhost:3080";
Axios.defaults.baseURL = "http://192.168.99.100:3080";
// Axios.interceptors.request.use(error=>Promise.reject(error))

export const postRequest = async (page: IPage):Promise<IPost[]|Number> =>
  await Axios({
    method: "get",
    url: "post",
    data: page,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res.data);
      return res.data;
    })
    .catch((error) =>{if (error.response) {
      // return error.status
      return error.request.status
    } else if (error.request) {
      return error.request.status
    } else {console.log('Error:', error.message)}
  });

export const feedbackRequest = async (page: IPage):Promise<IFeedback[]|Number> =>
  await Axios({
    method: "get",
    url: "feedback",
    data: page,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res.data);
      return res.data;
    })
    .catch((error)=> {console.log(error);
    if (error.response) {
    // return error.status
    return error.request.status
    } else if (error.request) {
    return error.request.status
    } else {console.log('Error:', error.message)}
    });
    
export const diplomaRequest = async (page: IPage):Promise<IDiploma[]|Number> =>
  await Axios({
    method: "get",
    url: "diploma",
    data: page,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res.data);
      return res.data;
    })
    .catch((error)=> {
      if (error.response) {
        return error.status
      } else if (error.request) {
        return error.request.status
      } else {
        console.log('Error:', error.message)
      }
    });
export const userMessageRequest = async (page: IUserMessage):Promise<IUserResServer|Number> =>
  await Axios({
    method: "post",
    url: "message",
    data: page,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res);
      return res.data;
    })
    .catch((error)=> {
      if (error.response) {
        return error.status
      } else if (error.request) {
        return error.request.status
      } else {
        console.log('Error:', error.message)
      }
    });
// export const loginRequest = async (values: ILoginRequest) =>
//   await Axios({
//     method: "post",
//     url: "auth/login",
//     data: values,
//   })
//     // .then((res) => JSON.parse(res.config.data))
//     .then((res) => {
//       console.log("Response from server:", res);
//       return res;
//     })
//     .catch((err) => console.log(err));

// export const logoutRequest = async () =>
//   await Axios({
//     method: "post",
//     url: "/logout",
//   })
//     .then((res) => {
//       console.log("Response from server:", res.data);
//       return res;
//     })
//     .catch((err) => console.log(err));

// export const signupRequest = async (values: ISignInData) =>
//   await Axios({
//     method: "post",
//     url: "auth/signup",
//     data: values,
//   })
//     // .then((res) => JSON.parse(res.config.data))
//     .then((res) => {
//       console.log("Response from server:", res.data);
//       return res.data;
//     })
//     .catch((err) => console.log(err));


