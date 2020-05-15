import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Typography, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import SelectionCard from './selection-card';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';



class SelectionCardGrid extends Component<IOwnProps, IOwnState> {
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
            <AddCircleOutlineIcon/>
          </IconButton>
        </Grid>
        <Grid item sm={10}>
          {this.renderSelectionCard()}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(SelectionCardGrid);