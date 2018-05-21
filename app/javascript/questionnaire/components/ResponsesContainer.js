import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Redirect } from "react-router";
import { CircularProgress } from "material-ui/Progress";
import Responses from "./Responses";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { responses } = {} }) => {

        if (loading) return <CircularProgress style={{ color: "black" }} thickness={7} />;

        if (responses) return <Responses responses={responses} />;

        return <Redirect to={{ pathname: "/authenticate", state: { unauthorized: true } }} />;
      }}
    </Query>
  </div>
);

const LIST_QUESTIONS = gql`
  query ListResponses {
    responses: ListResponses {
      responder
      answers {
        text
        bool
        selections
        question {
          field_type
          label
          multiselect
        }
      }
    }
  }
`;
