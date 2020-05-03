import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box } from '@material-ui/core';

import styles from './styles';
import {
  IOwnProps,
  QuestionType
} from './types';


class QuestionCard extends Component<IOwnProps> {

  renderWordVariant(): ReactNode {
    const {
      questionObject: {
        question,
        subQuestion
      }
    } = this.props;
    return (
      <Box py={7} px={2}>
        <Typography variant="h4">
          {question}
        </Typography>
        {subQuestion ?  
          <Typography variant="body1">
            {subQuestion}
          </Typography> :
          null
        }        
      </Box>
    )    
  }


  renderQuestionaireVariant(): ReactNode {
    const {
      questionObject: {
        question
      }
    } = this.props;
    return ( 
      <Box py={10} px={2}>
        <Typography variant="body1">
          {question}
        </Typography>
      </Box>
    )
  }

  renderFlashCard(): ReactNode {
    const {
      questionObject: {
        questionType,
      },
    } = this.props;
    if (questionType === QuestionType.WORD) {
      return (this.renderWordVariant());
    } else if (questionType === QuestionType.QUESTIONAIRE) {
      return (this.renderQuestionaireVariant());
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