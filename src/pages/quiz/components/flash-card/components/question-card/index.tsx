import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box, IconButton } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import styles from './styles';
import {
  IOwnProps,
  QuestionType
} from './types';


class QuestionCard extends Component<IOwnProps> {

  renderHint(): ReactNode {
    const {
      classes: {
        boxButtonContainer,
      }
    } = this.props;

    return (
      <Box pr={2} pb={1} className={boxButtonContainer}>
        <IconButton>
          <SkipNextIcon/>
        </IconButton>
      </Box>
    );
  }

  renderWordVariant(): ReactNode {
    const {
      questionObject: {
        question,
        subQuestion
      },
      classes: {
        boxQuestionaireContainer
      }
    } = this.props;
    return (
      <Box py={7} px={2} className={boxQuestionaireContainer}>
        <Typography variant="h2">
          {question}
        </Typography>
        {subQuestion ?  
          <Typography variant="body1">
            {subQuestion}
          </Typography> :
          null
        }   
        {this.renderHint()}     
      </Box>
    )    
  }

  renderQuestionaireVariant(): ReactNode {
    const {
      questionObject: {
        question
      },
      classes: {
        boxQuestionaireContainer
      }
    } = this.props;
    return ( 
      <Box py={10} px={2} className={boxQuestionaireContainer}>
        <Typography variant="body1">
          {question}
        </Typography>
        {this.renderHint()}
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