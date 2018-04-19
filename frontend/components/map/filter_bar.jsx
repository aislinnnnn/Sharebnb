import React from 'react';
import { withRouter } from 'react-router';
import Modal from "react-modal";
import FilterFormContainer from './filter_form_container';

class FilterBar extends React.Component {
  constructor(props){
    super(props);
    this.handleOpenFilterModal = this.handleOpenFilterModal.bind(this);
  }

  handleOpenFilterModal() {
    this.props.receiveCurrentModal("Filter Form");
  }

  render(){
    return(
      <div className="filter-bar-container">
        <div onClick={this.handleOpenFilterModal}
          className="guest-filter"
          >
          <h1>Guests</h1>
        </div>
        <Modal
          className="filter-modal"
          overlayClassName="filter-overlay"
          isOpen={this.props.currentModal === "Filter Form"}
          contentLabel="Review Form Modal"
          >
          <FilterFormContainer />
          </Modal>
      </div>
    );
  }
}

export default withRouter(FilterBar);
