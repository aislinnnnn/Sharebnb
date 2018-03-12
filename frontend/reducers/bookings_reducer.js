import { RECEIVE_BOOKING, RECEIVE_BOOKINGS } from '../actions/booking_actions';
import { merge } from 'lodash';

const bookingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, oldState, {[action.booking.id]:action.booking});
    default:
      return oldState;

  }
};

export default bookingsReducer;
