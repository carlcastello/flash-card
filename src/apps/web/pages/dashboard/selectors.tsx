import { createSelector } from 'reselect'

import { pageDataSelector } from '../selectors';


export const createdQuizesSelector = createSelector(
  pageDataSelector,
  (pageData) => pageData.createdQuizes
);
