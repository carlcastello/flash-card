import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

export class AddCard extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    paperElevation: 3,
  }

  onMouseHoverAction = (paperElevation: number) => (): void => {
    const {
      hasHoverEffect
    } = this.props;

    if (hasHoverEffect) {
      this.setState({ paperElevation });
    }
  }

  render(): ReactNode {
    const {
      state: {
        paperElevation
      },
      props: {
        onClick,
        classes: {
          paperContainer,
          boxContainer
        }
      }
    } = this;

    return (
      <Paper
        className={paperContainer}
        elevation={paperElevation}
        onClick={onClick}
        onMouseOver={this.onMouseHoverAction(6)}
        onMouseOut={this.onMouseHoverAction(3)}>
        <Box className={boxContainer}>
          <Add fontSize="large"/>
        </Box>
      </Paper>
    )
  }
}

export default withStyles(styles)(AddCard);