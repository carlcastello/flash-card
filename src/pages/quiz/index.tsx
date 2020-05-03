import React, { Component, ReactNode } from 'react';
import { Box, withStyles } from '@material-ui/core';

import ProgressBar from './components/progress-bar';
import FlashCards from './components/flash-card';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';
import { FlashCardStatus } from './components/flash-card/types';

class Quiz extends Component<IOwnProps, IOwnState> {

  state = {
    questionIndex: 0,
  }

  onUpdateFlashCard = (flashCardStatus: FlashCardStatus) => {
    console.log(flashCardStatus);
  }

  onNextFlashCard = () => {
    console.log('Hlelo');
  }

  renderProgressBar(): ReactNode {
    return (
      <ProgressBar
        currentQuestion={this.state.questionIndex}
        totalQuestion={this.props.flashCards.length}/>
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
        updateFlashCard={this.onUpdateFlashCard}
        nextFlashCard={this.onNextFlashCard}/>
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