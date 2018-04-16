import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      adults:this.props.maxGuests
    };
    this.handleApply = this.handleApply.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }


  handleApply(e) {
    this.props.updateFilters('maxGuests', this.state.adults);
    this.props.receiveCurrentModal(null);
  }


  handleMinus(){
    if (this.state.adults > 1 ){
      let newAdults = this.state.adults - 1;
      this.setState({
        adults: newAdults
      });
    }
  }

  handlePlus(){
    let newAdults = this.state.adults + 1;
    this.setState({
      adults: newAdults
    });
  }

  render() {
    return(
      <div>
        <div className="adults-filter">
          <label>Adults</label>
          <div className="adults-buttons">
            <div
              className="guests-click" onClick={this.handleMinus}> - </div>
            <div className="num-adults">{this.state.adults}</div>
            <div
              className="guests-click"
              onClick={this.handlePlus}>
              + </div>
          </div>
        </div>
        <div
          className="apply-button"
          onClick={this.handleApply}>Apply
        </div>
      </div>

    );
  }
}

export default FilterForm;
