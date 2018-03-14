import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_ERRORS
} from "../actions/booking_actions";

const bookingErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKING:
      return [];
    case RECEIVE_BOOKINGS:
      return [];
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default bookingErrorsReducer;
