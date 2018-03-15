import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewFormContainer from './review_form_container';
import { Link, withRouter } from 'react-router-dom';

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
      return Math.round(sum/numReviews);
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
      return Math.round(sum/numReviews);
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
      return Math.round(sum/numReviews);
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
      return Math.round(sum/numReviews);
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
      return Math.round(sum/numReviews);
    }
  }
  averageValue() {
    // const reviews = Object.values(this.props.reviews);
    // let numReviews = reviews.length;
    // if (numReviews > 0 ){
    //   let sum = 0;
    //
    //   reviews.forEach((review) => {
    //     sum += review.value;
    //   });
    //   return Math.round(sum/numReviews);
    // }
    return 5;
  }

  averageRating() {
    let average = (this.averageAccuracy()
    + this.averageCommunication()
    + this.averageCleanliness()
    + this.averageLocation()
    + this.averageCheckIn()
    + this.averageValue())
    /6;

    return Math.round(average);
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
