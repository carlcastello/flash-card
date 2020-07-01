import { FETCH_PAGE_DATA } from "../actions";
import API from "../../../../apis";
import { setComponentLoading } from "../../common/actions";
import { 
  DASHBOARD,
  DELETE_CREATED_QUIZ
} from "../../common/constants";


export const fetchCreatedQuizes = () => {
  const  setLoadingFunction = setComponentLoading(DASHBOARD);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return API.FETCH_CREATED_QUIZES().then((value) => {
      dispatch({type: FETCH_PAGE_DATA, payload: value});
      dispatch(setLoadingFunction(false));
    })
  }
}

export const deleteCreatedQuiz = (quizId: string) => {
  const  setLoadingFunction = setComponentLoading(DELETE_CREATED_QUIZ);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return API.DELETE_QUIZ(quizId).then((value) => {
      dispatch({type: FETCH_PAGE_DATA, payload: value});
      dispatch(setLoadingFunction(false));
    })
  }
}
