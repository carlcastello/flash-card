import React, { Component, ReactNode } from 'react';

import { withStyles, Grid } from '@material-ui/core';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import InformationCard from '../../../components/information-card';
import TitleIcon from '../../../components/title-icon';
import { IQuizSummary } from '../types';


class Dashboard extends Component<IOwnProps, IOwnState> {

  componentDidMount() {
    const {
      fetchCreatedQuizes
    } = this.props;   
    fetchCreatedQuizes();
  }

  renderSelectionCard(): ReactNode {
    const {
      createdQuizes
    } = this.props;
    return (
      <Grid container spacing={2}>
        {createdQuizes.map((quiz: IQuizSummary) => (
          <Grid key={quiz.id} item sm={4}>
            <InformationCard
              title={quiz.title}
              description={quiz.description}/>
          </Grid>          
        ))}
      </Grid>
    );
  }
 

  renderDashboardGrid(): ReactNode {
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
        <Grid item sm={10}>
          <TitleIcon 
            onClick={() => { console.log("hello world")}}>
            Carl Castello
          </TitleIcon>
        </Grid>
        <Grid item sm={10}>
          {this.renderSelectionCard()}
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
        <Grid item sm={10}>
          <TitleIcon 
            onClick={() => { console.log("hello world")}}>
            Quizes
          </TitleIcon>  
        </Grid>
        <Grid item sm={10}>
          {this.renderSelectionCard()}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Dashboard);