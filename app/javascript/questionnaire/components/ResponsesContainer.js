import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Responses from "./Responses";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { responses } }) => {
        if (loading) return <div>Loading..</div>;

        return <Responses responses={responses} />;
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
