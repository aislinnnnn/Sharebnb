import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

class ReviewIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteReview(this.props.review.id);
  }

  parseDate(date){
    let dated = moment(date);
    let day = dated.day();
    let year = dated.year();
    let monthNum = dated.month();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
                    'October', 'November', 'December'];
    let month = months[monthNum];

    return month.concat(' ').concat(day).concat(', ').concat(year);
  }


  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

  render() {
    const unparsed = this.props.review.created_at;
    const date = unparsed.split("T")[0];

    if (this.props.currentUser && (this.props.review.author_id === this.props.currentUser.id)) {
      return(
        <div className="single-review">
          <div className="flex">
            <img
              className="profile-image-review"
              src="https://www.cabe-africa.org/wp-content/uploads/2012/01/1.png"
            />
          <div className="not-flex">
            <h1
              className="single-review-username" >{this.capitalizeFirstLetter(this.props.review.author.username)}</h1>
            <h1
              className="single-review-date"
              >{this.parseDate(date)}</h1>
          </div>
          </div>
          <div className="review-body">
            <p>{this.props.review.body}</p>
          </div>
          <div className="delete-review">
            <div
              className="review-delete-button"
              onClick={this.handleSubmit}>
              <img
                className="review-delete-image"
                src="https://cdn4.iconfinder.com/data/icons/ui-actions/20/trash_can-256.png" />
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="single-review">
          <div className="flex">
            <img
              className="profile-image-review"
              src="https://www.cabe-africa.org/wp-content/uploads/2012/01/1.png"
            />
          <div className="not-flex">
            <h1
              className="single-review-username" >{this.capitalizeFirstLetter(this.props.review.author.username)}</h1>
            <h1
              className="single-review-date"
              >{this.parseDate(date)}</h1>
          </div>
          </div>
          <div className="review-body">
            <p>{this.props.review.body}</p>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ReviewIndexItem);
