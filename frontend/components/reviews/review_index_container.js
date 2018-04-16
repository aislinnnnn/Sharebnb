import { connect } from 'react-redux';
import { fetchReviews, deleteReview } from '../../actions/review_actions';
import { fetchSpot } from '../../actions/spot_actions';
import ReviewIndex from './review_index';
import { receiveCurrentModal } from '../../actions/ui_actions';
import { withRouter } from 'react-router-dom';

const msp = state => {
  return{
    reviews: state.entities.reviews,
    currentUser: state.session.currentUser,
    currentModal: state.ui.modal.currentModal
  };
};

const mdp = dispatch => {
  return{
    deleteReview: (id) => dispatch(deleteReview(id)),
    receiveCurrentModal:(currentModal) => dispatch(receiveCurrentModal(currentModal)),
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId)),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
  };
};

export default withRouter(connect(msp, mdp)(ReviewIndex));
