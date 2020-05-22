import { IFlashcard } from '../../../../../../../commons/types';

export interface IOwnProps {
  quizQuestions?: {
    flashcards: IFlashcard[]
  },
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