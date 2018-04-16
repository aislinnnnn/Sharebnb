import React from 'react';
import Modal from "react-modal";
import ReviewIndexItem from './review_index_item';
import ReviewFormContainer from './review_form_container';
import { Link, withRouter } from 'react-router-dom';
import { round } from 'lodash';
import StarRatingComponent from 'react-star-rating-component';

class ReviewIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentModal:this.props.currentModal
    };
    this.handleCloseReviewModal = this.handleCloseReviewModal.bind(this);
    this.handleOpenReviewModal = this.handleOpenReviewModal.bind(this);
  }

  handleOpenReviewModal() {
    if (this.props.currentUser){
      this.props.receiveCurrentModal("Review Form");
    } else {
      this.props.receiveCurrentModal("Log In");
    }
  }

  handleCloseReviewModal() {
    this.props.receiveCurrentModal(null);
  }

  componentDidMount(){

    this.props.fetchReviews(this.props.match.params.id);
    this.props.fetchSpot(this.props.match.params.id);
  }

  renderReviews() {
    const reviews = Object.values(this.props.reviews);

    return reviews.map((review) => {
      return <div className="review-item"><ReviewIndexItem review={review} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/></div>;
    });
  }

  
  render() {
    const numReviews = Object.keys(this.props.reviews).length;
    let reviewText;
    if (numReviews === 1) {
      reviewText = "Review";
    } else {
      reviewText = "Reviews";
    }

    return(
      <div className="review-index-container">
        <div className="review-header">
          <h1 className="show-bold-big">{numReviews} {reviewText}</h1>
          <div style={{fontSize:20}} className="average-rating">
            <StarRatingComponent
              style={{padding:'20px'}}
              name="star"
              editing={false}
              starCount={5}
              value={this.props.spot.average_rating}
              starColor={'#008489'}
              emptyStarColor={'#dce0e0'}
              starSpacing="5px"
              />
          </div>
        </div>
        <div className="rating-header">
          <div>
            <div className="rating-left">Accuracy
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_accuracy}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
            <div className="rating-left">Communication
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_communication}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
            <div className="rating-left">Cleanliness
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_cleanliness}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
          </div>
          <div>
            <div className="rating-right">Location
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_location}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
            <div className="rating-right">Check In
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_checkin}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
            <div className="rating-right">Value
              <StarRatingComponent
                name="star"
                editing={false}
                starCount={5}
                value={this.props.spot.average_value}
                starColor={'#008489'}
                emptyStarColor={'#dce0e0'}
                />
            </div>
          </div>
        </div>
        <div className="review-index">
          {this.renderReviews()}
        </div>
        <div className="review-form">
          <button
            className="submit-booking"
            onClick={this.handleOpenReviewModal}
          >
            Write a Review
          </button>
          <Modal
            className="review-modal"
            overlayClassName="review-overlay"
            isOpen={this.props.currentModal === "Review Form"}
            contentLabel="Review Form Modal"
            >
            <div
              className="close-button"
              onClick={this.handleCloseReviewModal}
            >
              X
            </div>
            <ReviewFormContainer />
          </Modal>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewIndex);
