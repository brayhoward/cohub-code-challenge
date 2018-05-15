import React from "react";
import Checkbox from "material-ui/Checkbox";

export default ({
  input: { checked, name, onChange, ...restInput },
  label,
  ...rest
}) => (
  <React.Fragment>
    <Checkbox
      {...rest}
      name={name}
      inputProps={restInput}
      onChange={onChange}
      checked={!!checked}
      color="default"
      defaultChecked
    />

    <span className="mg-l">{label}</span>
  </React.Fragment>
);