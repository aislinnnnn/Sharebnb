import * as SpotAPI from '../util/spot_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_SPOT_ERRORS = "RECEIVE_SPOT_ERRORS";

export const receiveSpots = (spots) => {
  return ({
    type: RECEIVE_SPOTS,
    spots
  });
};

export const receiveSpot = (spot) => {
  return ({
    type: RECEIVE_SPOT,
    spot
  });
};

export const receiveSpotErrors = (errors) => {
  return({
    type: RECEIVE_SPOT_ERRORS,
    errors
  });
};

export const fetchSpots = (data) =>  {
  return (dispatch) => {
    return SpotAPI.fetchSpots(data)
    .then((spots) => dispatch(receiveSpots(spots)),
    (errors) => dispatch(receiveSpotErrors(errors.responseJSON))
    );
  };
};

export const fetchSpot = (id) => {

  return (dispatch) => {
    return SpotAPI.fetchSpot(id)
      .then((spot)=> dispatch(receiveSpot(spot)),
      (errors) => dispatch(receiveSpotErrors(errors.responseJSON))
    );
  };
};
