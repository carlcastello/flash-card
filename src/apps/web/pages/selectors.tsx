import { createSelector } from 'reselect';
import { webDataSelector } from '../selectors';
import { IWebData } from '../../types';

export const pageDataSelector = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.pageData,
)
