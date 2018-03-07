export const RECEIVE_CURRENT_MODAL = "RECEIVE_CURRENT_MODAL";

export const receiveCurrentModal = currentModal => {
  return {
    type: RECEIVE_CURRENT_MODAL,
    currentModal
  };
};
