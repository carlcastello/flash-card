import React, { Component, ReactNode, createRef } from 'react';

import { withStyles, Box } from '@material-ui/core';

import QuestionCard from './components/question-card';
import AnswerCard from './components/answer-card';
import ButtonCard from './components/button-card';

import { IOwnProps, IOwnState, FlashcardStatus } from './types';
import styles from './styles';


class Flashcard extends Component<IOwnProps, IOwnState> {

  answerCardRef: any = createRef();   

  state = {
    flashcardStatus: FlashcardStatus.DEFAULT,
  }

  onSubmit = (): void => {
    const answer = this.answerCardRef.current.state.answer;

    const {
      question: {
        answer: correctAnswer
      },
      update,
    } = this.props;

    var flashcardStatus: FlashcardStatus = FlashcardStatus.DEFAULT;

    if (answer === correctAnswer) {
      flashcardStatus = FlashcardStatus.CORRECT;
    } else {
      flashcardStatus = FlashcardStatus.WRONG;
    }

    this.setState(
      { flashcardStatus },
      () => update(flashcardStatus)
    );
  }


  onNext = (): void => {
    const {
      next,
    } = this.props;

    this.setState(
      { flashcardStatus: FlashcardStatus.DEFAULT },
      () => {
        next();
        this.answerCardRef.current.setState({answer: ''});
      }
    )
  }

  onSkip = (): void => {
    const {
      update,
    } = this.props;
    var flashcardStatus: FlashcardStatus = FlashcardStatus.HINT;
    this.setState(
      { flashcardStatus },
      () => update(flashcardStatus)
    );
  }

  renderQuestionCard(): ReactNode {
    const {
      state: {
        flashcardStatus,
      },
      props: {
        question: {
          question,
          subQuestion,
          hint
        }
      }
    } = this;
    return (
      <QuestionCard
        flashcardStatus={flashcardStatus}
        onSkip={this.onSkip}
        questionObject={{
          question,
          subQuestion,
          hint
        }}/>
    );
  }

  renderAnswerCard(): ReactNode {
    const {
      props: {
        question: {
          answer,
        }
      },
      state: {
        flashcardStatus
      }
    } = this;
    return (
      <AnswerCard 
        answer={answer}
        flashcardStatus={flashcardStatus}
        ref={this.answerCardRef}/>
    );
  }

  renderButtonCard(): ReactNode {
    const {
      onSubmit,
      onNext,
      state: {
        flashcardStatus
      },
    } = this;
    return (
      <ButtonCard 
        flashcardStatus={flashcardStatus}
        next={onNext}
        submit={onSubmit}/>
    )
  }

  render(): ReactNode {
    return(
      <Box pt={2.5} px={5}>
        <form>
          {this.renderQuestionCard()}
          {this.renderAnswerCard()}
          {this.renderButtonCard()}
        </form>
      </Box>
    );
  }
}

export default withStyles(styles)(Flashcard);