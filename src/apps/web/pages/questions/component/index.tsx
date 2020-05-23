import React, { Component, ReactNode } from 'react';

import { withStyles } from '@material-ui/core';

import { IOwnProps } from './types';
import styles from './styles';


class Question extends Component<IOwnProps> {
  render(): ReactNode {
    return (
      <div></div>
    )
  }
}

export default withStyles(styles)(Question);