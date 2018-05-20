import React from "react";
import { Card, Segment } from "semantic-ui-react";
import Answer from "./Answer";

export default ({
  response: { responder, answers }
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Header className="mg-b">
        {responder}
      </Card.Header>

      {answers.map(
        (answer, i) => (
          <Segment key={i} vertical>
            <Answer answer={answer} />
          </Segment>
        ))
      }
    </Card.Content>
  </Card>
);