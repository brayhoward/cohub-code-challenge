import React from "react";
import { Field as FinalFormField } from "react-final-form";
import { Input, Label } from "semantic-ui-react";
import Checkbox from "./inputs/Checkbox";

const required = value => (value ? undefined : "Required");

export default ({ question: { id, field_type, ...rest } }) => {
  const name = `Question:${id}`;

  return selectAndRenderInput(field_type, { name, ...rest });
};

const selectAndRenderInput = (field_type, inputProps) => {
  switch (field_type) {
    case "string":
      return <TextInput {...inputProps} />;
    case "boolean":
      return <BooleanInput {...inputProps} />;

    default:
      return <p> default </p>;
  }
};

const TextInput = ({ label, name }) => (
  <FinalFormField
    name={name}
    validate={required}
  >
    {({ input, meta: { touched, error } }) => {

      const showError = !!(touched && error);

      return (
        <React.Fragment>
          <div className="pd-b">
            <label>{label}</label>
          </div>

          <div className="flex">
            <Input
              {...input}
              type="text"
              placeholder="Answer"
              error={showError}
              className="full-width"
            />

            {showError &&
              <Label basic color='red' pointing='left'>{error}</Label>
            }
          </div>
        </React.Fragment>
      );
    }}
  </FinalFormField>
);

const BooleanInput = ({ label, name }) => {
  return (
    <FinalFormField
      name={name}
      label={label}
      component={Checkbox}
      type="checkbox"
    / >
  );
};
