import { MOCK_QUIZES } from "./server_data";
import { IQuiz } from "../apps/commons/types";

export const MOCK_FETCH_CREATED_QUIZES = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      createdQuizes: MOCK_QUIZES.map(({ id, quizSummary }: IQuiz) => ({ id, quizSummary }))
    })
  }, 500);
});


export const MOCK_FETCH_QUIZ = (quizId: string) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(MOCK_QUIZES
      .filter(({ id }: IQuiz) =>
        id === quizId)
      [0]
    )
  }, 500)
});