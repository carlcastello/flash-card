import React, { Component, ReactNode, ReactElement } from 'react';

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
  Modal,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { IQuestionCard, IQuestionBase } from '../../../../../commons/types';
import Form from '../../../../components/form';
import InformationCard from '../../../../components/information-card';

import { QuestionFields } from './fields';
import { IOwnProps, IOwnState } from './types';
import styles from './styles'
import { IFormResponse } from '../../../../components/form/types';


class QuizQuestion extends Component<IOwnProps, IOwnState> {
  
  emptyQuestion: IQuestionBase = { question: '', hint: '', answer: '', subQuestion: '' }

  state: IOwnState = {
    createQuestionFormOpen: false,
    editQuestionFormOpen: false,
    deleteQuestionFormOpen: false,
    toggledQuestionId: '',
    toggledQuestion: this.emptyQuestion

  }

  onCreateQuestionToggleClick = (): void => {
    this.setState((state: IOwnState) => ({
      ...state,
      createQuestionFormOpen: !state.createQuestionFormOpen
    }))
  }

  onEditQuestionToggleClick = (questionId: string) => (): void => {
    const {
      quizQuestions,
    } = this.props;

    this.setState((state: IOwnState) => ({
      ...state,
      editQuestionFormOpen: !state.editQuestionFormOpen,
      toggledQuestionId: questionId,
      toggledQuestion: quizQuestions.filter(({ id }: IQuestionCard) => id === questionId)[0] || this.emptyQuestion
    }))
  }

  onDeleteQuestionToggleClick = (questionId: string) => (): void => {
    this.setState((state: IOwnState) => ({
      ...state,
      deleteQuestionFormOpen: !state.deleteQuestionFormOpen,
      toggledQuestionId: questionId,
    }))
  }

  onCreateQuestion = (response: IFormResponse): void => {
    const {
      quizId,
      createQuestion
    } = this.props;

    createQuestion(quizId, { 
      question: response['question'],
      subQuestion: response['sub-question'] || '',
      hint: response['hint'] || '',
      answer: response['answer']
    });
  }

  onEditQuestion = (response: IFormResponse): void => {
    const {
      state: {
        toggledQuestion,
        toggledQuestionId
      },
      props: {
        quizId,
        saveQuestion
      }
    } = this;

    saveQuestion(quizId, toggledQuestionId, {...toggledQuestion, ...response});
  }

  onDeleteQuestion = (): void => {
    const {
      state: {
        toggledQuestionId
      },
      props: {
        quizId,
        deleteQuestion
      }
    } = this;

    deleteQuestion(quizId, toggledQuestionId);
  }

  renderCloseIcon(callBack = () => {}): ReactElement {
    const {
      classes: {
        closeButton
      }
    } = this.props;

    return (
      <IconButton 
        onClick={callBack}
        className={closeButton}>
        <Close/>
      </IconButton>
    )
  }

  renderCreateForm(): ReactNode {
    const {
      state: {
        createQuestionFormOpen,
      },
      props: {
        classes: {
          paperContainer,
          openFormButton,
        }
      }
    } = this;

    return (
      <Box pb={2}>
        <Paper elevation={3} className={paperContainer}>
          <Box px={5} py={2.5}>
            <Fade in={createQuestionFormOpen}>
              {this.renderCloseIcon(this.onCreateQuestionToggleClick)}
            </Fade>
            <Fade in={!createQuestionFormOpen}> 
              <Button
                color="primary"
                onClick={this.onCreateQuestionToggleClick}
                className={openFormButton}>
                Add Question 
              </Button>
            </Fade>
            <Collapse in={createQuestionFormOpen}>
              <Box py={2.5}>
                <Form 
                  fields={QuestionFields(this.emptyQuestion)}
                  onSuccess={this.onCreateQuestion}/>
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

    return (
      <Grid 
        container
        spacing={2}>
          {quizQuestions.length > 0 ?
            (quizQuestions.map((questionCard: IQuestionCard) => 
              <Grid item sm={6} key={questionCard.id}>
                <InformationCard
                  id={questionCard.id}
                  title={questionCard.question}
                  description={questionCard.answer}
                  subtitle={questionCard.subQuestion}
                  onEdit={this.onEditQuestionToggleClick(questionCard.id)}
                  onDelete={this.onDeleteQuestionToggleClick(questionCard.id)}/>
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


  renderEditModal(): ReactNode {
    const {
      state: {
        editQuestionFormOpen,
        toggledQuestion
      },
      props: {
        classes: {
          modalContainer,
          modalPaperContainer
        }
      }
    } = this;

    return (
      <Modal
        open={editQuestionFormOpen}
        onClose={this.onEditQuestionToggleClick('')}
        className={modalContainer}>
          <Paper elevation={3} className={modalPaperContainer}>
            <Box p={5} position="relative">
              {this.renderCloseIcon(this.onEditQuestionToggleClick(''))}
              <Box pb={2}>
                <Typography variant='h4'>
                  Edit Question
                </Typography>
              </Box>
              <Form 
                fields={QuestionFields(toggledQuestion)}
                onSuccess={this.onEditQuestion}/>
              </Box>
          </Paper>
      </Modal>
    );
  }

  renderDeleteModal(): ReactNode {
    const {
      state: {
        deleteQuestionFormOpen    
      },
      props: {
        classes: {
          modalContainer,
          modalPaperContainer
        }
      }
    } = this;

    return (
      <Modal
        open={deleteQuestionFormOpen}
        onClose={this.onDeleteQuestionToggleClick('')}
        className={modalContainer}>
        <Paper elevation={3} className={modalPaperContainer}>
          <Box p={5} position="relative">
            {this.renderCloseIcon(this.onDeleteQuestionToggleClick(''))}
            <Box pb={2}>
              <Typography variant="h4" align="center">
                Are you sure to delete this question?
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button onClick={this.onDeleteQuestionToggleClick('')} fullWidth>
                  No
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button onClick={this.onDeleteQuestion} color="secondary" fullWidth>
                  Yes
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Modal>
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
        {this.renderCreateForm()}
        {this.renderQuestionCards()}
        {this.renderEditModal()}
        {this.renderDeleteModal()}
      </Box>
    );
  }
}

export default withStyles(styles)(QuizQuestion);