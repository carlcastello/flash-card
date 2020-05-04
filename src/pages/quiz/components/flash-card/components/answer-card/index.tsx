import React, { Component, ReactNode, ChangeEvent } from 'react';

import { withStyles, Paper, Input, Box } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashCardStatus } from '../../types';


class AnswerCard extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    answer: ''
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({answer: event.target.value})
  }

  render(): ReactNode {
    const {
      state: {
        answer,
      },
      props: {
        flashCardStatus,
        classes: {
          paper,
          input
        }
      }
    } = this;

    return (
      <Paper className={paper} elevation={3}>
        <Box p={2.5}>
          <Input 
            value={answer}
            className={input}
            margin='none'
            onChange={this.onInputChange}
            disabled={flashCardStatus !== FlashCardStatus.DEFAULT}
            disableUnderline
            fullWidth/>
        </Box>
      </Paper>
    )
  }
}

export default withStyles(styles)(AnswerCard);