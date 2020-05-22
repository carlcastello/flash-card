import { IQuizSummary } from '../../../../../commons/types';
import { setComponentLoading } from '../../../../common/actions';

export const createQuizSummary = (quizSummary: IQuizSummary) => {
  return (dispatch: any) => {
    // dispatch(setComponentLoading(true));
    // return MOCK_FETCH_QUIZ(quizId).then((payload) => {
    //   dispatch({ type: FETCH_PAGE_DATA, payload });
    //   dispatch(setLoadingFunction(false));
    // })
  };
}

export const saveQuizSummary = (quizId: string, quizSummary: IQuizSummary) => {
  return (dispatch: any) => {
    // dispatch(setLoadingFunction(true));
    // return MOCK_FETCH_QUIZ(quizId).then((payload) => {
    //   dispatch({ type: FETCH_PAGE_DATA, payload });
    //   dispatch(setLoadingFunction(false));
    // })
  };
}