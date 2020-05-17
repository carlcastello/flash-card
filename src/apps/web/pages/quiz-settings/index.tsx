import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Paper, Box, Fab, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';


import Form from "../../components/form";
import InformationCard from '../../components/information-card';

import { IOwnProps } from './types';
import styles from './styles';
import { QuizSummaryFields } from './fields';


class QuizSettings extends Component<IOwnProps> {
  
  renderQuizSummaryForm(): ReactNode {
    return (
      <Paper elevation={3}>
        <Box p={5}>
          <Form 
            fields={QuizSummaryFields}
            onSuccess={() => {console.log('hello world')}}/>
        </Box>
      </Paper>
    )
  }

  renderQuizQuestions(): ReactNode {
    const {
      classes: {
        questionBoxContainer
      }
    } = this.props;
    return (
      <Box padding={5} className={questionBoxContainer}>
        <Grid 
          container
          spacing={2}>
          <Grid item sm={6}>
            <InformationCard title="What is the capital of Sri Lanka?" description="Potato"/>
          </Grid>
          <Grid item sm={6}>
            <InformationCard title="Querer" subtitle="v. irregular" description="Potato"/>
          </Grid>
          <Grid item sm={6}>
            <InformationCard title="What is the capital of Sri Lanka?" description="Potato"/>          </Grid>
        </Grid>
      </Box>
    );
  }

  render(): ReactNode {
    const {
      classes: {
        boxContainer,
        gridContainer,
        fab,
      }
    } = this.props
    return (
      <Box className={boxContainer}>
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={gridContainer}>
          <Grid item direction="row" sm={10}>
            {this.renderQuizSummaryForm()}
          </Grid> 
          <Grid item sm={10}>
            {this.renderQuizQuestions()}
          </Grid>
        </Grid>
        <Fab className={fab}>
          <Add/>
        </Fab>
      </Box>
    )
  }
}

export default withStyles(styles)(QuizSettings);
