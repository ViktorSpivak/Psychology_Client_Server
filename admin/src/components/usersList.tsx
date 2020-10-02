import * as React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const UsersList = (props: any) => (
  <List {...props}>
    <Datagrid>
      {/* <TextField source="id" /> */}
      <TextField source="role" />
      <TextField source="name" />
      {/* <TextField source="role" /> */}
      <EmailField source="email" />
    </Datagrid>
  </List>
);
