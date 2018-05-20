import React from "react";
import Response from "./Response";

export default ({ responses }) => (
  <div style={{ width: "40vw"}}>
    {responses.map(
      (response, i) => <Response key={i} response={response} />
    )}
  </div>
);