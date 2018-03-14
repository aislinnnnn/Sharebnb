import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_ERRORS
} from '../actions/review_actions';

const reviewErrorsReducer = (oldState = [], action ) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEWS:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default reviewErrorsReducer;
