import React from 'react';
import SpotIndexItem from './spot_index_item';
import { Link } from 'react-router-dom';
import GreetingSearch from '../greeting/greeting_search';

export default class SpotIndex extends React.Component {

  componentDidMount(){

    this.props.fetchSpots({bounds: {northEast: {lat:90, lng:180}, southWest: {lat:-90,lng:-180}}});
  }

  renderSpots() {
    const spots = Object.values(this.props.spots);

    return spots.map((spot, idx)=> {
      return <div key={`${idx}`} className="spot"><SpotIndexItem spot={spot} key={`${idx}`} /></div>;
    });
  }


  render(){
      const searchContent = this.props.currentUser ?
      null :
      <GreetingSearch />;
      return(
        <div>
          <div>
            {searchContent}
          </div>
          <div className="spot-index-wrapper">
            <h1 className="homes-header">Explore Sharebnb</h1>
            <div className="explore-container">
              <div>
                <Link to="/search">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://media2.s-nbcnews.com/i/newscms/2016_29/1144622/home-vacation-prep-today-160720-tease_b4ae657a1e09780845d75b604be99522.jpg" />
                    </div>
                    <div className="homes-search">Search Homes</div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/search/?lat=40.7127753&lng=-74.0059728">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://www.city-journal.org/sites/cj/files/New-York.jpg" />
                    </div>
                    <div className="homes-search">New York</div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/search/?lat=37.7749295&lng=-122.41941550000001">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://wikitravel.org/upload/en/thumb/2/23/Us-ca-sanfran-goldengate.jpg/510px-Us-ca-sanfran-goldengate.jpg" />
                    </div>
                    <div className="homes-search">San Fransisco</div>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/search/?lat=53.3498053&lng=-6.260309699999993">
                  <div className="search-link">
                    <div>
                      <img
                        className="homes-search-img"
                        src="https://www.independent.ie/life/travel/article34947145.ece/ALTERNATES/h342/Cliffs%20of%20moher.jpg" />
                    </div>
                    <div className="homes-search">Dublin</div>
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="homes-header">Homes around the world</h1>
            <div className="spots">
              {this.renderSpots()}
            </div>
          </div>
        </div>
    );
  }
}
