import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Query query={LIST_QUESTIONS}>
          {({ loading, data }) => {
            if (loading) return <div>Loading..</div>;

            const questions = data.questions.map(question => (
              <li key={question.id}>{question.label}</li>
            ));

            return <ul>{questions}</ul>;
          }}
        </Query>
      </div>
    );
  }
}

const LIST_QUESTIONS = gql`
  query ListQuestions {
    questions: ListQuestions {
      id
      label
      position
      field_type
      options
      multiselect
    }
  }
`;
