import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Typography, Box } from '@material-ui/core';

import { IQuizSummaryCard } from "../../../../commons/types";

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import InformationCard from '../../../components/information-card';
import AddCard from '../../../components/add-card';
import LoadingScreen from '../../../components/loading-screen';
import { Link } from 'react-router-dom';


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
      createdQuizes,
      classes: {
        informationCardLink
      }
    } = this.props;

    return (
      <Grid container spacing={2}>
        {createdQuizes.map(({id, quizSummary}: IQuizSummaryCard) => (
          <Grid key={id} item sm={4}>
            <Link to={`/quiz/${id}`} className={informationCardLink}>
              <InformationCard
                hasHoverEffect
                id={id}
                title={quizSummary.title}
                description={quizSummary.description}
                onEdit={this.onQuizEdit}
                onDelete={this.onQuizDelete}/>
            </Link>
          </Grid> 
        ))}
        <Grid item sm={4}>
          <AddCard onClick={this.onQuizCreate} hasHoverEffect/>
        </Grid>
      </Grid>
    );
  }
 
  renderDashboard(): ReactNode {
    const {
      classes: {
        gridContainer
      }
    } = this.props;
    return (
      <Box>
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={gridContainer}>
          <Grid item sm={10}>
            <Typography variant="h4">
              My Quizes
            </Typography>
          </Grid>
          <Grid item sm={10}>
            {this.renderSelectionCard()}
          </Grid>
        </Grid>
        {/* {this.renderDeleteModal()} */}
      </Box>
    );
  }

  render(): ReactNode {
    const {
      isFullPageLoading,
    } = this.props;

    return (
      isFullPageLoading ?
        <LoadingScreen>
          Fetching Dashboard Data...
        </LoadingScreen> :
        this.renderDashboard()
    )
  }
}

export default withStyles(styles)(Dashboard);