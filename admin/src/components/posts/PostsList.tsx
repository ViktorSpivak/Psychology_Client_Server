import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const PostsList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="topic" />
      <TextField source="headline" />
      <TextField source="date" />
    </Datagrid>
  </List>
);
