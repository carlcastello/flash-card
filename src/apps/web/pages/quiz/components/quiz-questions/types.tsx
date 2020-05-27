// import { RouteComponentProps } from 'react-router-dom';
import { IQuestionBase, IQuestionCard } from '../../../../../commons/types';

export interface IOwnProps {
  quizId: string,
  quizQuestions: IQuestionCard[],
  push: (path: string) => void,

  createQuestion: (quizId: string, question: IQuestionBase) => void,
  saveQuestion: (quizId: string, questionId: string, question: IQuestionBase) => void,
  deleteQuestion: (quizId: string, questionId: string,) => void

  classes: {
    questionContainer: string,
    paperContainer: string,
    openFormButton: string,
    closeButton: string,
    modalContainer: string,
    modalPaperContainer: string,
  }
}

export interface IOwnState {
  createQuestionFormOpen: boolean,
  editQuestionFormOpen: boolean,
  deleteQuestionFormOpen: boolean,
  toggledQuestionId: string,
  toggledQuestion: IQuestionBase
}