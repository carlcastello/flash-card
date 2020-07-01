import React, { Component, ReactNode } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import EmptyPage from "./pages/empty";
import CompletionPage from "./pages/completion";


class Router extends Component {
  render(): ReactNode {
    return (
      <Switch>
        <Route 
          exact
          path='/quiz/:quizId'
          component={Main}/>
        <Route 
          exact
          path='/quiz/:quizId/empty-screen'
          component={EmptyPage}/>
        <Route 
          exact
          path='/quiz/:quizId/completion-screen'
          component={CompletionPage}/>
      </Switch>
    );
  }
}


export default Router;
