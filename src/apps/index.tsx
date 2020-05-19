import React, { Component, ReactNode } from 'react'; 
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Quiz from './quiz';
import QuizTheme from './quiz/theme';

import Web  from './web';
import WebsiteTheme from './web/theme';

import { QuestionType } from './commons/types';

class App extends Component {

  renderWebSwitch(): ReactNode {
    return (
      <ThemeProvider theme={WebsiteTheme}>
        <Switch>
          <Route
            exact
            path="/"
            component={Web}/>
          <Route
            exact
            path="/add-quiz"
            component={Web}/>
        </Switch>
      </ThemeProvider>
    );
  }

  renderQuizSwitch(): ReactNode {
    return (
      <ThemeProvider theme={QuizTheme}>
        <Switch>
          <Route
            exact
            path="/quiz"
            component={() => 
              <Quiz flashCards={[
                {
                  question: 'What is the capital of Sri Lanka?',
                  hint: 'India',
                  questionType: QuestionType.QUESTIONAIRE,
                  answer: 'potato'
                },
                {
                  question: 'Querer',
                  subQuestion: 'v. irregular',
                  questionType: QuestionType.WORD,
                  answer: 'potato'
                },
                {
                  question: 'Querer',
                  subQuestion: 'v. irregular',
                  questionType: QuestionType.WORD,
                  answer: 'potato'
                }
              ]}/>
            }/>
          </Switch>
      </ThemeProvider>
    );
  }

  render(): ReactNode {
    return (
      <BrowserRouter>
        {this.renderWebSwitch()}
        {this.renderQuizSwitch()}
      </BrowserRouter>
    )
  }
}

export default App;