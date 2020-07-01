import { createSelector } from 'reselect';
import { moduleDataSelector } from '../selectors';
import { IModuleState, IPageData } from '../../types';

export const pageDataSelector = createSelector(
  moduleDataSelector,
  (moduleData: IModuleState) => moduleData.pageData
)

export const requiredDataSelector = (requiredData: string[]) => createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
);
