import { fetchUtils } from "react-admin";
const apiUrl = "http://localhost:3080/admin";
const httpClient = fetchUtils.fetchJson;
export default {
  getList: (resource: any, params: any) => {
    const url = `${apiUrl}/users`;
    return httpClient(url)
      .then((res: any) => {
        console.log(res);
        return res;
      })
      .then((res: any) => res.json.map((el: any) => ({ id: el._id, ...el })))
      .then((res: any) => ({
        data: res,
        total: 5,
      }));
  },
};
