import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Paper, Box, Typography, Collapse } from '@material-ui/core';

import Form from "../../../components/form";
import InformationCard from '../../../components/information-card';
import TitleIcon from '../../../components/title-icon';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { QuizSummaryFields, QuestionFields } from './fields';
import { IFlashcard } from '../../../../commons/types';


class QuizSettings extends Component<IOwnProps, IOwnState> {
  
  state: IOwnState = {
    isAddQuestion: false
  }

  onTitleIconClick = (): void => {
    this.setState((state: IOwnState) => ({
      isAddQuestion: !state.isAddQuestion
    }))
  }

  componentDidMount(): void {
    const {
      requiredData,
      fetchQuiz,
      match: {
        params: {
          quizId
        }
      },
    } = this.props;

    console.log(requiredData)
    if (quizId && requiredData.length !== 0) {
      fetchQuiz(quizId);
    }
  }

  renderQuizSummaryForm(): ReactNode {
    const {
      quizSummary
    } = this.props;

    const title = quizSummary?.title || '';
    const description = quizSummary?.description || '';

    return (
      <Paper elevation={3}>
        <Box p={5}>
          <Box pb={2}>
            <Typography variant="h4">
              Quiz Summary
            </Typography>
          </Box>
          <Form 
            fields={QuizSummaryFields(title, description)}
            onSuccess={() => {console.log('hello world')}}/>
        </Box>
      </Paper>
    )
  }

  renderQuestionForm(): ReactNode {
    return (
      <Box pb={2}>
        <Paper elevation={3}>
          <Box p={5}>
            <Form 
              fields={QuestionFields}
              onSuccess={() => {console.log('hello Question')}}/>
          </Box>
        </Paper>
      </Box>
    );
  }

  renderFlashcards(flashcards: IFlashcard[]): ReactNode {
    return (flashcards.map((flashcards: IFlashcard) => 
      <Grid item sm={6}>
        <InformationCard
          id={flashcards.id}
          title={flashcards.question}
          description={flashcards.answer}
          subtitle={flashcards.subQuestion}
          onEdit={() => {}}
          onDelete={() => {}}/>
      </Grid>
    ))
  }

  renderQuizCards(): ReactNode {
    const {
      quizQuestions
    } = this.props;

    const flashcards = quizQuestions?.flashcards || [];

    return (
      <Grid 
        container
        spacing={2}>
          {flashcards.length > 0 ?
            this.renderFlashcards(flashcards) :
            <Grid item sm={12}>
              <Typography variant="body1">
                This quiz has no questions.
              </Typography>          
            </Grid>
          }
      </Grid>
    );
  }

  renderQuizContainer(): ReactNode {
    const {
      state: {
        isAddQuestion
      },
      props: {
        classes: {
          questionBoxContainer
        }
      }
    } = this;
    return (
      <Box p={5} className={questionBoxContainer}>
        <Box pb={2}>
          <TitleIcon onClick={this.onTitleIconClick}>
            Quiz Questions
          </TitleIcon>
        </Box>
        <Collapse in={isAddQuestion}>
          {this.renderQuestionForm()}
        </Collapse>
        {this.renderQuizCards()}
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
        <Grid item sm={10}>
          {this.renderQuizSummaryForm()}
        </Grid> 
        <Grid item sm={10}>
          {this.renderQuizContainer()}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(QuizSettings);
