import React, { Component, ReactNode } from 'react';

import { withStyles, Paper, Typography, Box, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';


class SelectionCard extends Component<IOwnProps, IOwnState> {
  render(): ReactNode {
    const { 
      classes: {
        boxContainer,
        titleTypography,
        editIconButton,
      }
    } = this.props;
    return (
      <Paper elevation={3}>
        <Box p={2} className={boxContainer}>
          <Typography variant="h5" className={titleTypography}>
            Quiz 1
          </Typography>
          <IconButton className={editIconButton}>
            <Add fontSize="small"/>
          </IconButton>
          <Typography variant="subtitle2">
            The quick brown fox jumps over the lazy dog.
          </Typography>
        </Box>
      </Paper>
    );
  }
}

export default withStyles(styles)(SelectionCard);

