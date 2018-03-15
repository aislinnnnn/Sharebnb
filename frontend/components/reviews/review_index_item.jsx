import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  render() {

    if (this.props.currentUser && (this.props.review.author_id === this.props.currentUser.id)) {
      return(
        <div>
          <div>
            <h1>{this.props.review.author.username}</h1>
            <h3>{this.props.created_at}</h3>
          </div>
          <div>
            <p>Body:{this.props.review.body}</p>
          </div>
          <div
            className="booking-delete-button"
            onClick={this.handleSubmit}>
            <img
              className="booking-delete-image"
              src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/calendar_alt_stroke-128.png" />
            <div className="delete-text">
              Delete this review
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div>
            <h1>{this.props.review.author.username}</h1>
            <h3>{this.props.created_at}</h3>
          </div>
          <div>
            <p>Body:{this.props.review.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ReviewIndexItem);
