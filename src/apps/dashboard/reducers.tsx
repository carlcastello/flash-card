
import { combineReducers } from 'redux';

import { pageDataReducer } from './pages/reducers';
import { componentLoadingReducer } from './common/reducers';


export default combineReducers ({
  componentLoading: componentLoadingReducer,
  pageData: pageDataReducer
});