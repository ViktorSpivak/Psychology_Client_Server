import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  DateField,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useCreateStyles = makeStyles({
  root: { width: "100%" },
});

const FeedbackCreate: FC<any> = (props) => {
  const classes = useCreateStyles();
  return (
    <Create
      // title={<OrderTitle />}
      // aside={<Text />}
      classes={classes}
      {...props}
    >
      <SimpleForm>
        <DateField source="date" />
        <TextInput multiline source="name" className={classes.root} />
        <TextInput multiline source="description" className={classes.root} />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Create>
  );
};

export default FeedbackCreate;
