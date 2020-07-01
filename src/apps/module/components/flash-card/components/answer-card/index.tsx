import React, { Component, ReactNode, ChangeEvent } from 'react';

import { withStyles, Paper, Input, Box, Typography } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashcardStatus } from '../../types';


class AnswerCard extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    answer: ''
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({answer: event.target.value})
  }

  renderInput(): ReactNode {
    const {
      state: {
        answer
      },
      props: {
        flashcardStatus,
        classes: {
          input
        }
      }
    } = this;

    return (
      <Input 
        value={answer}
        className={input}
        margin='none'
        onChange={this.onInputChange}
        disabled={flashcardStatus !== FlashcardStatus.DEFAULT}
        disableUnderline
        fullWidth/>
    );
  }

  renderCorrectAnswer(): ReactNode {
    const {
      answer,
      classes: {
        input,
        typography
      }
    } = this.props;

    return (
      <Box>
        <Typography className={typography} variant="subtitle2">Answer</Typography>
        <Input
          value={answer}
          className={input}
          margin='none'
          disabled
          disableUnderline
          fullWidth/>
      </Box>
    );
  }

  renderAnswerBox(): ReactNode {
    const {
      flashcardStatus,
    } = this.props;

    switch (flashcardStatus) {
      case FlashcardStatus.WRONG:
        return (
          <Box>
            {this.renderInput()}
            <Box pt={1.5}>
              {this.renderCorrectAnswer()}
            </Box>
          </Box>
        )
      case FlashcardStatus.HINT:
        return (this.renderCorrectAnswer())        
      default:
        return (this.renderInput())
    }
  }

  render(): ReactNode {
    const {      
      props: {
        classes: {
          paper
        }
      }
    } = this;

    return (
      <Box pt={2.5}>
        <Paper className={paper} elevation={3}>
          <Box p={2.5}>
            {this.renderAnswerBox()}
          </Box>
        </Paper>
      </Box>
    )
  }
}

export default withStyles(styles)(AnswerCard);