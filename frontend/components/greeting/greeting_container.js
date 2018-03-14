import Greeting from "./greeting";
import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import { receiveCurrentModal } from "../../actions/ui_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentModal: state.ui.modal.currentModal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    receiveCurrentModal: currentModal =>
      dispatch(receiveCurrentModal(currentModal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
