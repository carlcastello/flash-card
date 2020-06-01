import { combineReducers } from 'redux';

import webDataReducer from './web/reducers';
import moduleDataReducer from './module/reducers';


export default combineReducers({
  quiz: moduleDataReducer,
  web: webDataReducer
});