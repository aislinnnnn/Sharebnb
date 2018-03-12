import React from 'react';
import SearchIndex from './search_index';
import SpotMap from './spot_map';
import FilterForm from './filter_form';

class Search extends React.Component {
  render() {

    return(
      <div className="search">
        <div className="search-index">
          <SearchIndex  spots={this.props.spots} />
        </div>
        <div className="spot-map">
          <SpotMap spots={this.props.spots} updateFilters={this.props.updateFilters}/>
        </div>
      </div>
    );
  }

}

export default Search;


//   <div className="filter-form">
//     <FilterForm
//       maxGuests={this.props.maxGuests}
//       updateFilter={this.props.updateFilter}
// />
//   </div>
