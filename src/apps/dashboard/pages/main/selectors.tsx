import { createSelector } from 'reselect'

import { pageDataSelector } from '../selectors';
import { IPageData, IWebData } from '../../../types';
import { CREATED_QUIZES, DASHBOARD, DELETE_CREATED_QUIZ } from '../../common/constants';
import { webDataSelector } from '../../selectors';


export const isFullPageLoading = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[DASHBOARD]
)

export const isDeletingQuiz = createSelector(
  webDataSelector,
  (webData: IWebData) => webData.componentLoading[DELETE_CREATED_QUIZ]
)

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