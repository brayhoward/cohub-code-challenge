import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Redirect } from "react-router";
import Responses from "./Responses";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { responses } = {} }) => {

        if (loading) return <div>Loading..</div>;

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
