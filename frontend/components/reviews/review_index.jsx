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
      return <div className="review-item"><ReviewIndexItem review={review} /></div>;
    });
  }

  averageRating() {
    return 5;
  }

  averageAccuracy() {
    return 5;
  }

  averageCommunication() {
    return 5;
  }
  averageCleanliness() {
    return 5;
  }
  averageLocation() {
    return 5;
  }
  averageCheckIn() {
    return 5;
  }
  averageValue() {
    return 5;
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
