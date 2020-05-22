import { createSelector } from 'reselect';
import { pageDataSelector } from '../selectors';
import { IPageData, IWebData } from "../../../types";
import { QUIZ_SUMMARY, QUIZ_QUESTIONS, QUIZ } from "../../common/constants";
import { webDataSelector } from "../../selectors";

export const isFullPageLoading = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[QUIZ]
)

export const requiredDataSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const requiredData = [QUIZ_SUMMARY, QUIZ_QUESTIONS];
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
)