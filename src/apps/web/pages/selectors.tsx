import { createSelector } from 'reselect';
import { webDataSelector } from '../selectors';

export const pageDataSelector = createSelector(
  webDataSelector,
  (webData) => webData.pageData,
)