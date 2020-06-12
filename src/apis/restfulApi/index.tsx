import { IApi } from "../types";
import dashboardQuiz from './dashboard-quiz';

export default (baseUrl: string): IApi => ({
  FETCH_CREATED_QUIZES: () => new Promise((resolve) => {

  }),

  FETCH_QUIZ: (quizId: string) => new Promise((resolve) => {

  }),
  ...dashboardQuiz(baseUrl)
});