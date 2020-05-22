import { FETCH_PAGE_DATA } from "../actions";
import { MOCK_FETCH_QUIZ } from "../../../../mocks/server_actions";
import { setComponentLoading } from "../../common/actions";
import { QUIZ } from "../../common/constants";


export const fetchQuiz = (quizId: string) => {
  const  setLoadingFunction = setComponentLoading(QUIZ);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return MOCK_FETCH_QUIZ(quizId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}

