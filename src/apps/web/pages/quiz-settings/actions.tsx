import { FETCH_PAGE_DATA } from "../actions";
import { MOCK_FETCH_QUIZ } from "../../../../mocks/server_actions";


export const fetchQuiz = (quizId: string) => {
  return (dispatch: any) => {
    return MOCK_FETCH_QUIZ(quizId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload })
    })
  };
}

export const saveQuizSummary = () => {

}

export const saveCreatedQuestion = () => {

}

