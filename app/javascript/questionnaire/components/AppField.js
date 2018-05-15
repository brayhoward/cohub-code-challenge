import React from "react";
import { Field as FinalFormField } from "react-final-form";
import Checkbox from "./inputs/Checkbox";
import TextInput from "./inputs/TextInput";
import Radio from "./inputs/Radio";

const required = value => (value ? undefined : "Required");

export default ({ question: { id, ...rest } }) => {
  const name = `Question:${id}`;

  return selectAndRenderInput({ name, ...rest });
};

const selectAndRenderInput = ({ field_type, multiselect, ...inputProps }) => {
  switch (field_type) {
    case "string":
      return <TextField {...inputProps} />;
    case "boolean":
      return <BooleanField {...inputProps} />;
    case "list":
      return multiselect ? <MultiSelectField {...inputProps} /> : <OptionsListField {...inputProps} />;

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

const OptionsListField = ({ label, name, options }) => (
  <div className="flex justify-between">
    <label className="flex-1">{label}</label>

    <div
      style={{
        overflow: "auto",
        maxHeight: "10em",
        width: "10em"
      }}
      className="mg-l--lg flex-1"
    >
      {options.map((option, i) => (
        <div key={i}>
          <FinalFormField
            name={name}
            label={option}
            value={option}
            component={Radio}
            type="radio"
            key={i}
          />
        </div>
      ))}
    </div>
  </div>
);

const MultiSelectField = ({ label, name, options }) => {

  return (
    <div className="flex justify-between">
      <label className="flex-1">{label}</label>

      <div
        style={{
          overflow: "auto",
          maxHeight: "10em",
          width: "10em"
        }}
        className="mg-l--lg flex-1"
      >
        {options.map((option, i) => (
          <div key={i}>
            <FinalFormField
              name={name}
              label={option}
              value={option}
              component={Checkbox}
              type="checkbox"
              key={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
