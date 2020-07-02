import { createReducer } from 'redux-create-reducer';
import { SET_COMPONENT_LOADING } from './actions';
import { IComponentLoadingState } from '../../types';


export const componentLoadingReducer = createReducer({}, {
  [SET_COMPONENT_LOADING]: (state: IComponentLoadingState, action) => ({
    ...state,
    ...action.payload
  })
});