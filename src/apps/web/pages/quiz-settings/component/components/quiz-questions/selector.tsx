import { createSelector } from 'reselect';
import { pageDataSelector } from '../../../../selectors';
import { IPageData } from '../../../../../../types';

export const quizQuestionsSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.quizQuestions
);
