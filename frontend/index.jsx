import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { login, logout, signup } from "./actions/session_actions";
import configureStore from "./store/store";
import { fetchSpot, fetchSpots } from "./util/spot_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING //
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchSpot = fetchSpot;
  window.fetchSpots = fetchSpots;
  // TESTING END //
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// TESTING //
window.logout = logout;
window.signup = signup;
