// import { RouteComponentProps } from 'react-router-dom';
import { IQuestionBase, IQuestionCard } from '../../../../../commons/types';

export interface IOwnProps {
  quizId: string,
  quizQuestions: IQuestionCard[],
  push: (path: string) => void,

  createQuestion: (quizId: string, question: IQuestionBase) => Promise<any>,
  saveQuestion: (quizId: string, questionId: string, question: IQuestionBase) => Promise<any>,
  deleteQuestion: (quizId: string, questionId: string,) => Promise<any>
  isCreatingQuestion: boolean,
  isSavingQuestion: boolean,
  isDeletingQuestion: boolean,

  classes: {
    questionContainer: string,
    paperContainer: string,
    openFormButton: string,
    closeButton: string,
  }
}

export interface IOwnState {
  createQuestionFormOpen: boolean,
  editQuestionFormOpen: boolean,
  deleteQuestionFormOpen: boolean,
  toggledQuestionId: string,
  toggledQuestion: IQuestionBase
}