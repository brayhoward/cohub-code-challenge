import React from "react";
import { Input, Label } from "semantic-ui-react";

export default ({ label, input, meta: { touched, error } }) => {

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
};
