import React, { Component, ReactNode } from 'react';

import { withStyles, Box, LinearProgress, Typography } from '@material-ui/core';

import styles from './styles';
import { IOwnProps } from './types';


class ProgressBar extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      flashcardStatus,
      currentQuestion,
      totalQuestion,
      classes: {
        progressBarContainer,
        progressBar,
        title
      }
    } = this.props;
    
    const percentage = (currentQuestion / totalQuestion) * 100;

    return(
      <Box className={progressBarContainer}>
        <Typography variant="subtitle1" className={title}>
          Question {currentQuestion} of {totalQuestion} 
        </Typography>
        <LinearProgress
          variant="determinate"
          value={percentage}
          className={[progressBar, flashcardStatus].join(' ')}/>
      </Box>
    );
  }
}

export default withStyles(styles)(ProgressBar);