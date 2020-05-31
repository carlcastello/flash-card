import React, { Component, ReactNode } from 'react';

import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Quiz from './pages/quiz';


class Router extends Component {
 
  render(): ReactNode {
    return(
      <Switch>
        <Route
          exact
          path='/'
          component={Dashboard}/>
        <Route
          exact
          path='/dashboard/quiz'
          component={Quiz}/>
        <Route
          exact
          path='/dashboard/quiz/:quizId'
          component={Quiz}/>
      </Switch>
    );
  }
}


export default Router;
