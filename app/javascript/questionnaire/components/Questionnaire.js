import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form, Field as FinalFormField } from "react-final-form";
import { Button } from "semantic-ui-react";
import { required } from "../validaters";
import DynamicField from "./DynamicField";
import TextInput from "./inputs/TextInput";


export default ({ questions }) => {

  return (
    <Mutation mutation={CREATE_RESPONSE}>
      {(createResponse, { data }) => (
        <Form
          onSubmit={({ responder }) => {
            // debugger;
            createResponse({ variables: { response: { responder, answers: [{ text: "test", question_id: 1 }] } }});
          }}
          validate={() => null}
          render={({ handleSubmit, pristine, invalid: formInvalid }) => (
            <form onSubmit={handleSubmit}>
              <FinalFormField
                name="responder"
                label="Full Name"
                validate={required}
              >
                {props => (
                  <TextInput {...props} placeholder="Name..." />
                )}
              </FinalFormField>

              {questions.map(
                question => (
                  <div key={question.id} className="mg-v--lg">
                    <DynamicField question={question} />
                  </div>
                )
              )}

              <div className="full-width mg-t--xl">
                <Button
                  className="mg-t"
                  type="submit"
                  disabled={pristine || formInvalid}
                  secondary
                  fluid
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        />
      )}
    </Mutation>
  );
};

const CREATE_RESPONSE = gql`
  mutation createResponse($response: ResponseInput) {
    createResponse(response: $response) {
      responder
    }
  }
`;

