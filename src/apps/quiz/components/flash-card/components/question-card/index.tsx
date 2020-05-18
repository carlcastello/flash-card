import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box, IconButton } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import styles from './styles';
import {
  IOwnProps
} from './types';
import { FlashCardStatus } from '../../types';
import { QuestionType } from '../../../../../commons/types';


class QuestionCard extends Component<IOwnProps> {

  renderSkip(): ReactNode {
    const {
      onSkip,
      flashCardStatus,
      classes: {
        boxButtonContainer,
      }
    } = this.props;

    return (
      <Box pr={2} pb={1} className={boxButtonContainer}>
        <IconButton
          color="primary"
          onClick={onSkip}
          disabled={flashCardStatus !== FlashCardStatus.DEFAULT}>
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
        {this.renderSkip()}     
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
        {this.renderSkip()}
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