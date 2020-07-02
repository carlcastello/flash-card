import React, { Component, ReactNode } from 'react'; 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { ThemeProvider } from '@material-ui/core';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainReducer from './reducer';

import QuizApp from './quiz';
import QuizAppTheme from './quiz/theme';

import DashboardApp  from './dashboard';


class App extends Component {

  renderWebSwitch(): ReactNode {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={DashboardApp}/>
        <Route
          exact
          path='/dashboard/quiz'
          component={DashboardApp}/>
        <Route
          exact
          path='/dashboard/quiz/:quizId'
          component={DashboardApp}/>
      </Switch>
    );
  }

  renderQuizSwitch(): ReactNode {
    return (
      <Switch>
        <ThemeProvider theme={QuizAppTheme}>
            <Route
              exact
              path="/quiz/:quizId"
              component={QuizApp}/>
        </ThemeProvider>
      </Switch>
    );
  }

  render(): ReactNode {
    return (
      <Provider store={createStore(
        MainReducer,
        applyMiddleware(thunkMiddleware)
      )}>
        <BrowserRouter>
          {this.renderWebSwitch()}
          {this.renderQuizSwitch()}
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;