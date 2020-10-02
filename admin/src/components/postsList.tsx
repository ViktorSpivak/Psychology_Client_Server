import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const PostsList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="topic" />
      <TextField source="headline" />
      <TextField source="date" />
    </Datagrid>
  </List>
);
