import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Form, Field } from "react-final-form";
import { Button, Input, Message, Popup } from "semantic-ui-react";

const required = value => (value ? undefined : "Required");


export default ({ questions }) => {
  console.log('questions', 'LOGGED BELLOW');
  console.log(questions);

  return (
    <Form
      onSubmit={formData => {
        console.log('formData', 'LOGGED BELLOW');
        console.log(formData);
      }}
      validate={() => null}
      render={({ handleSubmit, pristine, invalid: formInvalid }) => (
        <form onSubmit={handleSubmit}>

          <Field
            name="name"
            validate={required}
          >
            {({ input, meta: { touched, error } }) => {

              const valid = !(touched && error);

              return (
                <div>
                  <Popup
                    trigger={(
                      <div>
                        <label>{input.name}</label>
                        <div>
                          <Input
                            {...input}
                            type="text"
                            placeholder={input.name}
                            error={!valid}
                          />
                        </div>
                      </div>
                    )}
                    content={error}
                    hoverable={false}
                    open={!valid}
                    position="right center"
                    style={{ color: "red" }}
                  />
                </div>
              );
            }}
          </Field>

          <div className="full-width mg-t">
            <Button
              className="mg-t"
              type="submit"
              disabled={pristine || formInvalid}
              primary
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

