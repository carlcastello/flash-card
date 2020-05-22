import React, { Component, ReactNode } from 'react';

import { withStyles, Grid } from '@material-ui/core';

import { IQuizSummaryCard } from "../../../../commons/types";

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import InformationCard from '../../../components/information-card';
import TitleIcon from '../../../components/title-icon';
import AddCard from '../../../components/add-card';
import LoadingScreen from '../../../components/loading-screen';


class Dashboard extends Component<IOwnProps, IOwnState> {
  
  onQuizCreate = (): void => {
    const {
      history: {
        push
      }
    } = this.props;

    push('/dashboard/quiz');    
  }

  onQuizEdit = (id: string): void => {
    const {
      history: {
        push
      }      
    } = this.props

    push(`/dashboard/quiz/${id}`);
  }

  onQuizDelete = (id: string): void => {
    
  }

  componentDidMount() {
    const {
      requiredData,
      fetchCreatedQuizes
    } = this.props;   

    if (requiredData.length !== 0) {
      fetchCreatedQuizes();
    }
  }

  renderSelectionCard(): ReactNode {
    const {
      createdQuizes
    } = this.props;

    return (
      <Grid container spacing={2}>
        {createdQuizes.map(({id, quizSummary}: IQuizSummaryCard) => (
          <Grid key={id} item sm={4}>
            <InformationCard
              id={id}
              title={quizSummary.title}
              description={quizSummary.description}
              onEdit={this.onQuizEdit}
              onDelete={this.onQuizDelete}/>
          </Grid> 
        ))}
        <Grid item sm={4}>
          <AddCard onClick={this.onQuizCreate}/>
        </Grid>
      </Grid>
    );
  }
 
  render(): ReactNode {
    const {
      isFullPageLoading,
      classes: {
        gridContainer
      }
    } = this.props;

    return (
      isFullPageLoading ?
        <LoadingScreen>
          Fetching Dashboard Data...
        </LoadingScreen> :
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={gridContainer}>
          <Grid item sm={10}>
            <TitleIcon 
              onClick={this.onQuizCreate}>
              My Quizes
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