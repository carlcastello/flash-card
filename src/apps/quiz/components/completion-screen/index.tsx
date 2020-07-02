import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Box,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { IOwnProps } from './types';
import styles from './styles';

export class CompletionScreen extends Component<IOwnProps> {
  
  renderCloseIcon(): ReactNode {
    const {
      onClose
    } = this.props;
    return (
      <Box
        position="absolute"
        top="0"
        right="0">
        <IconButton
          onClick={onClose}>
          <Close/>
        </IconButton>
      </Box>
    );
  }

  renderButtons(): ReactNode {
    const {
      onReview
    } = this.props;
    return (
      <Box
        mt={3}
        px={5}
        display="flex"
        justifyContent="center">
        <Button variant="outlined" color="primary" size="large" onClick={onReview}>
          Review
        </Button>
      </Box>
    )
  }

  render(): ReactNode {
    return (
      <Box 
        justifyContent="center"
        alignItems="center"
        height="100vh"
        display="flex"
        position="relative">
        <Box
          padding={5}
          position="relative">
          {this.renderCloseIcon()}
          <Typography variant="h3">
            Quiz Complete!!
          </Typography>
          {this.renderButtons()}
        </Box>
      </Box>
    )
  }
} 

export default withStyles(styles)(CompletionScreen)