import React from 'react';

function SpotIndexItem(props) {

  return (
    <div>
      <ul>
        <img className="index-img" src={props.spot.image_url} />
        <li>{props.spot.title}</li>
        <li>{props.spot.price}</li>
      </ul>
    </div>
  );
}

export default SpotIndexItem;
