import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box } from '@material-ui/core';

import styles from './styles';
import { IOwnProps, EFlashCardType} from './types';


class FlashCard extends Component<IOwnProps> {

  renderWordVariant(): ReactNode {
    return (
      <Box py={7} px={2}>
        <Typography variant="h4">Querer</Typography>
        <Typography variant="body1">v. irregular</Typography>
      </Box>
    )    
  }


  renderQuestionaireVariant(): ReactNode {
    return (
      <Box py={7} px={2}>
        <Typography variant="body1">
          What is the capital of Sri Lanka?
        </Typography>
      </Box>
    )
  }

  renderFlashCard(): ReactNode {
    const { flashCardType } = this.props;
    if (flashCardType === EFlashCardType.WORD) {
      return (this.renderWordVariant());
    } else if (flashCardType === EFlashCardType.QUESTIONAIRE) {
      return (this.renderQuestionaireVariant());
    }
  }

  render(): ReactNode {
    const {
      classes: {
        paper
      }
    } = this.props;
    return (
      <Paper className={paper} elevation={3}>
        {this.renderFlashCard()}
      </Paper>
    );
  }
}


export default withStyles(styles)(FlashCard);