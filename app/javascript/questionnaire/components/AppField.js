import React from "react";
import { Field as FinalFormField } from "react-final-form";
import Checkbox from "./inputs/Checkbox";
import TextInput from "./inputs/TextInput";

const required = value => (value ? undefined : "Required");

export default ({ question: { id, field_type, ...rest } }) => {
  const name = `Question:${id}`;

  return selectAndRenderInput(field_type, { name, ...rest });
};

const selectAndRenderInput = (field_type, inputProps) => {
  switch (field_type) {
    case "string":
      return <TextField {...inputProps} />;
    case "boolean":
      return <BooleanField {...inputProps} />;

    default:
      return <p> default </p>;
  }
};

const TextField = ({ label, name }) => (
  <FinalFormField
    name={name}
    label={label}
    component={TextInput}
    validate={required}
  />
);

const BooleanField = ({ label, name }) => (
  <FinalFormField
    name={name}
    label={label}
    component={Checkbox}
    type="checkbox"
  />
);
