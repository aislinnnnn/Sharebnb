import spotsReducer from './spots_reducer';
import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
  spots: spotsReducer
});

export default entitiesReducer;
