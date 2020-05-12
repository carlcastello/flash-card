import React, { Component, ReactNode } from 'react';


import { withStyles, Box, Typography } from '@material-ui/core';

import { IOwnProps } from './types';
import styles from './styles';

class CompletionCard extends Component<IOwnProps> {
  render(): ReactNode {
    return (
      <Box>
        <Typography variant="h1">
          Quiz Complete
        </Typography>
      </Box>
    )
  }
} 

export default withStyles(styles)(CompletionCard);