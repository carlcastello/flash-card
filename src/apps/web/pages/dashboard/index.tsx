import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Typography, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';


import SelectionCard from '../../components/selection-card';
 
class Dashboard extends Component<IOwnProps, IOwnState> {

  renderSelectionCard(): ReactNode {
    return (
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <SelectionCard/>
        </Grid>
        <Grid item sm={4}>
          <SelectionCard/>
        </Grid>
        <Grid item sm={4}>
          <SelectionCard/>
        </Grid>
        <Grid item sm={4}>
          <SelectionCard/>
        </Grid>
      </Grid>
    );
  }
 
  render(): ReactNode {
    const {
      classes: {
        titleTypography,
        iconButton,
        gridContainer
      }
    } = this.props;
    return (
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
        className={gridContainer}>
        <Grid item direction="row" sm={10}>
          <Typography className={titleTypography} variant="h4">
            Hello World
          </Typography>
          <IconButton className={iconButton}>
            <AddCircleOutline/>
          </IconButton>
        </Grid> 
        <Grid item sm={10}>
          {this.renderSelectionCard()}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dashboard);