import * as BookingAPI from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveBookings = (bookings) => {
  return({
    type: RECEIVE_BOOKINGS,
    bookings
  });
};

export const receiveBooking = (booking) => {
  return({
    type: RECEIVE_BOOKING,
    booking
  });
};

export const removeBooking = (id) => {
  return({
    type: REMOVE_BOOKING,
    id
  });
};

export const receiveBookingErrors = (errors) => {
  return({
    type: RECEIVE_BOOKING_ERRORS,
    errors
  });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchBookings = () => {
  return (dispatch) => {
    return BookingAPI.fetchBookings()
      .then((bookings) => dispatch(receiveBookings(bookings)),
    (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
    );
  };
};

export const fetchBooking = (id) => {
  return (dispatch) => {
    return BookingAPI.fetchBooking(id)
      .then((booking) => dispatch(receiveBooking(booking)),
    (errors) => dispatch(receiveBookingErrors(errors.responseJSON))
    );
  };
};

export const createBooking = booking => {
  return dispatch => {
    return BookingAPI.createBooking(booking)
      .then((booking) => {
        return dispatch(receiveBooking(booking));
      },
    (errors) => {
      return dispatch(receiveBookingErrors(errors.responseJSON));
      }
    );
  };
};

export const deleteBooking = id => {
  return dispatch => {
    return BookingAPI.deleteBooking(id)
    .then(() => {
      return dispatch(removeBooking(id));
    });
  };
};
