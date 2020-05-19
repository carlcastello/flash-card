import React, { Component, ReactNode } from 'react';


import { Box, withStyles } from '@material-ui/core';
import { Route, BrowserRouter } from 'react-router-dom';

import styles from './styles';
import { IOwnProps } from './types';

import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import { QuestionType } from '../commons/types';
import QuizSettings from './pages/quiz-settings';


class Page extends Component<IOwnProps> {

  render(): ReactNode {
    const {
      classes: {
        boxContainer
      }
    } = this.props;

    return(
      <Box className={boxContainer}>
        <Navbar/>
        <Box py={5}>
          <BrowserRouter>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/add-quiz" component={() => 
            <QuizSettings quiz={{
              title: 'Hello World',
              description: 'This is a sample quiz',
              flashcards: [
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
              ]
            }}/>
          }/>
          </BrowserRouter>
        </Box>  
      </Box>
    );
  }
}

export default withStyles(styles)(Page); 