import React from 'react';
import SpotIndex from '../spots/spot_index_container';
import SpotMap from './spot_map';

class Search extends React.Component {
  render() {
    return(
      <div className="search">
        <SpotMap spots={this.props.spots} />
        <SpotIndex />
      </div>
    );
  }

}

export default Search;
