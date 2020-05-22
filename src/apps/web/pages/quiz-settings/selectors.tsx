import { createSelector } from "reselect";
import { pageDataSelector } from "../selectors";
import { IPageData } from "../../../types";
import { QUIZ_SUMMARY, QUIZ_QUESTIONS } from "../../common/constants";


export const requiredDataSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const requiredData = [QUIZ_SUMMARY, QUIZ_QUESTIONS];
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
)