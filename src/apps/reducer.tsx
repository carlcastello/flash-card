import { combineReducers } from 'redux';

import dashboardAppReducer from './dashboard/reducers';
import quizReducer from './quiz/reducers';


export default combineReducers({
  quizApp: quizReducer,
  dashboardApp: dashboardAppReducer
});