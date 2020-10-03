import * as React from "react";
import { FC } from "react";
import {
  AutocompleteInput,
  BooleanInput,
  ImageInput,
  Edit,
  ImageField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useTranslate,
  EditProps,
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

// const useEditStyles = makeStyles({
//   root: { alignItems: "flex-start" },
// });

const PostEdit: FC<any> = (props) => {
  // const classes = useEditStyles();
  return (
    <Edit
      // title={<OrderTitle />}
      // aside={<Basket />}
      // classes={classes}
      {...props}
    >
      {/* <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput> */}
      <SimpleForm>
        {/* <DateInput source="date" /> */}
        {/* <ReferenceInput source="customer_id" reference="customers">
          <AutocompleteInput
            optionText={(choice: Customer) =>
              `${choice.first_name} ${choice.last_name}`
            }
          />
        </ReferenceInput> */}
        <TextInput multiline source="headline" />
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
        />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
