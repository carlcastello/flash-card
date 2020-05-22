import React, { Component, ReactNode } from 'react';

import { 
  withStyles,
  Paper,
  Box,
  Typography
} from '@material-ui/core';

import Form from '../../../../../components/form';
import { QuizSummaryFields } from './fields';

import { IOwnProps } from './types';
import styles from './styles';


class QuizSummary extends Component<IOwnProps> {
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
            onSuccess={() => {console.log('hello world')}}/>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(QuizSummary);