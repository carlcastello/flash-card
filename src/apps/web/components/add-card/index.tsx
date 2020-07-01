import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { IOwnProps } from './types';
import styles from './styles';

class AddCard extends Component<IOwnProps> {
  render(): ReactNode {
    const {
      onClick,
      classes: {
        paperContainer,
        boxContainer
      }
    } = this.props;

    return (
      <Paper className={paperContainer} elevation={3} onClick={onClick}>
        <Box className={boxContainer}>
          <Add fontSize="large"/>
        </Box>
      </Paper>
    )
  }
}

export default withStyles(styles)(AddCard);