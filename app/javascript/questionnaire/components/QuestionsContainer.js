import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Questionnaire from "./QuestionsForm";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { questions } }) => {
        if (loading) return <div>Loading..</div>;

        return <Questionnaire {...{ questions }} />;
      }}
    </Query>
  </div>
);

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
