import React from "react";
import { Form, Field as FinalFormField } from "react-final-form";
import { Button } from "semantic-ui-react";
import Snackbar from "material-ui/Snackbar";
import { required } from "../validaters";
import TextInput from "./inputs/TextInput";


export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUnauthedMsg: props.unauthorized,
      showWrongPassMsg: false
    };
  }

  render() {
    const { history } = this.props;
    const { showWrongPassMsg, showUnauthedMsg }   = this.state;

    return (
      <React.Fragment>
        <Form
          onSubmit={({ password }, { reset }) => {
            postPassword(password)
            .then(() => {
              history.push("/dashboard");
            })
            .catch(() => {
              this.setState({ showWrongPassMsg: true });
              reset();
            });
          }}
          render={({ handleSubmit, pristine, invalid: formInvalid }) => (
            <form onSubmit={handleSubmit}>
              <FinalFormField
                name="password"
                label="Password"
                validate={required}
              >
                {props => (
                  <TextInput {...props} placeholder="Password..." />
                )}
              </FinalFormField>


              <div className="full-width mg-t">
                <Button
                  type="submit"
                  disabled={pristine || formInvalid}
                  secondary
                  fluid
                >
                  Authenticate
                </Button>
              </div>
            </form>
          )}
        />

        <Snackbar
          open={showUnauthedMsg}
          message="Please Authenticate Before Moving Forward"
          autoHideDuration={3000}
          onClose={() => this.setState({ showUnauthedMsg: false })}
        />
        <Snackbar
          open={showWrongPassMsg}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          message="Incorrect Password"
          autoHideDuration={3000}
          onClose={() => this.setState({ showWrongPassMsg: false })}
        />
      </React.Fragment>
    );
  }
}

const devApi = false;

const postPassword = password => (
  fetch(
    "/authenticate",
    {
      method: "post",
      body: JSON.stringify({ password }),
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" }
    }
  )
  .then(resp => {
    const { ok, statusText } = resp;

    if (ok) return resp;

    throw statusText;
  })
);