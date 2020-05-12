import React, { Component, ReactNode } from 'react';

import { withStyles, Box } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import Navbar from './components/navbar';


class Dashboard extends Component<IOwnProps, IOwnState> {

  renderNavbar(): ReactNode {
    return (
      <Navbar/>
    );
  }

  render(): ReactNode {
    const {
      classes: {
        boxContainer,
      }
    } = this.props;
    return (
      <Box className={boxContainer}>
        {this.renderNavbar()}        
      </Box>
    )
  }
}

export default withStyles(styles)(Dashboard);