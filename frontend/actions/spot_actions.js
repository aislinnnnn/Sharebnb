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

export const fetchSpots = () =>  {
  return (dispatch) => {
    return SpotAPI.fetchSpots()
    .then((spots) => dispatch(receiveSpots(spots)),
    (errors) => dispatch(receiveSpotErrors(errors.responseJSON))
    );
  };
};
