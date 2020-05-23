import { createSelector } from 'reselect';
import { pageDataSelector } from '../selectors';
import { IPageData, IWebData } from "../../../types";
import { QUIZ_SUMMARY, QUIZ_QUESTIONS, QUIZ, CREATE_QUIZ_SUMMARY_FORM } from "../../common/constants";
import { webDataSelector } from "../../selectors";

export const isFullPageLoading = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[QUIZ]
)

export const isCreatingQuizSummary = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[CREATE_QUIZ_SUMMARY_FORM]
)

export const requiredDataSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const requiredData = [QUIZ_SUMMARY, QUIZ_QUESTIONS];
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
)
