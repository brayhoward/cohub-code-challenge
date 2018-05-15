import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Form } from "react-final-form";
import { Button } from "semantic-ui-react";
import DynamicField from "./DynamicField";


export default ({ questions }) => (
  <Form
    onSubmit={formData => {
      console.log('formData', 'LOGGED BELLOW');
      console.log(formData);
    }}
    validate={() => null}
    render={({ handleSubmit, pristine, invalid: formInvalid }) => (
      <form onSubmit={handleSubmit}>

        {questions.map(
          question => (
            <div key={question.id} className="mg-v--lg">
              <DynamicField question={question} />
            </div>
          )
        )}

        <div className="full-width mg-t">
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
);

