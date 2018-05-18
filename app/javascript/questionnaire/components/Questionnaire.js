import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Form, Field as FinalFormField } from "react-final-form";
import { Button } from "semantic-ui-react";
import Snackbar from "material-ui/Snackbar";
import { required } from "../validaters";
import DynamicField from "./DynamicField";
import TextInput from "./inputs/TextInput";


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMsg: false,
    };
  }

  render() {
    const { questions } = this.props;
    const { showMsg }   = this.state;

    return (
      <React.Fragment>
        <Mutation mutation={CREATE_RESPONSE}>
          {(createResponse) => (
            <Form
              onSubmit={(formData, { reset }) => {
                const response = buildResponse(formData, questions);

                createResponse({ variables: { response } });
                this.setState({ showMsg: true });
                reset();
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

        <Snackbar
          open={showMsg}
          message="Thanks, your answers have been submited!"
          autoHideDuration={3000}
          onClose={() => this.setState({ showMsg: false })}
        />
      </React.Fragment>
    );
  }
}

const CREATE_RESPONSE = gql`
  mutation createResponse($response: ResponseInput) {
    createResponse(response: $response) {
      responder
      answers {
        question_id
        text
        bool
        selections
      }
    }
  }
`;

function buildResponse({ responder, ...formAnswers }, questions) {
  const aKeys = Object.keys(formAnswers);

  const answers = aKeys.map(questionIdentifier => {
    const answer = formAnswers[questionIdentifier];
    const question_id = ~~questionIdentifier.slice(-1);
    const { field_type } = questions.find(q => q.id == question_id);

    const answerInput = { question_id };

    switch (field_type) {
      case "string":
        return { ...answerInput, text: answer };

      case "boolean":
        return { ...answerInput, bool: answer };

      case "list":
        return { ...answerInput, selections: answer };

      default:
        throw "field_type match error";
    }
  });

  return { responder, answers };
}

