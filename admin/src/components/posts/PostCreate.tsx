import * as React from "react";
import { FC } from "react";
import {
  BooleanInput,
  ImageInput,
  DateField,
  Create,
  ImageField,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
// import { Order, Customer } from '../types';

// import Basket from "./Basket";

// interface OrderTitleProps {
//   record?: Order;
// }

// const OrderTitle: FC<OrderTitleProps> = ({ record }) => {
//   const translate = useTranslate();
//   return record ? (
//     <span>
//       {translate("resources.commands.title", {
//         reference: record.reference,
//       })}
//     </span>
//   ) : null;
// };

const useCreateStyles = makeStyles({
  root: { width: "100%" },
});
// const Text: FC<any> = (props) => {
//   return <TextInput multiline source="text" />;
// };

const PostCreate: FC<any> = (props) => {
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
          className={classes.root}
        />

        <TextInput multiline source="headline" className={classes.root} />
        <TextInput multiline source="text" className={classes.root} />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
