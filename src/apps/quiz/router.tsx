import React, { Component, ReactNode } from "react";
import { Switch, Route } from "react-router-dom";

import MainQuizPage from "./pages/main";


class Router extends Component {
  render(): ReactNode {
    return (
      <Switch>
        <Route 
          exact
          path='/quiz/:quizId'
          component={MainQuizPage}/>
      </Switch>
    );
  }
}


export default Router;
