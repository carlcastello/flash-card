import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Paper, Box, Typography } from '@material-ui/core';

import Form from "../../components/form";
import InformationCard from '../../components/information-card';
import TitleIcon from '../../components/title-icon';

import { IOwnProps } from './types';
import styles from './styles';
import { QuizSummaryFields } from './fields';
import { IFlashCard } from '../../../commons/types';


class QuizSettings extends Component<IOwnProps> {
  
  renderQuizSummaryForm(): ReactNode {
    return (
      <Paper elevation={3}>
        <Box p={5}>
          <Box pb={2}>
            <Typography variant="h4">
              Quiz Summary
            </Typography>
          </Box>
          <Form 
            fields={QuizSummaryFields}
            onSuccess={() => {console.log('hello world')}}/>
        </Box>
      </Paper>
    )
  }

  renderFlashCards(flashcards: IFlashCard[]): ReactNode {
    return (flashcards.map((flashcard: IFlashCard) => 
      <Grid item sm={6}>
        <InformationCard
          title={flashcard.question}
          description={flashcard.answer}
          subtitle={flashcard.subQuestion}/>
      </Grid>
    ))
  }

  renderQuizQuestions(): ReactNode {
    const {
      quiz,
      classes: {
        questionBoxContainer
      }
    } = this.props;
    return (
      <Box padding={5} className={questionBoxContainer}>
        <Grid 
          container
          spacing={2}>
            <Grid item sm={12}>
              <TitleIcon onClick={() => {console.log('hello world')}}>
                Quiz Questions
              </TitleIcon>
            </Grid>
            {quiz && quiz.flashcards.length > 0 ?
              this.renderFlashCards(quiz.flashcards) :
              <Grid item sm={12}>
                <Typography variant="h5">
                  No Questions
                </Typography>          
              </Grid>
            }
        </Grid>
      </Box>
    );
  }

  render(): ReactNode {
    const {
      classes: {
        gridContainer
      }
    } = this.props
    return (
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
    )
  }
}

export default withStyles(styles)(QuizSettings);
