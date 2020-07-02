import { IQuizSummary, IQuestionBase } from '../apps/commons/types';


export interface IApi {
  FETCH_CREATED_QUIZES: () => Promise<any>,

  CREATE_QUIZ: (quizSummary: IQuizSummary) => Promise<any>,
  FETCH_QUIZ: (quizId: string) => Promise<any>,
  DELETE_QUIZ: (quizId: string) => Promise<any>,

  SAVE_QUIZ_SUMMARY: (quizId: string, quizSummary: IQuizSummary) => Promise<any>,

  CREATE_QUESTION: (quizId: string, question: IQuestionBase) => Promise<any>,
  SAVE_QUESTION: (quizId: string, questionId: string, question: IQuestionBase) => Promise<any>,
  DELETE_QUESTION: (quizId: string, questionId: string) => Promise<any>
}