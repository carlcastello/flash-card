import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box, IconButton } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import styles from './styles';
import {
  IOwnProps
} from './types';
import { FlashcardStatus } from '../../types';


class QuestionCard extends Component<IOwnProps> {

  renderSkip(): ReactNode {
    const {
      onSkip,
      flashcardStatus,
      classes: {
        boxButtonContainer,
      }
    } = this.props;

    return (
      <Box pr={2} pb={1} className={boxButtonContainer}>
        <IconButton
          onClick={onSkip}
          disabled={flashcardStatus !== FlashcardStatus.DEFAULT}>
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
        boxQuestionaireContainer,
        questionTypography
      }
    } = this.props;
    return (
      <Box py={4} px={2} className={boxQuestionaireContainer}>
        <Typography variant="h3" className={questionTypography}>
          {question}
        </Typography>
        {subQuestion ?  
          <Box mt={0.5}>
            <Typography variant="body1">
              {subQuestion}
            </Typography>
          </Box> :
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
      <Box py={5} px={2} className={boxQuestionaireContainer}>
        <Typography variant="body1">
          {question}
        </Typography>
        {this.renderSkip()}
      </Box>
    )
  }

  renderQuestionCard(): ReactNode {
    // const {
    //   questionObject: {
    //     questionType,
    //   },
    // } = this.props;
    // if (questionType === QuestionType.WORD) {
    //   return (this.renderWordVariant());
    // } else if (questionType === QuestionType.QUESTIONAIRE) {
    //   return (this.renderQuestionaireVariant());
    // }
    return (this.renderWordVariant())
  }

  render(): ReactNode {
    const {
      classes: {
        paper
      }
    } = this.props;
    return (
      <Paper className={paper} elevation={3}>
        {this.renderQuestionCard()}
      </Paper>
    );
  }
}


export default withStyles(styles)(QuestionCard);