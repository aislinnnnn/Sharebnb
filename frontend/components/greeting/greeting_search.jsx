import React from 'react';
import SearchBar from '../map/search_bar';

const GreetingSearch = () => {
  return(
    <div className="hero-image">
      <div className="hero-content">
        <h1 className="hero-text">Explore homes available to share all over the world.</h1>
        <SearchBar placeholder='Try "New York"'/>
      </div>
    </div>
  );
};

export default GreetingSearch;
