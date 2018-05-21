import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Questionnaire from "./QuestionsForm";
import { CircularProgress } from "material-ui/Progress";

export default () => (
  <div>
    <Query query={LIST_QUESTIONS}>
      {({ loading, data: { questions } }) => {
        if (loading) {
          return (
            <CircularProgress style={{ color: "black" }} thickness={7} />
          );
        }

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
