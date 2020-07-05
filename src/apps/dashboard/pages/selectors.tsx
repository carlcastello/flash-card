import { createSelector } from 'reselect';
import { dashboardAppSelector } from '../selectors';
import { IDashboardAppState, IPageData } from '../../types';

export const pageDataSelector = createSelector(
  dashboardAppSelector,
  (dashboardAppState: IDashboardAppState) => dashboardAppState.pageData,
)

export const requiredDataSelector = (requiredData: string[]) => createSelector(
  pageDataSelector,
  (pageData: IPageData) => {
    const pageDataKeys = Object.keys(pageData);
    return requiredData.filter(item => !pageDataKeys.includes(item));
  }
);
