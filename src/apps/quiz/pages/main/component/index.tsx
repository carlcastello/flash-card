import React, { Component, ReactNode } from 'react';

import {
  Box,
  withStyles,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import ProgressBar from '../../../components/progress-bar';
import Flashcards from '../../../components/flash-card';
import { FlashcardStatus } from '../../../components/flash-card/types';
import CompletionScreen from '../components/completion-screen';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';
import { QuizStatus } from './enum';
import LoadingScreen from '../../../../commons/components/loading-screen';
import StyledModal from '../../../components/styled-modal';
import EmptyScreen from '../components/empty-screen';


export class QuizMainPage extends Component<IOwnProps, IOwnState> {

  state = {
    questionIndex: 0,
    progressIndex: 0,
    currentFlashcardStatus: FlashcardStatus.DEFAULT,
    quizStatus: QuizStatus.IN_PROGRESS,
    confirmModalToogle: false
  }

  redirectToDashboard = () => {
    const {
      history: {
        push
      }
    } = this.props;
    push('/')
  }

  onEditQuiz = () => {
    const {
      match: {
        params: {
          quizId
        }
      },
      history: {
        push
      }
    } = this.props;

    push(`/dashboard/quiz/${quizId}`)
  }

  onCloseQuiz = () => {
    const {
      quizStatus,
    } = this.state;

    if (
      quizStatus === QuizStatus.COMPLETED ||
      quizStatus === QuizStatus.STOPPED
    ) {
      this.redirectToDashboard()
    }
  }

  onCloseIconToggle = () => {
    this.setState(
      (state) => ({
        ...state,
        ...{ confirmModalToogle: !state.confirmModalToogle  }
      })
    );
  }

  onConfirmModal = () => {
    this.setState(
      (state) => ({
        ...state,
        quizStatus: QuizStatus.STOPPED
      }),
      this.onCloseQuiz
    )
  }

  onUpdateFlashcard = (currentFlashcardStatus: FlashcardStatus) => {
    this.setState((state) => ({
        ...state,
        currentFlashcardStatus, 
        progressIndex: state.progressIndex + 1
    }));
  }

  onReviewToggle = () => {
    this.setState({
      quizStatus: QuizStatus.REVIEW,
      progressIndex: 0,
      questionIndex: 0
    });
  }

  onNextFlashcard = () => {
    const {
      props: {
        questions
      },
      state: {
        questionIndex
      }
    } = this

    if (questionIndex < questions.length - 1) {
      this.setState((state) => ({
        ...state,
        currentFlashcardStatus: FlashcardStatus.DEFAULT,
        questionIndex: state.questionIndex + 1
      }));
    } else {
      this.setState({
        quizStatus: QuizStatus.COMPLETED
      })
    }
  }

  componentDidMount() {
    const {
      requiredData,
      fetchQuiz,
      match: {
        params: {
          quizId
        }
      },
    } = this.props;

    if (quizId && requiredData.length !== 0) {
      fetchQuiz(quizId);
    }
  }

  renderProgressBar(): ReactNode {
    const {
      state: {
        progressIndex,
        currentFlashcardStatus
      },
      props: {
        questions,
        classes: {
          progressBarContainer,
          iconButton
        }
      }
    } = this;

    return (
      <Box px={5} className={progressBarContainer}>
        <ProgressBar
          flashcardStatus={currentFlashcardStatus}
          currentQuestion={progressIndex}
          totalQuestion={questions.length}/>
        <IconButton
          className={iconButton}
          onClick={this.onCloseIconToggle}>
          <CloseIcon/>
        </IconButton>
      </Box>
    );
  }

  renderFlashcard(): ReactNode {
    const {
      props: {
        questions,
      },
      state: {
        questionIndex,
      }
    } = this;

    return (
      <Flashcards 
        question={questions[questionIndex]}
        update={this.onUpdateFlashcard}
        next={this.onNextFlashcard}/>
    )
  }

  renderContainer(): ReactNode {
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
          {this.renderFlashcard()}
        </Box>
      </Box>
    );
  }

  renderCloseModal(): ReactNode {
    const {
      confirmModalToogle
    } = this.state;
    
    return (
      <StyledModal
        isOpen={confirmModalToogle}
        onIgnore={this.onCloseIconToggle}
        onConfirm={this.onConfirmModal}>
        <Box pb={4}>
          <Typography>
            Are you sure you want to close this quiz?
          </Typography>
        </Box>
      </StyledModal>
    )
  }

  render(): ReactNode {
    const {
      props: {
        requiredData,
        questions,
      },
      state: {
        quizStatus
      }
    } = this;

    if (requiredData.length !== 0) {
      return (
        <LoadingScreen>
          Loading Quiz...
        </LoadingScreen>
      )  
    } else if (questions.length === 0) {
      return (
        <EmptyScreen
         onClose={this.redirectToDashboard}
         onAddQuestion={this.onEditQuiz}/>
      )
    } else if (quizStatus === QuizStatus.COMPLETED) {
      return (
        <CompletionScreen 
          onClose={this.redirectToDashboard}
          onReview={this.onReviewToggle}/>
      )
    } else {
      return (
        <Box>
          {this.renderContainer()}
          {this.renderCloseModal()}
        </Box>
      )
    }
  }
}

export default withStyles(styles)(QuizMainPage);