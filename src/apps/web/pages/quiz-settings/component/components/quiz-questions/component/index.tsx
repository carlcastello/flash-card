import React, { Component, ReactNode } from 'react';

import {
  withStyles,
  Paper,
  Box,
  Fade,
  Collapse,
  IconButton,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { IFlashcard } from '../../../../../../../commons/types';
import Form from '../../../../../../components/form';
import InformationCard from '../../../../../../components/information-card';

import { QuestionFields } from './fields';
import { IOwnProps, IOwnState } from './types';
import styles from './styles'


class QuizQuestion extends Component<IOwnProps, IOwnState> {
  
  state: IOwnState = {
    hasQuestionForm: false,
  }

  onOpenCloseClick = (): void => {
    this.setState((state: IOwnState) => ({
      hasQuestionForm: !state.hasQuestionForm
    }))
  }

  renderForm(): ReactNode {
    const {
      state: {
        hasQuestionForm
      },
      props: {
        classes: {
          paperContainer,
          openFormButton,
          closeFormButton
        }
      }
    } = this;
 
    return (
      <Box pb={2}>
        <Paper elevation={3} className={paperContainer}>
          <Box px={5} py={2.5}>
            <Fade in={hasQuestionForm}>
              <IconButton 
                onClick={this.onOpenCloseClick}
                className={closeFormButton}>
                <Close/>
              </IconButton>
            </Fade>
            <Fade in={!hasQuestionForm}>
              <Button
                color="primary"
                onClick={this.onOpenCloseClick}
                className={openFormButton}>
                Add Question 
              </Button>
            </Fade>        
            <Collapse in={hasQuestionForm}>
              <Box py={2.5}>
                <Form 
                  fields={QuestionFields}
                  onSuccess={() => {console.log('hello Question')}}/>
              </Box>
            </Collapse> 
          </Box>
        </Paper>
      </Box>
    );
  }

  renderQuestionCards(): ReactNode {
    const {
      quizQuestions
    } = this.props;

    const flashcards = quizQuestions?.flashcards || [];

    return (
      <Grid 
        container
        spacing={2}>
          {flashcards.length > 0 ?
            (flashcards.map((flashcards: IFlashcard) => 
              <Grid item sm={6}>
                <InformationCard
                  id={flashcards.id}
                  title={flashcards.question}
                  description={flashcards.answer}
                  subtitle={flashcards.subQuestion}
                  onEdit={() => {}}
                  onDelete={() => {}}/>
              </Grid>
            )) :
            <Grid item sm={12}>
              <Typography variant="body1">
                This quiz has no questions.
              </Typography>          
            </Grid>
          }
      </Grid>
    );
  }

  render(): ReactNode {
    const {
      props: {
        classes: {
          questionContainer
        }
      }
    } = this;
    return (
      <Box p={5} className={questionContainer}>
        <Box pb={2}>
          <Typography variant="h4">
            Quiz Questions
          </Typography>
        </Box>
        {this.renderForm()}
        {this.renderQuestionCards()}
      </Box>
    );
  }
}

export default withStyles(styles)(QuizQuestion);