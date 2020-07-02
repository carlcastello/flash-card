import { createSelector } from 'reselect';
import { IWebData } from '../../../types';
import {
  QUIZ,
  CREATE_QUIZ_SUMMARY_FORM,
  SAVE_QUIZ_SUMMARY_FORM,
  CREATE_QUESTION_FORM,
  SAVE_QUESTION_FORM,
  DELETE_QUESTION_FORM
} from '../../common/constants';
import { webDataSelector } from '../../selectors';

export const isFullPageLoading = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[QUIZ]
);

export const isCreatingQuizSummary = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[CREATE_QUIZ_SUMMARY_FORM]
);

export const isSavingQuizSummary = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[SAVE_QUIZ_SUMMARY_FORM]
);

export const isCreatingQuestion = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[CREATE_QUESTION_FORM]
);

export const isSavingQuestion = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[SAVE_QUESTION_FORM]
);

export const isDeletingQuestion = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[DELETE_QUESTION_FORM]
);
