import { createSelector } from 'reselect'

import { pageDataSelector } from '../selectors';
import { IPageData } from '../../../types';


export const createdQuizesSelector = createSelector(
  pageDataSelector,
  (pageData: IPageData) => pageData.createdQuizes || []
);
