import { createSelector } from 'reselect';
import { pageDataSelector } from '../../../selectors';
import { IPageData } from '../../../../../types';

export const quizSummarySelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.quizSummary
);
