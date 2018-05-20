import React from "react";
import Response from "./Response";

export default ({ responses }) => (
  <div>
    <div
      className="txt-center bx-shdw-b pd-b"
      style={{ marginBottom: 2 }}
    >
      <h1>Questionnaire Responses</h1>
    </div>

    {
      responses.length ?
        <div
          style={{ width: "40vw", height: "90vh", overflowY: "auto" }}
          className="pd--xl"
        >
          {responses.map(
            (response, i) => <Response key={i} response={response} />
          )}
        </div>
      :
        <div className="txt-center" style={{ height: "80vh" }}>
          <i>Looks like there arn't any responses right now</i>
        </div>
    }
  </div>
);