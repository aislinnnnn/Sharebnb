import React from 'react';
import SearchIndex from './search_index';
import SpotMap from './spot_map';

class Search extends React.Component {
  render() {
    debugger
    return(
      <div className="search">
        <SpotMap spots={this.props.spots} updateFilters={this.props.updateFilters}/>
        <SearchIndex spots={this.props.spots} />
      </div>
    );
  }

}

export default Search;
