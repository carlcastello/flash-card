import React, {Component, ReactNode, createRef} from 'react';
import { withStyles, Typography, Button, Paper, Box } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashcardStatus } from '../../types';

export class ButtonCard extends Component<IOwnProps, IOwnState> {

  buttonRef: any = createRef();

  onClick = (event: any): void => {
    event.preventDefault();

    const {
      props: { 
        flashcardStatus,
        submit,
        next,
      }
    } = this;

    if (flashcardStatus === FlashcardStatus.DEFAULT) {
      submit();
    } else {
      next();
    }
    
  }

  componentDidUpdate(prevProps: IOwnProps): void {
    const {
      flashcardStatus
    } = this.props;
   
    if (flashcardStatus !== FlashcardStatus.DEFAULT) {
      this.buttonRef.focus();
    } else {
      this.buttonRef.blur();
    }
  }

  render(): ReactNode {
    const {
      flashcardStatus,
      classes: {
        button
      }
    } = this.props;

    return (
      <Box pt={2.5}>
        <Paper elevation={3}>
          <Button 
            focusRipple={false}
            buttonRef={(button) => this.buttonRef = button}
            className={[button, flashcardStatus].join(' ')}
            onClick={this.onClick}
            type="submit">
            <Typography variant="h6">
              {flashcardStatus !== FlashcardStatus.DEFAULT ? 'Next' : 'Submit'}
            </Typography>
          </Button>
        </Paper>
      </Box>
    )
  }
} 

export default withStyles(styles)(ButtonCard);