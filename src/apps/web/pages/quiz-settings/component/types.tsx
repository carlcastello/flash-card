import { IQuiz } from '../../../../commons/types';

export interface IOwnProps {
  quiz?: IQuiz,
  classes: {
    questionBoxContainer: string,
    gridContainer: string
  }
}

export interface IOwnState {
  isAddQuestion: boolean
}