import { createSelector } from 'reselect';
import { IDashboardAppState } from '../../../types';
import {
  QUIZ,
  CREATE_QUIZ_SUMMARY_FORM,
  SAVE_QUIZ_SUMMARY_FORM,
  CREATE_QUESTION_FORM,
  SAVE_QUESTION_FORM,
  DELETE_QUESTION_FORM
} from '../../common/constants';
import { dashboardAppSelector } from '../../selectors';

export const isFullPageLoading = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) =>
    dashboardAppState.componentLoading[QUIZ]
);

export const isCreatingQuizSummary = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) =>
    dashboardAppState.componentLoading[CREATE_QUIZ_SUMMARY_FORM]
);

export const isSavingQuizSummary = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) => 
    dashboardAppState.componentLoading[SAVE_QUIZ_SUMMARY_FORM]
);

export const isCreatingQuestion = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) =>
    dashboardAppState.componentLoading[CREATE_QUESTION_FORM]
);

export const isSavingQuestion = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) =>
    dashboardAppState.componentLoading[SAVE_QUESTION_FORM]
);

export const isDeletingQuestion = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) =>
    dashboardAppState.componentLoading[DELETE_QUESTION_FORM]
);
