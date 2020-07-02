import { createReducer } from "redux-create-reducer";
import { IPageData } from '../../types';
import { FETCH_PAGE_DATA } from './actions';

export const defaultPageState: IPageData = {
}

export const pageDataReducer = createReducer(defaultPageState, {
  [FETCH_PAGE_DATA]: (_: IPageData, action) => {
    return ({
      ...action.payload
    })
  },
})