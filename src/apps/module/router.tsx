import React, { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';
import Quiz from './pages/quiz';


class Router extends Component {
  render(): ReactNode {
    return (
      <Switch>
        <Route 
          exact
          path='/quiz/:quizId'
          component={Quiz}/>
      </Switch>
    );
  }
}


export default Router;
