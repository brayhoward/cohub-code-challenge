import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { responses } }) => {
        if (loading) return <div>Loading..</div>;

        return responses.map(({ responder }) => <p>{responder}</p>);
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
      }
    }
  }
`;
