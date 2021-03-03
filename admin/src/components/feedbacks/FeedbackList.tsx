import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const FeedbackList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="date" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
