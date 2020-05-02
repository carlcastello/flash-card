import React, { Component, ReactNode } from 'react';
import { IOwnProps } from './types';
import { withStyles } from '@material-ui/core';
import styles from './styles';


class AnswerCard extends Component<IOwnProps> {
  render(): ReactNode {
    return (<div></div>)
  }
}

export default withStyles(styles)(AnswerCard);