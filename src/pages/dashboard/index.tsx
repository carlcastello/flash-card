import React, { Component, ReactNode } from 'react';

import { withStyles, Box } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import Navbar from './components/navbar';
import SelectionCardGrid from './components/selection-card-grid';


class Dashboard extends Component<IOwnProps, IOwnState> {

  renderNavbar(): ReactNode {
    return (
      <Navbar/>
    );
  }

  renderDashboardGrid(): ReactNode {
    return (

      <SelectionCardGrid/>
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
        <Box py={5}>
          {this.renderDashboardGrid()}
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(Dashboard);