import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function ReviewIndexItem(props){
  debugger;
  return(
    <div>
      <div>
        <h1>{props.review.author.username}</h1>
        <h3>{props.created_at}</h3>
      </div>
      <div>
        <p>Body:{props.review.body}</p>
      </div>
    </div>
  );
}

export default withRouter(ReviewIndexItem);
