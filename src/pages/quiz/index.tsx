import React, { Component, ReactNode } from 'react';

import { Box, withStyles, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import ProgressBar from './components/progress-bar';
import FlashCards from './components/flash-card';
import { FlashCardStatus } from './components/flash-card/types';
import CompletionCard from './components/completion-card';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';
import { QuizStatus } from './enum';

class Quiz extends Component<IOwnProps, IOwnState> {

  state = {
    questionIndex: 0,
    progressIndex: 0,
    currentflashCardStatus: FlashCardStatus.DEFAULT,
    quizStatus: QuizStatus.IN_PROGRESS,
  }

  onCloseQuiz = () => {
    const {
      quizStatus,
    } = this.state;
    if (quizStatus === QuizStatus.COMPLETED) {
      console.log('Close Quiz');
    }
  }

  onUpdateFlashCard = (flashCardStatus: FlashCardStatus) => {
    this.setState((state, props) => ({
        ...state,
        currentflashCardStatus: flashCardStatus, 
        progressIndex: state.progressIndex + 1
    }));
  }

  onNextFlashCard = () => {
    this.setState(
      (state, props) => {
        if (state.questionIndex < props.flashCards.length - 1) {
          return ({ 
            ...state,
            questionIndex: state.questionIndex + 1
          });
        } else {
          return ({ 
            ...state,
            quizStatus: QuizStatus.COMPLETED,
          });
        }
      },
      () => this.onCloseQuiz()
    )
  }

  renderProgressBar(): ReactNode {
    const {
      state: {
        progressIndex
      },
      props: {
        flashCards,
        classes: {
          progressBarContainer,
          iconButton
        }
      }
    } = this;
    return (
      <Box px={5} className={progressBarContainer}>
        <ProgressBar
          currentQuestion={progressIndex}
          totalQuestion={flashCards.length}/>
        <IconButton className={iconButton} onClick={this.onCloseQuiz}>
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

  renderCompletionCard(): ReactNode {
    return (
      <CompletionCard/>
    )
  }

  render(): ReactNode {
    const {
      state: {
        quizStatus,
      },
      props: {
          classes: {
          boxContent,
          boxContainer
        }
      }
    } = this;

    return(
      <Box className={boxContainer}>
        <Box className={boxContent}>
          {quizStatus === QuizStatus.COMPLETED ? 
            this.renderCompletionCard() :
            <Box>
              {this.renderProgressBar()}
              {this.renderFlashCard()}
            </Box>
          }
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Quiz);