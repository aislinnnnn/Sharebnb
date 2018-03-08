import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function SpotIndexItem(props) {
  
  return (
    <div>
      <Link to={`/spots/${props.spot.id}`}>
        <ul>
          <img className="index-img" src={props.spot.image_url} />
          <li>{props.spot.title}</li>
          <li>{props.spot.price}</li>
        </ul>
      </Link>
    </div>
  );
}

export default withRouter(SpotIndexItem);
