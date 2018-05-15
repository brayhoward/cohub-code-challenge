import React from "react";
import Radio from "material-ui/Radio";

export default ({
  input: { checked, value, name, onChange, ...restInput },
  label,
  _meta,
  ...rest
}) => (
  <React.Fragment>
    <Radio
      {...rest}
      name={name}
      inputProps={restInput}
      onChange={onChange}
      checked={!!checked}
      value={value}
    />

    <span className="mg-l">{label}</span>
  </React.Fragment>
);
