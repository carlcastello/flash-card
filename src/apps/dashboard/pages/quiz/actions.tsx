import { FETCH_PAGE_DATA } from '../actions';
import API from '../../../../apis';
import { setComponentLoading } from '../../common/actions';
import {
  QUIZ,
  CREATE_QUIZ_SUMMARY_FORM,
  SAVE_QUIZ_SUMMARY_FORM,
  SAVE_QUESTION_FORM,
  CREATE_QUESTION_FORM,
  DELETE_QUESTION_FORM
} from '../../common/constants';
import { IQuizSummary, IQuestionBase } from '../../../commons/types';


export const fetchQuiz = (quizId: string) => {
  const  setLoadingFunction = setComponentLoading(QUIZ);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return API.FETCH_QUIZ(quizId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}


export const createQuizSummary = (quizSummary: IQuizSummary) => {
  const setLoadingFunction = setComponentLoading(CREATE_QUIZ_SUMMARY_FORM);
  
  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return API.CREATE_QUIZ(quizSummary).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}

export const saveQuizSummary = (quizId: string, quizSummary: IQuizSummary) => {
  const setLoadingFunction = setComponentLoading(SAVE_QUIZ_SUMMARY_FORM);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));
    return API.SAVE_QUIZ_SUMMARY(quizId, quizSummary).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}

export const createQuestion = (quizId: string, question: IQuestionBase) => {
  const setLoadingFunction = setComponentLoading(CREATE_QUESTION_FORM);

  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));

    return API.CREATE_QUESTION(quizId, question).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  };
}

export const saveQuestion = (quizId: string, questionId: string, question: IQuestionBase) => {
  const setLoadingFunction = setComponentLoading(SAVE_QUESTION_FORM);

  return (dispatch: any, getState: any) => {
    dispatch(setLoadingFunction(true));

    return API.SAVE_QUESTION(quizId, questionId, question).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  }; 
}

export const deleteQuestion = (quizId: string, questionId: string) => {
  const setLoadingFunction = setComponentLoading(DELETE_QUESTION_FORM);
  return (dispatch: any) => {
    dispatch(setLoadingFunction(true));

    return API.DELETE_QUESTION(quizId, questionId).then((payload) => {
      dispatch({ type: FETCH_PAGE_DATA, payload });
      dispatch(setLoadingFunction(false));
    })
  }
}