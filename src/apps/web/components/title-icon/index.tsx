import React, { Component, ReactNode } from 'react';

import { withStyles, Box, Typography, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

import styles from './styles';
import { IOwnProps } from './types';


class TitleIcon extends Component<IOwnProps> {

  render(): ReactNode {
    const {
      children,
      classes: {
        titleTypography,
        iconButton
      }
    } = this.props;

    return (
      <Box>
        <Typography className={titleTypography} variant="h4">
          {children}
        </Typography>
        <IconButton className={iconButton}>
          <AddCircleOutline/>
        </IconButton>
      </Box>
    )
  }
}

export default withStyles(styles)(TitleIcon);