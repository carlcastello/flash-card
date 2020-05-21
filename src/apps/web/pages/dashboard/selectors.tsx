import { createSelector } from 'reselect'

import { pageDataSelector } from '../selectors';
import { IPageData } from '../../../types';
import { CREATED_QUIZES } from '../../common/constants';


export const createdQuizesSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.createdQuizes || []
);

export const requiredDataSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const requiredData = [CREATED_QUIZES];
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
)