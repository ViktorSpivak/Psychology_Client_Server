import * as React from "react";
import { render } from "react-dom";
import { Admin, Resource } from "react-admin";
// import dataProvider from "./providers/userProvider";

import { UsersList } from "./components/usersList";
import { PostsList } from "./components/postsList";
import simpleRestProvider from "ra-data-simple-rest";
// import { PostList, PostEdit, PostCreate, PostIcon } from "./post";
// const dataProvider = crudProvider("http://localhost:3080/admin");
// console.log(simpleRestProvider);

render(
  <Admin dataProvider={simpleRestProvider("http://localhost:3080")}>
    <Resource
      name="admin/users"
      list={UsersList}
      // edit={PostEdit}
      // create={PostCreate}
      // icon={PostIcon}
    />
    <Resource
      name="posts"
      list={PostsList}
      // edit={PostEdit}
      // create={PostCreate}
      // icon={PostIcon}
    />
  </Admin>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
