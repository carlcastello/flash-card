import { createSelector } from 'reselect';
import { quizAppSelector } from '../selectors';
import { IQuizAppState, IPageData } from '../../types';

export const pageDataSelector = createSelector(
  quizAppSelector,
  (quizAppState: IQuizAppState) => quizAppState.pageData
)

export const requiredDataSelector = (requiredData: string[]) => createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
);
