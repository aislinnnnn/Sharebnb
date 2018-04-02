import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

function SpotIndexItem(props) {
  return (
    <div key={`${props.key}1`}>
      <Link className="spot-item" to={`/spots/${props.spot.id}`}>
        <ul className="spot-item">
          <img className="index-img" src={props.spot.image_url} />
          <li className="spot-location">{props.spot.location.toUpperCase()}</li>
          <li className="spot-title">{props.spot.title}</li>
          <li className="spot-price">${props.spot.price} per night</li>
          <div key={`${props.key}2`} style={{fontSize:10}} className="average-rating-index">
            <StarRatingComponent
              style={{padding:'20px'}}
              name="star"
              editing={false}
              starCount={5}
              value={props.spot.average_rating}
              starColor={'#008489'}
              emptyStarColor={'#dce0e0'}
              starSpacing="5px"
              />
          </div>
        </ul>
      </Link>
    </div>
  );
}

export default withRouter(SpotIndexItem);
