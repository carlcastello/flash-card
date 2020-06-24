import React, { Component, ReactNode, ReactElement } from 'react';
import {
  withStyles,
  Modal,
  Paper,
  Box,
  Grid,
  Button,
  IconButton,
  LinearProgress
} from '@material-ui/core';
import { Close } from '@material-ui/icons';


import styles from './styles';
import { IOwnProps } from './types'

export class StyledModal extends Component<IOwnProps> {

  renderCloseIcon(): ReactElement {
    const {
      onIgnore,
      classes: {
        closeButton
      }
    } = this.props;

    return (
      <IconButton
        onClick={onIgnore}
        className={closeButton}>
        <Close/>
      </IconButton>
    )
  }
  
  renderButtons(): ReactNode {
    const {
      onIgnore,
      onConfirm
    } = this.props;

    return (
      <Grid 
        container
        spacing={1}
        justify="flex-end">
        <Grid item>
          <Button onClick={onIgnore}>
            No
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={onConfirm} color="secondary">
            Yes
          </Button>
        </Grid>
      </Grid>
    );
  }

  renderLoadingBar(): ReactNode {
    return (
      <Box width="100%" flex={true} flexDirection="row" pb={2.5}>
        <LinearProgress color="secondary"/>
      </Box>
    )
  }

  render(): ReactNode {
    const {
      isOpen,
      onConfirm,
      onIgnore,
      children,
      isLoading,
      classes: {
        modalContainer,
        modalPaperContainer
      }
    } = this.props;

    return (
      <Modal
        open={isOpen}
        onClose={onIgnore}
        className={modalContainer}>
        <Paper
          elevation={3}
          className={modalPaperContainer}>
          <Box px={5} pt={5} pb={onConfirm ? 2.5 : 5} position="relative">
            {this.renderCloseIcon()}
            {children}
            {!isLoading && onConfirm ?
              this.renderButtons() :
              null}
            {isLoading ? 
              this.renderLoadingBar() :
              null}
          </Box>
        </Paper>
      </Modal>
    )
  }
}

export default withStyles(styles)(StyledModal)