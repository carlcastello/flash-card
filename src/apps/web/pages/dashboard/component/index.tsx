import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Typography, Box } from '@material-ui/core';

import { IQuizSummaryCard } from "../../../../commons/types";

import { IOwnProps, IOwnState } from './types';
import styles from './styles';

import InformationCard from '../../../components/information-card';
import AddCard from '../../../components/add-card';
import LoadingScreen from '../../../../commons/components/loading-screen';
import WebModal from '../../../components/styled-modal';

class Dashboard extends Component<IOwnProps, IOwnState> {
  
  state = {
    toggleModuleId: '',
    moduleModalOpen: false,
  }

  onQuizCreate = (): void => {
    const {
      history: {
        push
      }
    } = this.props;

    push('/dashboard/quiz');
  }

  onQuizClick = (quizId: string) => (): void => {
    const {
      history: {
        push
      }
    } = this.props;

    push(`/quiz/${quizId}`);
  }

  onQuizEdit = (id: string): void => {
    const {
      history: {
        push
      }
    } = this.props

    push(`/dashboard/quiz/${id}`);
  }

  onQuizDelete = (): void => {
    const {
      state: {
        toggleModuleId,
      },
      props: {
        deleteCreatedQuiz
      }
    } = this;

    deleteCreatedQuiz(toggleModuleId).then(() => 
      this.onQuizDeleteToggle('')
    )
  }

  onQuizDeleteToggle = (moduleId: string): void => {
    this.setState((state) => ({
      ...state,
      toggleModuleId: moduleId,
      moduleModalOpen: !state.moduleModalOpen,
    })
  )}

  componentDidMount() {
    const {
      requiredData,
      fetchCreatedQuizes
    } = this.props;   

    if (requiredData.length !== 0) {
      fetchCreatedQuizes();
    }
  }

  renderDeleteModal(): ReactNode {
    const {
      state: {
        moduleModalOpen
      },
      props: {
        isDeletingQuiz
      }
    } = this;

    return (
      <WebModal 
        isOpen={moduleModalOpen}
        onIgnore={() => this.onQuizDeleteToggle('')}
        onConfirm={this.onQuizDelete}
        isLoading={isDeletingQuiz}>
        <Box pb={4}>
          <Typography variant="h4" align="center">
            Are you sure to delete this Quiz?
          </Typography>
        </Box>
      </WebModal>
    )
  }

  renderSelectionCard(): ReactNode {
    const {
      createdQuizes,
    } = this.props;

    return (
      <Grid container spacing={2}>
        {createdQuizes.map(({id, quizSummary}: IQuizSummaryCard) => (
          <Grid key={id} item sm={4}>
            <InformationCard
              hasHoverEffect
              id={id}
              title={quizSummary.title}
              description={quizSummary.description}
              onEdit={this.onQuizEdit}
              onDelete={this.onQuizDeleteToggle}
              onClick={this.onQuizClick(id)}/>
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
        {this.renderDeleteModal()}
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