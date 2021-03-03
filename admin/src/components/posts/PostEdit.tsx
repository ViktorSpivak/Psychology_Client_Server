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
import { IPost } from "../../../../common/interfaces";

interface PostTitleProps {
  record?: IPost;
}

const PostTitle: FC<PostTitleProps> = ({ record }) => {
  return record ? <span>{record.headline}</span> : null;
};

const useEditStyles = makeStyles({
  // root: { width: "100%" },
});

export const PostEdit: FC<any> = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      title={<PostTitle />}
      // aside={<Text />}
      classes={classes}
      {...props}
      // undoable={false}
    >
      <SimpleForm>
        <DateField source="date" />
        <ImageInput source="photo" label="Related pictures" accept="image/*">
          <ImageField source="photo" title="title" />
        </ImageInput>
        <SelectInput
          source="topic"
          choices={[
            { id: "psyho", name: "psyho" },
            { id: "mento", name: "mento" },

            {
              id: "unknown",
              name: "unknown",
            },
          ]}
          // className={classes.root}
        />

        <TextInput multiline source="headline" fullWidth />
        <TextInput multiline source="text" fullWidth />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};
