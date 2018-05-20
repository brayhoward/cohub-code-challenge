import React from "react";
import { List } from "semantic-ui-react";

export default ({ answer }) => {

  return (
    <span>
      <strong className="mg-r--sm">Q: </strong> <i>{answer.question.label}</i>

      <div className="pd-l mg-v">
        {renderAppropriateAnswerFormat(answer)}
      </div>
    </span>
  );
};

function renderAppropriateAnswerFormat({
  text,
  selections,
  bool,
  question: { field_type, multiselect }
}) {
  const isTextAnswer = field_type === "string" || (field_type === "list" && !multiselect);

  if (isTextAnswer) {
    return <DisplayText>{text}</DisplayText>;
  }
  if (field_type === "boolean") {
    return <DisplayText>{bool.toString()}</DisplayText>;
  }

  return (
    <List>
      {selections.map(
        (selection, i) => (
          <List.Item key={i}>
            <DisplayText>{selection}</DisplayText>
          </List.Item>
        )
      )}
    </List>
  );
}

const DisplayText = ({ children }) => (
  <p>
    <strong>{children}</strong>
  </p>
);