import React, { Component, ReactNode } from 'react';

import { 
  withStyles,
  Paper,
  Box,
  Typography
} from '@material-ui/core';

import Form from '../../../../../components/form';
import { IFormResponse } from '../../../../../components/form/types';
import { IQuizSummary } from '../../../../../../commons/types';

import { QuizSummaryFields } from './fields';
import { IOwnProps } from './types';
import styles from './styles';


class QuizSummary extends Component<IOwnProps> {

  onFormSubmit = (data: IFormResponse) => {

    const {
      quizId,
      createQuizSummary,
      saveQuizSummary,
    } = this.props;

    const quizSummary: IQuizSummary = {
      title: data['quiz-title'],
      description: data['quiz-description'],
    }

    if (quizId) {
      saveQuizSummary(quizId, quizSummary);
    } else {
      createQuizSummary(quizSummary);
    }
  }

  render(): ReactNode {
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
            onSuccess={this.onFormSubmit}/>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(QuizSummary);