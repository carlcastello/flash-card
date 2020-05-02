import React, { Component, ReactNode } from 'react';
import { Box, withStyles } from '@material-ui/core';

import ProgressBar from './components/progress-bar';
import FlashCard from './components/flash-card';

import styles from './styles';
import { IOwnProps } from './types';
import { EFlashCardType } from './components/flash-card/types';

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
        <Box py={2.5}>
          <FlashCard flashCardType={EFlashCardType.QUESTIONAIRE}/>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Quiz);