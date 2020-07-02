import { createReducer } from 'redux-create-reducer';
import { FETCH_PAGE_DATA } from './actions';
import { IPageData } from '../../types';

export const defaultPageState: IPageData = {
}

// Page data refreshes on every page.
export const pageDataReducer = createReducer(defaultPageState, {
  [FETCH_PAGE_DATA]: (_: IPageData, action) => {
    return ({
      ...action.payload
    })
  },
})