import { ICredentials } from "../../../common/interfaces";
// import * as bcrypt from "bcryptjs";
// const COUNT_FACTOR = 11;
export const authProvider = {
  login: async ({ username, password }: ICredentials) => {
    // password = await bcrypt.hash(password, COUNT_FACTOR);
    const request = new Request("http://192.168.99.100:3080/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("token")
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/no-access" }),
  getPermissions: () => Promise.reject("Unknown method"),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
};
