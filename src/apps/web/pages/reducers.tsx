import { createReducer } from 'redux-create-reducer';
import { FETCH_PAGE_DATA } from './actions';
import { IPageData } from '../../types';

export const defaultPageState: IPageData = {
  createdQuizes: []
}

export const pageDataReducer = createReducer(defaultPageState, {
  [FETCH_PAGE_DATA]: (state: IPageData, action) => {
    return ({
      ...state,
      ...action.payload
    })
  },
})