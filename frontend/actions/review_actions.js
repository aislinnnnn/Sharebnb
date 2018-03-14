import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveReviews = (reviews) => {
  return({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const receiveReview = (review) => {
  return({
    type: RECEIVE_REVIEW,
    review
  });
};

export const removeReview = (id) => {
  return({
    type: REMOVE_REVIEW,
    id
  });
};

export const receiveReviewErrors = (errors) => {
  return({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const fetchReviews = (spotId) => {
  return dispatch => {
    return ReviewAPI.fetchReviews(spotId)
      .then((reviews) => dispatch(receiveReviews(reviews)),
      (errors) =>
      dispatch(receiveReviewErrors(errors.responseJSON))
    );
  };
};

export const createReview = review => {
  return dispatch => {
    return ReviewAPI.createReview(review)
      .then((review) => {
        return dispatch(receiveReview(review));
      },
    (errors) => {
      return dispatch(receiveReviewErrors(errors.responseJSON));
      }
    );
  };
};

export const deleteReview = id => {
  return dispatch => {
    return ReviewAPI.deleteReview(id)
    .then(() => {
      return dispatch(removeReview(id));
    });
  };
};
