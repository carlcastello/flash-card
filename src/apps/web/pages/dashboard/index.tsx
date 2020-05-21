import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Typography, IconButton } from '@material-ui/core';
import { AddCircleOutline } from '@material-ui/icons';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import InformationCard from '../../components/information-card';
import TitleIcon from '../../components/title-icon';
 
class Dashboard extends Component<IOwnProps, IOwnState> {

  renderSelectionCard(): ReactNode {
    return (
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <InformationCard
            title="Quiz 1"
            description="The quick brown fox jumps over the lazy dog."/>
        </Grid>
        <Grid item sm={4}>
          <InformationCard
            title="Quiz 2"
            description="The quick brown fox jumps over the lazy dog."/>
        </Grid>
        <Grid item sm={4}>
          <InformationCard
            title="Quiz 3"
            description="The quick brown fox jumps over the lazy dog."/>
        </Grid>
        <Grid item sm={4}>
          <InformationCard
            title="Quiz 4"
            description="The quick brown fox jumps over the lazy dog."/>
        </Grid>
      </Grid>
    );
  }
 
  render(): ReactNode {
    const {
      classes: {
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
<<<<<<< HEAD
          <TitleIcon 
            onClick={() => { console.log("hello world")}}>
            Quizes
          </TitleIcon>
        </Grid>
=======
          <Typography className={titleTypography} variant="h4">
            Hello World
          </Typography>
          <IconButton className={iconButton}>
            <AddCircleOutline/>
          </IconButton>
        </Grid> 
>>>>>>> 3677eb5a0f9829d1566e6d47f97a7bf3857b3b68
        <Grid item sm={10}>
          {this.renderSelectionCard()}
        </Grid>
      </Grid>
    );
  }
<<<<<<< HEAD

  render(): ReactNode {
    const {
      classes: {
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
          <TitleIcon 
            onClick={() => { console.log("hello world")}}/>
        </Grid>
        <Grid item sm={10}>
          {this.renderSelectionCard()}
        </Grid>
      </Grid>
    )
  }
=======
>>>>>>> 3677eb5a0f9829d1566e6d47f97a7bf3857b3b68
}

export default withStyles(styles)(Dashboard);