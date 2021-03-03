import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  ImageInput,
  DateField,
  Edit,
  ImageField,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { IDiploma } from "../../../../common/interfaces";

interface DiplomaTitleProps {
  record?: IDiploma;
}

const DiplomaTitle: FC<DiplomaTitleProps> = ({ record }) => {
  // const translate = useTranslate();
  return record ? <span>{record.name}</span> : null;
};

const useEditStyles = makeStyles({
  root: { width: "100%" },
});

const DiplomaEdit: FC<any> = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      title={<DiplomaTitle />}
      // aside={<Text />}
      classes={classes}
      {...props}
      // undoable={false}
    >
      <SimpleForm>
        <DateField source="date" />
        {/* <ImageInput source="photo" label="Related pictures" accept="image/*">
          <ImageField source="photo" title="title" />
        </ImageInput> */}
        <TextInput multiline source="photo" fullWidth />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};

export default DiplomaEdit;
