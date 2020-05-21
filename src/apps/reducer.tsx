import { combineReducers } from 'redux';

import webDataReducer from './web/reducers';
import quizDataReducer from './quiz/reducers';


export default combineReducers({
  quiz: quizDataReducer,
  web: webDataReducer
});