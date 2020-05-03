import React, { Component, ReactNode } from 'react';

import { withStyles, Box } from '@material-ui/core';

import QuestionCard from './components/question-card';
import AnswerCard from './components/answer-card';

import { IOwnProps, IOwnState, FlashCardStatus } from './types';
import styles from './styles';


class FlashCard extends Component<IOwnProps, IOwnState> {

  state = {
    flashCardStatus: FlashCardStatus.DEFAULT,
  }

  onSubmit = (answer: string): void => {
    const {
      flashCardObject: {
        answer: correctAnswer
      },
      updateFlashCard,
    } = this.props;
    var flashCardStatus: FlashCardStatus = FlashCardStatus.DEFAULT;

    if (answer === correctAnswer) {
      flashCardStatus = FlashCardStatus.CORRECT;
    } else {
      flashCardStatus = FlashCardStatus.WRONG;
    }

    this.setState(
      { flashCardStatus },
      () => updateFlashCard(flashCardStatus)
    );
  }

  onHint = (): void => {
    const {
      updateFlashCard,
    } = this.props;
    var flashCardStatus: FlashCardStatus = FlashCardStatus.HINT;
    this.setState(
      { flashCardStatus },
      () => updateFlashCard(flashCardStatus)
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
    return (
      <Box pt={2.5}>
        <AnswerCard onSubmit={this.onSubmit}/>
      </Box>
    );
  }

  render(): ReactNode {
    return(
      <Box pt={2.5} px={5}>
        {this.renderQuestionCard()}
        {this.renderAnswerCard()}
      </Box>
    );
  }
}

export default withStyles(styles)(FlashCard);