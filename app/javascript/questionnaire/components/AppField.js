import React from "react";
import { Field as FinalFormField } from "react-final-form";
import { Input, Checkbox, Label } from "semantic-ui-react";

const required = value => (value ? undefined : "Required");

export default ({ question: { id, label, field_type } }) => {
  const identifier = `Question:${id}`;
  const shouldRequire = !(field_type === "boolean");

  return (
    <FinalFormField
      name={identifier}
      validate={shouldRequire ? required : () => undefined }
    >
      {({ input, meta: { touched, error } }) => {

        const showError = !!(touched && error);
        const inputProps = { label, input, showError, error };

        return inputSelect(field_type, inputProps);
      }}
    </FinalFormField>
  );
};

const inputSelect = (field_type, inputProps) => {
  switch (field_type) {
    case "string":
      return <TextInput {...inputProps} />;
    case "boolean":
      return <BooleanInput {...inputProps} />;

    default:
      return <p> default </p>;
  }
};

const TextInput = ({ label, input, showError, error }) => (
  <React.Fragment>
    <div className="pd-b pd-t--lg">
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
)

const BooleanInput = ({ label, input, input: { value } }) => {
  console.log('input', 'LOGGED BELLOW');
  console.log(input);
  console.log('value', 'LOGGED BELLOW');
  console.log(value);
  return (
    <div className="flex">
      <input type="checkbox" {...input} />
      <label>{label}</label>
    </div>
  );
};
