import React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
// import i18nProvider from "./i18n/i18nProvider";
// import ukrainianMessages from "ra-language-ukrainian";
import { UsersList } from "./components/UsersList";
import { PostsList } from "./components/posts/PostsList";
import { RequestsList } from "./components/RequestsList";
import { FeedbackList } from "./components/feedbacks/FeedbackList";
import { DiplomaList } from "./components/diplomas/DiplomaList";
import { authProvider } from "./providers/authProvider";
import simpleRestProvider from "ra-data-simple-rest";
import UsersIcon from "@material-ui/icons/Group";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PostAddIcon from "@material-ui/icons/PostAdd";
import MessagesIcon from "@material-ui/icons/Message";
import { PostEdit } from "./components/posts/PostEdit";
import { Dashboard } from "./components/Dashboard";
import PostCreate from "./components/posts/PostCreate";

import FeedbackCreate from "./components/feedbacks/FeedbackCreate";
import { FeedbackEdit } from "./components/feedbacks/FeedbackEdit";
import DiplomaCreate from "./components/diplomas/DiplomaCreate";
import DiplomaEdit from "./components/diplomas/DiplomaEdit";

const httpClient = (url: any, options: { headers?: Headers | any } = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options!.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
// const dataProvider = simpleRestProvider("http://localhost:3080", httpClient);
const dataProvider = simpleRestProvider(
  "http://192.168.99.100:3080",
  httpClient
);

export const App = () => {
  return (
    <div>
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
        // i18nProvider={i18nProvider}
      >
        <Resource name="users" list={UsersList} icon={UsersIcon} />
        <Resource
          name="post"
          list={PostsList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostAddIcon}
        />
        <Resource
          name="message"
          list={RequestsList}
          // edit={PostEdit}
          // create={PostCreate}
          icon={MessagesIcon}
        />
        <Resource
          name="feedback"
          list={FeedbackList}
          create={FeedbackCreate}
          edit={FeedbackEdit}
          icon={FeedbackIcon}
        />
        <Resource
          name="diploma"
          list={DiplomaList}
          edit={DiplomaEdit}
          create={DiplomaCreate}
          icon={MessagesIcon}
        />
      </Admin>
    </div>
  );
};
