import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Form } from "react-final-form";
import { Button } from "semantic-ui-react";
import AppField from "./AppField";


export default ({ questions }) => {
  console.log('questions', 'LOGGED BELLOW');
  console.log(questions);
  questions = [questions[0], questions[1]];

  return (
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
              <div key={question.id} className="mg-v">
                <AppField question={question} />
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
}

