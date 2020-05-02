import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box } from '@material-ui/core';

import styles from './styles';
import {
  IOwnProps,
  QuestionCardType,
  IQuestionObject,
  IWordObject
} from './types';


class QuestionCard extends Component<IOwnProps> {

  renderWordVariant(wordObject: IWordObject): ReactNode {
    return (
      <Box py={7} px={2}>
        <Typography variant="h4">
          {wordObject.word}
        </Typography>
        <Typography variant="body1">
          {wordObject.classification}
        </Typography>
      </Box>
    )    
  }


  renderQuestionaireVariant(questionObject: IQuestionObject): ReactNode {
    return ( 
      <Box py={7} px={2}>
        <Typography variant="body1">
          {questionObject.question}
        </Typography>
      </Box>
    )
  }

  renderFlashCard(): ReactNode {
    const {
      flashCardType,
      questionObject,
      wordObject
    } = this.props;
    if (flashCardType === QuestionCardType.WORD && wordObject) {
      return (this.renderWordVariant(wordObject));
    } else if (flashCardType === QuestionCardType.QUESTIONAIRE && questionObject) {
      return (this.renderQuestionaireVariant(questionObject));
    }
  }

  render(): ReactNode {
    const {
      classes: {
        paper
      }
    } = this.props;
    return (
      <Paper className={paper} elevation={3}>
        {this.renderFlashCard()}
      </Paper>
    );
  }
}


export default withStyles(styles)(QuestionCard);