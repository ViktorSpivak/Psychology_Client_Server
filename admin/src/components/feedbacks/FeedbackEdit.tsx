import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  DateField,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { IFeedback } from "../../../../common/interfaces";
interface FeedbackTitleProps {
  record?: IFeedback;
}

const FeedbackTitle: FC<FeedbackTitleProps> = ({ record }) => {
  return record ? <span>{record.name}</span> : null;
};

const useEditStyles = makeStyles({
  root: { width: "100%" },
});

export const FeedbackEdit: FC<any> = (props) => {
  const classes = useEditStyles();
  return (
    <Edit title={<FeedbackTitle />} classes={classes} {...props}>
      <SimpleForm>
        <DateField source="date" />
        <TextInput multiline source="name" fullWidth />
        <TextInput multiline source="description" fullWidth />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};
