import { IFlashcard, IQuizSummary } from '../../../../commons/types';
import { RouteComponentProps } from 'react-router-dom';


export interface IOwnProps extends RouteComponentProps<any>{
  requiredData: string[],
  quizSummary?: IQuizSummary,
  quizQuestions?: {
    flashcards: IFlashcard[]
  },
  fetchQuiz: (quizId: string) => void,
  saveQuizSummary: () => void,
  saveCreatedQuestion: () => void,
  classes: {
    questionBoxContainer: string,
    gridContainer: string
  }
}

export interface IOwnState {
  isAddQuestion: boolean
}