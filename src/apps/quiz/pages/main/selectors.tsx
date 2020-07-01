import { createSelector } from 'reselect';
import { pageDataSelector } from '../selectors';
import { IPageData } from '../../../types';

export const questionsSelectors = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.quizQuestions || []
);
