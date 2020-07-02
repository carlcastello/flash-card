import { createSelector } from 'reselect';
import { webDataSelector } from '../selectors';
import { IWebData, IPageData } from '../../types';

export const pageDataSelector = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.pageData,
)

export const requiredDataSelector = (requiredData: string[]) => createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
);
