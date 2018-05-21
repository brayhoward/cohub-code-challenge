import React from "react";
import { Input, Label } from "semantic-ui-react";

export default ({
  label,
  placeholder = "Answer...",
  input,
  meta: { touched, error }
}) => {

  const showError = !!(touched && error);

  return (
    <React.Fragment>
      <div className="pd-b">
        <label>{label}</label>
      </div>

      <div
        className="flex"
        style={{ position: "relative" }}
      >
        <Input
          {...input}
          type="text"
          placeholder={placeholder}
          error={showError}
          className="full-width"
        />

        {showError &&
          <Label
            basic
            color='red'
            pointing='left'
            style={{
              position: "absolute",
              zIndex: 22,
              right: "-77px",
              bottom: "5px"
            }}
          >
            {error}
          </Label>
        }
      </div>
    </React.Fragment>
  );
};
