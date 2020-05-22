import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Grid,
  Paper,
  Box,
  Typography,
} from '@material-ui/core';

import Form from "../../../components/form";

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { QuizSummaryFields } from './fields';

import QuizQuestions from './components/quiz-questions';


class QuizSettings extends Component<IOwnProps, IOwnState> {
  
  state: IOwnState = {
    hasQuestionForm: false,
  }

  onOpenCloseClick = (): void => {
    this.setState((state: IOwnState) => ({
      hasQuestionForm: !state.hasQuestionForm
    }))
  }

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

    console.log(requiredData)
    if (quizId && requiredData.length !== 0) {
      fetchQuiz(quizId);
    }
  }

  renderQuizSummaryForm(): ReactNode {
    const {
      quizSummary
    } = this.props;

    const title = quizSummary?.title || '';
    const description = quizSummary?.description || '';

    return (
      <Paper elevation={3}>
        <Box p={5}>
          <Box pb={2}>
            <Typography variant="h4">
              Quiz Summary
            </Typography>
          </Box>
          <Form 
            fields={QuizSummaryFields(title, description)}
            onSuccess={() => {console.log('hello world')}}/>
        </Box>
      </Paper>
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
