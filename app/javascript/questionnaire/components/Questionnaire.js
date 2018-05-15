import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Form, Field as FinalFormField } from "react-final-form";
import { Button } from "semantic-ui-react";
import { required } from "../validaters";
import DynamicField from "./DynamicField";
import TextInput from "./inputs/TextInput";


export default ({ questions }) => (
  <Form
    onSubmit={formData => {
      console.log('formData', 'LOGGED BELLOW');
      console.log(formData);
    }}
    validate={() => null}
    render={({ handleSubmit, pristine, invalid: formInvalid }) => (
      <form onSubmit={handleSubmit}>
         <FinalFormField
          name="visitorName"
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

