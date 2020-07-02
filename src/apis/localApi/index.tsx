import { IApi } from '../types';
import dashboardQuiz from './dashboard-quiz';
import { IQuiz } from '../../apps/commons/types';
import { MOCK_QUIZES } from './mock_data';

export default (): IApi => ({
  FETCH_CREATED_QUIZES: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        createdQuizes: MOCK_QUIZES.map(({ id, quizSummary }: IQuiz) => ({ id, quizSummary }))
      })
    }, 500);
  }),

  FETCH_QUIZ: (quizId: string) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_QUIZES
        .filter(({ id }: IQuiz) =>
          id === quizId)
        [0]
      )
    }, 500);
  }),

  ...dashboardQuiz
});