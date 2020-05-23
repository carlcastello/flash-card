import { RouteComponentProps } from 'react-router-dom';
import { IQuizSummary, IFlashcard } from '../../../../commons/types';


export interface IOwnProps extends RouteComponentProps<any> {
  isFullPageLoading: boolean,
  creatingQuizSummary: boolean,

  requiredData: string[],
  quiz: {
    id?: string,
    quizSummary?: IQuizSummary,
    quizQuestions?: {
      flashcards: IFlashcard[]
    }
  },
  fetchQuiz: (quizId: string) => void,
  createQuizSummary: (quizSummary: IQuizSummary) => void,
  saveQuizSummary: (quizId: string, quizSummary: IQuizSummary) => void,
  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
}