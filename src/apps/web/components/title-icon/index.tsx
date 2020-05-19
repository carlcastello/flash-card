import React, { Component, ReactNode } from 'react';

import { withStyles, Box, Typography, IconButton } from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps, IOwnState } from './types';


class TitleIcon extends Component<IOwnProps, IOwnState> {

  state: IOwnState = {
    isToggled: false,
  }

  onIconClick = (): void => {
    const {
      onClick
    } = this.props;
    this.setState((state: IOwnState) => ({
      isToggled: !state.isToggled,
    }), onClick)
  };

  render(): ReactNode {
    const {
      state: {
        isToggled
      },
      props: {
        children,
        classes: {
          titleTypography,
          iconButton
        }
      }
    } = this;

    return (
      <Box>
        <Typography className={titleTypography} variant="h4">
          {children}
        </Typography>
        <IconButton className={iconButton} onClick={this.onIconClick}>
          {isToggled ?
            <RemoveCircleOutline/> :
            <AddCircleOutline/>}
        </IconButton>
      </Box>
    )
  }
}

export default withStyles(styles)(TitleIcon);