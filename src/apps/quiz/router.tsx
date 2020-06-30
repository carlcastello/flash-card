import React, { Component, ReactNode } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';


class Router extends Component {
  render(): ReactNode {
    return (
      <Switch>
        <Route 
          exact
          path='/quiz/:quizId'
          component={Main}/>
      </Switch>
    );
  }
}


export default Router;
