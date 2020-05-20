// import { createReducers } from '../../commons/reducers';
import { createReducer } from 'redux-create-reducer';
import { FETCH_PAGE_DATA } from './actions';

export const defaultPageState = {
  createdQuizes: []
}

export const pageDataReducer = createReducer(defaultPageState, {
  [FETCH_PAGE_DATA]: (state: any, action) => {
    return ({
      ...state,
      ...action.payload
    })
  },
})