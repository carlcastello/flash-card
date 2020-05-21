import React, {Component, ReactNode} from 'react';
import { withStyles, Typography, Button, Paper, Box } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { FlashcardStatus } from '../../types';

class ButtonCard extends Component<IOwnProps, IOwnState> {

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
          <Button className={[button, flashcardStatus].join(' ')} onClick={this.onClick} type="submit">
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