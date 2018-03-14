import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS,
  REMOVE_REVIEW}
  from '../actions/review_actions';
import { merge } from 'lodash';

const reviewsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, oldState, {[action.review.id]:action.review});
    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
    return oldState;
  }
};

export default reviewsReducer;
