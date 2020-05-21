import { createSelector } from "reselect";
import { pageDataSelector } from "../selectors";
import { IPageData } from "../../../types";
import { QUIZ_SUMMARY, QUIZ_QUESTIONS } from "../../common/constants";


export const quizSummarySelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.quizSummary
);

export const quizQuestionsSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.quizQuestions
);

export const requiredDataSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const requiredData = [QUIZ_SUMMARY, QUIZ_QUESTIONS];
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
)