import React from "react";
import { Card } from "semantic-ui-react";

export default ({
  response: { responder }
}) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        {responder}
      </Card.Header>

      Answers Placeholder[]
    </Card.Content>
  </Card>
);