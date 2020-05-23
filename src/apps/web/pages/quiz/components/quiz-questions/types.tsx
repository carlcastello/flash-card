import { IQuizQuestion, IFlashcard } from '../../../../../commons/types';

export interface IOwnProps {
  quizId: string,
  quizQuestions?: {
    flashcards: IFlashcard[],
  }

  createQuestion: (quizId: string, question: IQuizQuestion) => void,
  saveQuestion: (quizId: string, questionId: string, question: IQuizQuestion) => void,
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