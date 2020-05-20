import React, { Component, ReactNode } from 'react';

import { withStyles, Grid, Paper, Box, Typography, Collapse } from '@material-ui/core';

import Form from "../../../components/form";
import InformationCard from '../../../components/information-card';
import TitleIcon from '../../../components/title-icon';

import { IOwnProps, IOwnState } from './types';
import styles from './styles';
import { QuizSummaryFields, QuestionFields } from './fields';
import { IFlashCard } from '../../../../commons/types';


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
      match: {
        params: {
          quizId
        }
      },
      fetchQuiz
    } = this.props;

    if (quizId) {
      fetchQuiz(quizId);
    }
  }

  renderQuizSummaryForm(): ReactNode {
    const {
      title,
      description
    } = this.props;
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

  renderQuizCards(): ReactNode {
    const {
      flashCards
    } = this.props;
    return (
      <Grid 
        container
        spacing={2}>
          {flashCards.length > 0 ?
            this.renderFlashCards(flashCards) :
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
