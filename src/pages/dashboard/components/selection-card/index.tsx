import React, { Component, ReactNode } from 'react';

import { withStyles } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';


class SelectionCard extends Component<IOwnProps, IOwnState> {
  render(): ReactNode {
    return (<div></div>);
  }
}

export default withStyles(styles)(SelectionCard);

