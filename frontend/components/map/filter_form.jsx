import React from 'react';


const handleChange = (filter, updateFilters) => (e) => {
  return(
    updateFilters(filter, parseInt(e.currentTarget.value))
  );
};

const FilterForm = (props) => {
  return(
    <div>
      <div>Filter by guests:</div>
      <label>Num of guests</label>
      <input type="number"
        value={props.maxGuests}
        onChange={handleChange('maxGuests', props.updateFilters)}
        />
    </div>
  );
};

export default FilterForm;
