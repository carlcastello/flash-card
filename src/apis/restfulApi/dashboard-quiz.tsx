import { IQuestionBase, IQuizSummary } from '../../apps/commons/types';


export default (baseUrl: string) => ({
  CREATE_QUIZ: (quizSummary: IQuizSummary) => new Promise((resolve) => {
    
  }),

  DELETE_QUIZ: (quizId: string) => new Promise((resolve) => {
    
  }),

  SAVE_QUIZ_SUMMARY: (quizId: string, quizSummary: IQuizSummary) => new Promise((resolve) => {
    
  }),

  CREATE_QUESTION: (quizId: string, question: IQuestionBase) => new Promise((resolve) => {
    
  }),

  SAVE_QUESTION: (quizId: string, questionId: string, question: IQuestionBase) => new Promise((resolve) => {
    
  }),

  DELETE_QUESTION: (quizId: string, questionId: string) => new Promise((resolve) => {
    
  }),  
});