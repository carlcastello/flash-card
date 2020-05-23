import { RouteComponentProps } from 'react-router-dom';
import { IQuizSummary, IFlashcard, IQuizQuestion } from '../../../../commons/types';


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
  createQuestion: (quizId: string, question: IQuizQuestion) => void,
  saveQuestion: (quizId: string, questionId: string, question: IQuizQuestion) => void,

  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
}