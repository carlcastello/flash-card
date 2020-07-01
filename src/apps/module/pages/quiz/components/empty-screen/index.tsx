import React, { Component, ReactNode } from 'react';
import {
  withStyles,
  Box,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps } from './types';


class EmptyScreen extends Component<IOwnProps> {

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
    )
  }

  renderButton(): ReactNode {
    const {
      onAddQuestion
    } = this.props;

    return (
      <Box
        mt={3}
        px={5}
        display="flex"
        justifyContent="center">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onAddQuestion}>
          Add Questions              
        </Button>
      </Box>
    );
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
            This Quiz is Empty!
          </Typography>
          {this.renderButton()}
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(EmptyScreen)