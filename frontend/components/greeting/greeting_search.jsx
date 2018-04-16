import React from 'react';
import SearchBarContainer from '../map/search_bar_container';

const GreetingSearch = () => {
  debugger;
  return(
    <div className="hero-image">
      <div className="hero-content">
        <h1 className="hero-text">Explore homes available to share all over the world.</h1>
        <SearchBarContainer placeholder='Try "New York"'/>
      </div>
    </div>
  );
};

export default GreetingSearch;
