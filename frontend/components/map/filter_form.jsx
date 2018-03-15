import React from 'react';

class FilterForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateFilters('maxGuests', parseInt(e.currentTarget.value));
  }

  render() {
    return(
      <div>
        <div>Filter by guests:</div>
        <label>Num of guests</label>
        <input type="number"
          value={this.props.maxGuests}
          onChange={this.handleChange}
          />
      </div>
    );
  }
}

export default FilterForm;
