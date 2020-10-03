import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const RequestsList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="date" />
      <TextField source="name" />
      <TextField source="text" />
    </Datagrid>
  </List>
);
