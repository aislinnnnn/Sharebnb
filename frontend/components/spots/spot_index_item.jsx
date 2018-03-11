import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function SpotIndexItem(props) {

  return (
    <div>
      <Link className="spot-item" to={`/spots/${props.spot.id}`}>
        <ul className="spot-item">
          <img className="index-img" src={props.spot.image_url} />
          <li className="spot-location">{props.spot.location.toUpperCase()}</li>
          <li className="spot-title">{props.spot.title}</li>
          <li className="spot-price">${props.spot.price} per night</li>
        </ul>
      </Link>
    </div>
  );
}

export default withRouter(SpotIndexItem);
