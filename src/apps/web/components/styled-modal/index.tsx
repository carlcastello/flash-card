import React, { Component, ReactNode, ReactElement } from 'react';
import {
  withStyles,
  Modal,
  Paper,
  Box,
  Grid,
  Button,
  IconButton
} from '@material-ui/core';
import { Close } from '@material-ui/icons';


import styles from './styles';
import { IOwnProps } from './types'

class StyledModal extends Component<IOwnProps> {

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

  renderGridButton(): ReactNode {
    const {
      onIgnore,
      onConfirm
    } = this.props
    
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button onClick={onIgnore} fullWidth>
            No
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={onConfirm} color="secondary" fullWidth>
            Yes
          </Button>
        </Grid>
      </Grid>
    )
  }
  

  render(): ReactNode {
    const {
      isOpen,
      onIgnore,
      children,
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
          <Box p={5} position="relative">
            {this.renderCloseIcon()}
            {children}
          </Box>
        </Paper>
      </Modal>
    )
  }
}

export default withStyles(styles)(StyledModal)