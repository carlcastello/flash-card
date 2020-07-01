import React, { Component, ReactNode } from 'react'; 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { ThemeProvider } from '@material-ui/core';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainReducer from './reducer';

import Quiz from './quiz';
import QuizTheme from './quiz/theme';

import Web  from './web';


class App extends Component {

  renderWebSwitch(): ReactNode {
    return (
      <Switch>
        <Route
          exact
          path='/'
          component={Web}/>
        <Route
          exact
          path='/dashboard/quiz'
          component={Web}/>
        <Route
          exact
          path='/dashboard/quiz/:quizId'
          component={Web}/>
      </Switch>
    );
  }

  renderQuizSwitch(): ReactNode {
    return (
      <ThemeProvider theme={QuizTheme}>
        <Switch>
          <Route
            exact
            path="/quiz/:quizId"
            component={Quiz}/>
          </Switch>
      </ThemeProvider>
    );
  }

  render(): ReactNode {
    return (
      <Provider store={createStore(MainReducer, applyMiddleware(thunkMiddleware))}>
        <BrowserRouter>
          {this.renderWebSwitch()}
          {this.renderQuizSwitch()}
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;