import Axios from "axios";
import { ILoginRequest, ISignInData } from "../../../common/interfaces";

Axios.defaults.baseURL = "https://psychology-server.herokuapp.com";

export const loginRequest = async (values: ILoginRequest) =>
  await Axios({
    method: "post",
    url: "auth/login",
    data: values,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res);
      return res;
    })
    .catch((err) => console.log(err));

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

export const signupRequest = async (values: ISignInData) =>
  await Axios({
    method: "post",
    url: "auth/signup",
    data: values,
  })
    // .then((res) => JSON.parse(res.config.data))
    .then((res) => {
      console.log("Response from server:", res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
