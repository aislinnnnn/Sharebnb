import * as SessionAPI from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const login = user => {
  return dispatch => {
    debugger
    return SessionAPI.login(user).then(
      currentUser => {
        return dispatch(receiveCurrentUser(currentUser));
      },
      err => {
        debugger;
        return dispatch(receiveSessionErrors(err.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return SessionAPI.logout().then(() => {
      return dispatch(receiveCurrentUser(null));
    });
  };
};

export const signup = user => {
  return dispatch => {
    return SessionAPI.signup(user).then(
      currentUser => {
        return dispatch(receiveCurrentUser(currentUser));
      },
      err => {
        return dispatch(receiveSessionErrors(err.responseJSON));
      }
    );
  };
};
