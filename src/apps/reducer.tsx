import { combineReducers } from 'redux';

import webAppDataReducer from './dashboard/reducers';
import quizAppDataReducer from './quiz/reducers';


export default combineReducers({
  module: quizAppDataReducer,
  web: webAppDataReducer
});