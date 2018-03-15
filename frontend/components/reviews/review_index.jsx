import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewFormContainer from './review_form_container';
import { Link, withRouter } from 'react-router-dom';
import { round } from 'lodash';

class ReviewIndex extends React.Component {
  componentDidMount(){
    this.props.fetchReviews(this.props.match.params.id);
  }

  renderReviews() {
    const reviews = Object.values(this.props.reviews);

    return reviews.map((review) => {
      return <div className="review-item"><ReviewIndexItem review={review} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/></div>;
    });
  }

  averageAccuracy() {

    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.accuracy;
      });
      return round(sum/numReviews, 2);
    }
  }

  averageCommunication() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.communication;
      });
      return round(sum/numReviews, 2);
    }
  }
  averageCleanliness() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.cleanliness;
      });
      return round(sum/numReviews, 2);
    }
  }
  averageLocation() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.location;
      });
      return round(sum/numReviews, 2);
    }
  }
  averageCheckIn() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.checkin;
      });
      return round(sum/numReviews, 2);
    }
  }
  averageValue() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ){
      let sum = 0;

      reviews.forEach((review) => {
        sum += review.value;
      });
      return round(sum/numReviews, 2);
    }
    return 5;
  }

  averageRating() {
    const reviews = Object.values(this.props.reviews);
    let numReviews = reviews.length;
    if (numReviews > 0 ) {
      let average = (this.averageAccuracy()
      + this.averageCommunication()
      + this.averageCleanliness()
      + this.averageLocation()
      + this.averageCheckIn()
      + this.averageValue())
      /6;

      return round(average, 2);
    }
  }

  render() {
    const numReviews = Object.keys(this.props.reviews).length;
    return(
      <div className="review-index-container">
        <div className="review-header">
          <h1>{numReviews} Reviews</h1>
          <h1>{this.averageRating()}</h1>
        </div>
        <div className="rating-header">
          <div>Accuracy {this.averageAccuracy()}</div>
          <div>Communication {this.averageCommunication()}</div>
          <div>Cleanliness {this.averageCleanliness()}</div>
          <div>Location {this.averageLocation()}</div>
          <div>Check In {this.averageCheckIn()}</div>
          <div>Value {this.averageValue()}</div>
        </div>
        <div className="review-index">
          {this.renderReviews()}
        </div>
        <div className="review-form">
          <ReviewFormContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
