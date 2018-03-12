import spotsReducer from './spots_reducer';
import bookingsReducer from './bookings_reducer';
import { combineReducers } from 'redux';


const entitiesReducer = combineReducers({
  spots: spotsReducer,
  bookings: bookingsReducer
});

export default entitiesReducer;
