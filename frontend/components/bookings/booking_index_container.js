import { connect } from 'react-redux';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { fetchSpots } from '../../actions/spot_actions';
import BookingIndex from './booking_index';
import { receiveCurrentModal } from '../../actions/ui_actions';

const msp = state => {
  return{
    bookings: state.entities.bookings,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return{
    deleteBooking: (id) => dispatch(deleteBooking(id)),
    receiveCurrentModal:(currentModal) => dispatch(receiveCurrentModal(currentModal)),
    fetchBookings: () => dispatch(fetchBookings())
  };
};

export default connect(msp, mdp)(BookingIndex);
