import React, { Component, ReactNode } from 'react';
import { Box, withStyles } from '@material-ui/core';

import ProgressBar from './components/progress-bar';
import QuestionCard from './components/question-card';

import styles from './styles';
import { IOwnProps } from './types';
import { QuestionCardType } from './components/question-card/types';

class Quiz extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      classes: {
        box
      }
    } = this.props;

    return(
      <Box p={5} className={box}>
        <ProgressBar totalQuestion={10} currentQuestion={2}/>
        <Box pt={2.5}>
          <QuestionCard 
          flashCardType={QuestionCardType.QUESTIONAIRE}
          questionObject={{
            question: 'What is the capital city of Sri Lanka?',
            hint: 'hello world'
          }}/>
        </Box>
        <Box pt={2.5}>

        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Quiz);