
import { combineReducers } from 'redux';

import { pageDataReducer } from "./pages/reducers";


export default combineReducers ({
  pageData: pageDataReducer
});