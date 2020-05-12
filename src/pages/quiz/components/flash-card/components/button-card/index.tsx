import React, {Component, ReactNode} from 'react';
import { withStyles, Typography, Button, Paper, Box } from '@material-ui/core';

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

  render(): ReactNode {
    const {
      flashCardStatus,
      classes: {
        button
      }
    } = this.props;

    return (
      <Box pt={2.5}>
        <Paper elevation={3}>
          <Button className={[button, flashCardStatus].join(' ')} onClick={this.onClick} type="submit">
            <Typography variant="h6">
              {flashCardStatus !== FlashCardStatus.DEFAULT ? 'Next' : 'Submit'}
            </Typography>
          </Button>
        </Paper>
      </Box>
    )
  }
} 

export default withStyles(styles)(ButtonCard);