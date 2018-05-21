import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import Questions from "./QuestionsContainer";
import Responses from "./ResponsesContainer";

export default () => (
  <Router>
    <Container as="main">
      <div className="flex justify-center align-items-center page-height">
        <Switch>
          <Route exact path="/" component={Questions} />
          <Route exact path="/dashboard" component={Responses} />
          <Route
            exact
            path="/authenticate"
            render={
              ({
                location: {
                  state: { unauthorized = false } = {}
                }
              }) => `login cmpt - unathorized: ${JSON.stringify(unauthorized)}`
            }
          />
        </Switch>
      </div>
    </Container>
  </Router>
);
