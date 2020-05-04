import React, {Component, ReactNode} from 'react';
import { withStyles, Typography, Button, Paper } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashCardStatus } from '../../types';

class ButtonCard extends Component<IOwnProps, IOwnState> {

  onClick = (event: any): void => {
    event.preventDefault();

    const {
      props: { 
        flashCardStatus,
        submit,
        next,
      }
    } = this;

    if (flashCardStatus === FlashCardStatus.DEFAULT) {
      submit();
    } else {
      next();
    }
    
  }

  classSwicth = (): number => {
    const {
      flashCardStatus
    } = this.props;

    switch (flashCardStatus) {
      case FlashCardStatus.HINT:
        return 2;
      case FlashCardStatus.WRONG:
        return 1;
      case FlashCardStatus.CORRECT:
      case FlashCardStatus.DEFAULT:
      default:
        return 0;
    }
  }

  render(): ReactNode {
    const {
      flashCardStatus,
      classes: {
        button,
        correctButton,
        wrongButton, 
        hintButton,
      }
    } = this.props;

    const buttonColor = [
      correctButton,
      wrongButton,
      hintButton
    ][this.classSwicth()];
    
    return (
      <Paper elevation={3}>
        <Button className={[button, buttonColor].join(' ')} onClick={this.onClick} type="submit">
          <Typography variant="h6">
            {flashCardStatus !== FlashCardStatus.DEFAULT ? 'Next' : 'Submit'}
          </Typography>
        </Button>
      </Paper>
    )
  }
} 

export default withStyles(styles)(ButtonCard);