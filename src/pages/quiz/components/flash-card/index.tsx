import React, { Component, ReactNode, createRef } from 'react';

import { withStyles, Box } from '@material-ui/core';

import QuestionCard from './components/question-card';
import AnswerCard from './components/answer-card';
import ButtonCard from './components/button-card';

import { IOwnProps, IOwnState, FlashCardStatus } from './types';
import styles from './styles';


class FlashCard extends Component<IOwnProps, IOwnState> {

  answerCardRef: any = createRef();   

  state = {
    flashCardStatus: FlashCardStatus.DEFAULT,
  }

  onSubmit = (): void => {
    const answer = this.answerCardRef.current.state.answer;

    const {
      flashCardObject: {
        answer: correctAnswer
      },
      update,
    } = this.props;
    var flashCardStatus: FlashCardStatus = FlashCardStatus.DEFAULT;

    if (answer === correctAnswer) {
      flashCardStatus = FlashCardStatus.CORRECT;
    } else {
      flashCardStatus = FlashCardStatus.WRONG;
    }

    this.setState(
      { flashCardStatus },
      () => update(flashCardStatus)
    );
  }


  onNext = (): void => {
    const {
      next,
    } = this.props;

    this.setState(
      { flashCardStatus: FlashCardStatus.DEFAULT },
      () => {
        next();
        this.answerCardRef.current.setState({answer: ''});
      }
    )
  }

  onHint = (): void => {
    const {
      update,
    } = this.props;
    var flashCardStatus: FlashCardStatus = FlashCardStatus.HINT;
    this.setState(
      { flashCardStatus },
      () => update(flashCardStatus)
    );
  }

  renderQuestionCard(): ReactNode {
    const {
      flashCardObject: {
        question,
        subQuestion,
        questionType,
        hint
      }
    } = this.props;
    return (
      <QuestionCard 
        questionObject={{
          question,
          subQuestion,
          hint,
          questionType
        }}/>
    );
  }

  renderAnswerCard(): ReactNode {
    const {
      flashCardStatus
    } = this.state;
    return (
      <Box pt={2.5}>
        <AnswerCard 
          flashCardStatus={flashCardStatus}
          ref={this.answerCardRef}/>
      </Box>
    );
  }

  renderButtonCard(): ReactNode {
    const {
      onSubmit,
      onNext,
      state: {
        flashCardStatus
      },
    } = this;
    return (
      <Box pt={2.5}>
        <ButtonCard 
          flashCardStatus={flashCardStatus}
          next={onNext}
          submit={onSubmit}/>
      </Box>
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

export default withStyles(styles)(FlashCard);