import React, { Component, ReactNode } from 'react';

import { Box, withStyles, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import ProgressBar from '../components/progress-bar';
import Flashcards from '../components/flash-card';
import { FlashcardStatus } from '../components/flash-card/types';
import CompletionCard from '../components/completion-card';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';
import { QuizStatus } from './enum';

class Quiz extends Component<IOwnProps, IOwnState> {

  state = {
    questionIndex: 0,
    progressIndex: 0,
    currentFlashcardStatus: FlashcardStatus.DEFAULT,
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

  onUpdateFlashcard = (currentFlashcardStatus: FlashcardStatus) => {
    this.setState((state) => ({
        ...state,
        currentFlashcardStatus, 
        progressIndex: state.progressIndex + 1
    }));
  }

  onNextFlashcard = () => {
    this.setState(
      (state, props) => {
        if (state.questionIndex < props.flashcards.length - 1) {
          return ({ 
            ...state,
            currentFlashcardStatus: FlashcardStatus.DEFAULT,
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
        progressIndex,
        currentFlashcardStatus
      },
      props: {
        flashcards,
        classes: {
          progressBarContainer,
          iconButton
        }
      }
    } = this;
    console.log(currentFlashcardStatus)
    return (
      <Box px={5} className={progressBarContainer}>
        <ProgressBar
          flashcardStatus={currentFlashcardStatus}
          currentQuestion={progressIndex}
          totalQuestion={flashcards.length}/>
        <IconButton className={iconButton} onClick={this.onCloseQuiz}>
          <CloseIcon/>
        </IconButton>
      </Box>
    );
  }

  renderFlashcard(): ReactNode {
    const {
      props: {
        flashcards,
      },
      state: {
        questionIndex,
      }
    } = this;

    return (
      <Flashcards 
        flashcardObject={flashcards[questionIndex]}
        update={this.onUpdateFlashcard}
        next={this.onNextFlashcard}/>
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
              {this.renderFlashcard()}
            </Box>
          }
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Quiz);