import { RouteComponentProps } from 'react-router-dom';
import { IQuizSummary, IQuestionCard, IQuestionBase } from '../../../../commons/types';


export interface IOwnProps extends RouteComponentProps<any> {
  isFullPageLoading: boolean,
  creatingQuizSummary: boolean,
  savingQuizSummary: boolean,
  isCreatingQuestion: boolean,
  isSavingQuestion: boolean,
  isDeletingQuestion: boolean,

  requiredData: string[],
  quiz: {
    id?: string,
    quizSummary?: IQuizSummary,
    quizQuestions?: IQuestionCard[]
  },
  fetchQuiz: (quizId: string) => Promise<any>,
  createQuizSummary: (quizSummary: IQuizSummary) => Promise<any>,
  saveQuizSummary: (quizId: string, quizSummary: IQuizSummary) => Promise<any>,
  createQuestion: (quizId: string, question: IQuestionBase) => Promise<any>,
  saveQuestion: (quizId: string, questionId: string, question: IQuestionBase) => Promise<any>,
  deleteQuestion: (quizId: string, questionId: string) => Promise<any>,

  classes: {
    gridContainer: string,
  }
}

export interface IOwnState {
}