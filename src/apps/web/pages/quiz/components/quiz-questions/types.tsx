import { IQuestionBase, IQuestionCard } from '../../../../../commons/types';

export interface IOwnProps {
  quizId: string,
  quizQuestions: IQuestionCard[]

  createQuestion: (quizId: string, question: IQuestionBase) => void,
  saveQuestion: (quizId: string, questionId: string, question: IQuestionBase) => void,
  classes: {
    questionContainer: string,
    paperContainer: string,
    openFormButton: string,
    closeFormButton: string,
  }
}

export interface IOwnState {
  hasQuestionForm: boolean
}