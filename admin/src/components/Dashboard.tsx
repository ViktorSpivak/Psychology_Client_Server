import React, { FC } from "react";
// import { useGetList } from "react-admin";
import { Card, CardContent, CardHeader } from "@material-ui/core";
// import { useDataProvider } from "react-admin";
// import { useQuery, Loading } from "react-admin";
// import { List, TextField } from "react-admin";

interface State {
  users?: number;
  posts?: number;
  requests?: number;
}
export const Dashboard: FC = () => {
  // const [state, setState] = useState<State>({});
  // const dataProvider = useDataProvider();
  // const { data, loading, error } = useGetList("posts", {});
  // console.log(dataProvider);

  // const dataProvider = useDataProvider();
  // const [users, setUser] = useState();
  // const [posts, setPosts] = useState();
  // const [feedbacks, setFeedbacks] = useState();
  // const [diplomas, setDiplomas] = useState();
  // const [requests, setRequests] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  // useEffect(() => {
  //   dataProvider
  //     .getList("users", {
  //       pagination: { page: 1, perPage: 5 },
  //       sort: { field: {}, order: {} },
  //       filter: {},
  //     })
  //     .then((data: any) => {
  //       setUser(data.data);
  //       setLoading(false);
  //     });
  //   dataProvider
  //     .getList("feedbacks", {
  //       pagination: { page: 1, perPage: 5 },
  //       sort: { field: {}, order: {} },
  //       filter: {},
  //     })
  //     .then((data: any) => {
  //       setFeedbacks(data.data);
  //       setLoading(false);
  //     })
  //     .catch((error: any) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(users);
  // console.log(feedbacks);
  return (
    <Card>
      <CardHeader title="Welcome to the administration" />
      <CardContent>Добро пожаловать...</CardContent>
      {/* <p>{user}</p> */}
    </Card>
  );
};
