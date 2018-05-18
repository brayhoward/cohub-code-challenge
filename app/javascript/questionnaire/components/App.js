import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Container } from "semantic-ui-react";
import Questions from "./QuestionsContainer";
import Responses from "./ResponsesContainer";

export default () => (
  <Router>
    <Container as="main">
      <div className="flex justify-center align-items-center page-height">
        <Route exact path="/" component={Questions} />
        <Route exact path="/dashboard" component={Responses} />
      </div>
    </Container>
  </Router>
);
