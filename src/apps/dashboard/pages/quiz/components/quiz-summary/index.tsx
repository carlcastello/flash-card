import React, { Component, ReactNode } from 'react';

import { 
  withStyles,
  Paper,
  Box,
  Typography
} from '@material-ui/core';

import Form from '../../../../components/form';
import { IFormResponse } from '../../../../components/form/types';
import { IQuizSummary } from '../../../../../commons/types';

import { QuizSummaryFields } from './fields';
import { IOwnProps } from './types';
import styles from './styles';


export class QuizSummary extends Component<IOwnProps> {

  onFormSubmit = (response: IFormResponse) => {

    const {
      quizId,
      quizSummary,
      onCreateQuizSummary,
      onSaveQuizSummary,
    } = this.props;

    const newQuizSummary: IQuizSummary = {
      ...{ title: '', description: '' },
      ...quizSummary,
      ...response
    }

    if (quizId) {
      onSaveQuizSummary(quizId, newQuizSummary);
    } else {
      onCreateQuizSummary(newQuizSummary);
    }
  }

  render(): ReactNode {
    const {
      isLoading,
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
            isLoading={isLoading}
            fields={QuizSummaryFields(title, description)}
            onSuccess={this.onFormSubmit}/>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(QuizSummary);