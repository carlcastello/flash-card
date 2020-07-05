import React, { Component, ReactNode, ChangeEvent, createRef } from 'react';

import {
  withStyles,
  Paper,
  Input,
  Box,
  Typography,
  Collapse
} from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashcardStatus } from '../../types';


export class AnswerCard extends Component<IOwnProps, IOwnState> {

  inputRef: any = createRef();

  state: IOwnState = {
    answer: '',
    hideAnswer: true
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    this.setState({answer: event.target.value});
  }

  onEnter = () => {
    this.setState({ hideAnswer: false });
  }

  onExit = () => {
    this.setState({ hideAnswer: true });
  }

  componentDidUpdate(prevProps: IOwnProps): void {
    const {
      flashcardStatus
    } = this.props;
   
    if (flashcardStatus === FlashcardStatus.DEFAULT && prevProps.flashcardStatus !== flashcardStatus) {
      this.inputRef.focus();
    } else if (flashcardStatus !== FlashcardStatus.DEFAULT) {
      this.inputRef.blur();
    }
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
        autoFocus
        inputRef={(input) => this.inputRef = input}
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
      props: {
        answer,
        classes: {
          input,
          typography
        }
      },
      state: {
        hideAnswer
      }
    } = this;

    return (
      <Box>
        <Typography className={typography} variant="subtitle2">Answer</Typography>
        <Input
          value={hideAnswer ? '' : answer}
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

    return (
      <Box>
        {flashcardStatus !== FlashcardStatus.HINT ?
          this.renderInput() :
          null}
        <Collapse
          in={
            flashcardStatus === FlashcardStatus.WRONG || 
            flashcardStatus === FlashcardStatus.HINT
          }
          onEnter={this.onEnter}
          onExit={this.onExit}>
          <Box pt={1.5}>
            {this.renderCorrectAnswer()}
          </Box>
        </Collapse>
      </Box>     
    );
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
    );
  }
}

export default withStyles(styles)(AnswerCard);