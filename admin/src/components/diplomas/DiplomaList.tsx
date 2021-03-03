import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const DiplomaList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="date" />
      <TextField source="photo" />
    </Datagrid>
  </List>
);
