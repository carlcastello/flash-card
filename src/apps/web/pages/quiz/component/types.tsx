import { RouteComponentProps } from 'react-router-dom';
import { IQuizSummary, IQuestionCard, IQuestionBase } from '../../../../commons/types';


export interface IOwnProps extends RouteComponentProps<any> {
  isFullPageLoading: boolean,
  creatingQuizSummary: boolean,

  requiredData: string[],
  quiz: {
    id?: string,
    quizSummary?: IQuizSummary,
    quizQuestions?: IQuestionCard[]
  },
  fetchQuiz: (quizId: string) => void,
  createQuizSummary: (quizSummary: IQuizSummary) => void,
  saveQuizSummary: (quizId: string, quizSummary: IQuizSummary) => void,
  createQuestion: (quizId: string, question: IQuestionBase) => void,
  saveQuestion: (quizId: string, questionId: string, question: IQuestionBase) => void,

  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
}