import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  ImageInput,
  DateField,
  Create,
  ImageField,
  SimpleForm,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { TextInput } from "react-admin";
const useCreateStyles = makeStyles({
  root: { width: "100%" },
});

const DiplomaCreate: FC<any> = (props) => {
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
        {/* <ImageInput source="photo" label="Related pictures" accept="image/*">
          <ImageField source="photo" title="title" />
        </ImageInput> */}
        <TextInput multiline source="photo" className={classes.root} />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Create>
  );
};

export default DiplomaCreate;
