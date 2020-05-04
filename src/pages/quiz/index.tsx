import React, { Component, ReactNode } from 'react';

import { Box, withStyles, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import ProgressBar from './components/progress-bar';
import FlashCards from './components/flash-card';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';
import { FlashCardStatus } from './components/flash-card/types';

class Quiz extends Component<IOwnProps, IOwnState> {

  state = {
    questionIndex: 0,
    currentflashCardStatus: FlashCardStatus.DEFAULT
  }

  onUpdateFlashCard = (flashCardStatus: FlashCardStatus) => {
    this.setState({ currentflashCardStatus: flashCardStatus });
  }

  onNextFlashCard = () => {
    console.log('Next Flash Card')
    this.setState((state) => ({ 
      ...state,
      questionIndex: state.questionIndex + 1
    }));
  }

  renderProgressBar(): ReactNode {
    const {
      classes: {
        progressBarContainer,
        iconButton
      }
    } = this.props;
    return (
      <Box px={5} className={progressBarContainer}>
        <ProgressBar
          currentQuestion={this.state.questionIndex}
          totalQuestion={this.props.flashCards.length}/>
        <IconButton className={iconButton}>
          <CloseIcon/>
        </IconButton>
      </Box>
    );
  }

  renderFlashCard(): ReactNode {
    const {
      props: {
        flashCards,
      },
      state: {
        questionIndex,
      }
    } = this;
    return (
      <FlashCards 
        flashCardObject={flashCards[questionIndex]}
        update={this.onUpdateFlashCard}
        next={this.onNextFlashCard}/>
    )
  }

  render(): ReactNode {
    const {
      classes: {
        boxContent,
        boxContainer
      }
    } = this.props;

    return(
      <Box className={boxContainer}>
        <Box className={boxContent}>
          {this.renderProgressBar()}
          {this.renderFlashCard()}
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Quiz);