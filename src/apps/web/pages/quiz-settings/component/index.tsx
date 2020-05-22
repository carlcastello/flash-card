import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Grid,
} from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import QuizQuestions from '../components/quiz-questions';
import QuizSummary from '../components/quiz-summary';


class QuizSettings extends Component<IOwnProps, IOwnState> {
  
  componentDidMount(): void {
    const {
      requiredData,
      fetchQuiz,
      match: {
        params: {
          quizId
        }
      },
    } = this.props;

    if (quizId && requiredData.length !== 0) {
      fetchQuiz(quizId);
    }
  }

  renderQuizSummaryForm(): ReactNode {
    const {
      match: {
        params: {
          quizId
        }
      },
    } = this.props;


    return (
      <QuizSummary quizId={quizId}/>
    )
  }

  renderQuizContainer(): ReactNode {
    return (
      <QuizQuestions/>
    );
  }

  render(): ReactNode {
    const {
      classes: {
        gridContainer
      }
    } = this.props
    return (
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={gridContainer}>
        <Grid item sm={10}>
          {this.renderQuizSummaryForm()}
        </Grid> 
        <Grid item sm={10}>
          {this.renderQuizContainer()}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(QuizSettings);
