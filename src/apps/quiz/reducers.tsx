import { combineReducers } from 'redux';
import { componentLoadingReducer } from './common/reducers';
import { pageDataReducer } from './pages/reducers';


export default combineReducers ({
  componentLoading: componentLoadingReducer,
  pageData: pageDataReducer
});