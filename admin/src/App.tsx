import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
// import i18nProvider from "./i18n/i18nProvider";
// import ukrainianMessages from "ra-language-ukrainian";
import { UsersList } from "./components/UsersList";
import { PostsList } from "./components/PostsList";
import { RequestsList } from "./components/RequestsList";
import authProvider from "./providers/authProvider";
import simpleRestProvider from "ra-data-simple-rest";
import UsersIcon from "@material-ui/icons/Group";
import PostsIcon from "@material-ui/icons/Book";
import MessagesIcon from "@material-ui/icons/Message";
import PostEdit from "./components/PostEdit";
import { Dashboard } from "./components/Dashboard";
import PostCreate from "./components/PostCreate";
// import PostCreate from "./components/PostCreate";

const httpClient = (url: any, options: { headers?: Headers | any } = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options!.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider("http://localhost:3080", httpClient);

export const App = () => {
  return (
    <div>
      <Admin
      dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={authProvider}
        // i18nProvider={i18nProvider}
      >
        <Resource
          name="users"
          list={UsersList}
          // edit={PostEdit}
          // create={PostCreate}
          icon={UsersIcon}
        />
        <Resource
          name="posts"
          list={PostsList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostsIcon}
        />
        <Resource
          name="requests"
          list={RequestsList}
          // edit={PostEdit}
          // create={PostCreate}
          icon={MessagesIcon}
        />
      </Admin>
    </div>
  );
};
