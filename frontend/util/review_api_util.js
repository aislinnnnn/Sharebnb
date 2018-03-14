export const fetchReviews = (spotId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {spotId: spotId}
  });
};

export const createReview = (review) => {
  return $.ajax({
    url:'/api/reviews',
    method: 'POST',
    data: {review:review}
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    url:`/api/reviews/${id}`,
    method: 'DELETE'
  });
};
