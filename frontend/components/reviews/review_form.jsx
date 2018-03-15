import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        body:"",
        accuracy:"",
        communication:"",
        cleanliness:"",
        location:"",
        checkin:"",
        value:"",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentWillUnmount() {
      this.props.clearErrors();
    }

    renderErrors() {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

    handleSubmit(e){
      e.preventDefault();
      if (this.props.currentUser) {
        const review = merge({}, this.state, {spot_id:this.props.match.params.id, author_id:this.props.currentUser.id}
        );
        this.props.createReview(review)
          .then(()=> {
            this.setState({
              body:"",
              accuracy:"",
              communication:"",
              cleanliness:"",
              location:"",
              checkin:"",
              value:"",
            });
            this.props.receiveCurrentModal(null);
          });
      } else {
        this.props.receiveCurrentModal("Log In");
      }
    }

    update(field) {
      return (e) => this.setState({
        [field]: e.currentTarget.value
      });
    }


    onStarClick(nextValue, prevValue, name) {
      this.setState({
        [name]: nextValue
      });
    }

    handleOptionChange(field){
      return(e) => this.setState({
        [field]: e.currentTarget.value
      });
    }

    render(){
      const {body, accuracy, communication, cleanliness, location,checkin, value} = this.state;
      return(
        <div className="flex-review-form">
          <div className="review-form">
            <div className="review-form-header">
              <div className="flex">
                <h1 className="review-form-title">Describe Your Experience</h1><h4 className="review-form-title-thin">(required)</h4>
              </div>
              <h3 className="review-form-title-thin">Your review will be public on this home's pages.</h3>
            </div>
            <div className="review-form-input">
              <form onSubmit={this.handleSubmit}>
                <textarea
                  className="review-textarea"
                  value={body}
                  onChange={this.handleOptionChange('body')}
                  />
                <div className="review-label">
                  <label className="review-form-title">Accuracy</label>
                  <p className="review-form-title-thin">Was the home description accurate?</p>
                </div>
                <div>
                  <div className="stars" style={{fontSize:28}} >
                  <StarRatingComponent
                    name={"accuracy"}
                    starCount={5}
                    onStarClick={this.onStarClick.bind(this)}
                    starColor={'#008489'}
                    emptyStarColor={'#dce0e0'}
                    />
                  </div>
                </div>
                <div className="review-label">
                  <label className="review-form-title">Communication</label>
                  <p className="review-form-title-thin">How clearly did the host communicate plans, questions and concerns?</p>
                </div>
                <div className="stars" style={{fontSize:28}} >
                  <StarRatingComponent

                    name={"communication"}
                    starCount={5}
                    onStarClick={this.onStarClick.bind(this)}
                    starColor={'#008489'}
                    emptyStarColor={'#dce0e0'}
                    />
                </div>
                <div className="review-label">
                  <label className="review-form-title">Cleanliness</label>
                  <p className="review-form-title-thin">Was the home clean on your arrival?</p>
                </div>
                <div className="stars" style={{fontSize:28}} >
                <StarRatingComponent
                  name={"cleanliness"}
                  starCount={5}
                  onStarClick={this.onStarClick.bind(this)}
                  starColor={'#008489'}
                  emptyStarColor={'#dce0e0'}
                  />
                </div>
                <div className="review-label">
                  <label className="review-form-title">Location</label>
                  <p className="review-form-title-thin">How would you rate the location of the home?</p>
                </div>
                <div className="stars" style={{fontSize:28}} >
                <StarRatingComponent
                  name={"location"}
                  starCount={5}
                  onStarClick={this.onStarClick.bind(this)}
                  starColor={'#008489'}
                  emptyStarColor={'#dce0e0'}
                  />
                </div>
                <div className="review-label">
                  <label className="review-form-title">Checkin</label>
                  <p className="review-form-title-thin">How timely and easy was your check in?</p>
                </div>
                <div className="stars" style={{fontSize:28}} >
                <StarRatingComponent
                  name={"checkin"}
                  starCount={5}
                  onStarClick={this.onStarClick.bind(this)}
                  starColor={'#008489'}
                  emptyStarColor={'#dce0e0'}
                  />
                </div>
                <div className="review-label">
                  <label className="review-form-title">Value</label>
                  <p className="review-form-title-thin">How would you rate the value of the home for the price?</p>
                </div>
                <div className="stars" style={{fontSize:28}} >
                <StarRatingComponent
                  name={"value"}
                  starCount={5}
                  onStarClick={this.onStarClick.bind(this)}
                  starColor={'#008489'}
                  emptyStarColor={'#dce0e0'}
                  />
                </div>
                {this.renderErrors()}
                <input
                  className="submit-booking"
                  type="submit"
                  value="Submit Review"
                  />
              </form>
            </div>
          </div>
        </div>
      );
    }

}

export default withRouter(ReviewForm);
//
// <span className="rating">Accuracy
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.accuracy === "5"}
//     onChange={this.handleOptionChange("accuracy")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.accuracy === "4"}
//     onChange={this.handleOptionChange("accuracy")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.accuracy === "3"}
//     onChange={this.handleOptionChange("accuracy")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.accuracy === "2"}
//     onChange={this.handleOptionChange("accuracy")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.accuracy === "1"}
//     onChange={this.handleOptionChange("accuracy")}/>
//   <label className="rating-star"></label>
// </span>
// <span className="rating">Communication
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.communication === "5"}
//     onChange={this.handleOptionChange("communication")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.communication === "4"}
//     onChange={this.handleOptionChange("communication")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.communication === "3"}
//     onChange={this.handleOptionChange("communication")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.communication === "2"}
//     onChange={this.handleOptionChange("communication")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.communication === "1"}
//     onChange={this.handleOptionChange("communication")}/>
//   <label className="rating-star"></label>
// </span>
// <span className="rating">Cleanliness
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.cleanliness === "5"}
//     onChange={this.handleOptionChange("cleanliness")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.cleanliness === "4"}
//     onChange={this.handleOptionChange("cleanliness")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.cleanliness === "3"}
//     onChange={this.handleOptionChange("cleanliness")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.cleanliness === "2"}
//     onChange={this.handleOptionChange("cleanliness")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.cleanliness === "1"}
//     onChange={this.handleOptionChange("cleanliness")}/>
//   <label className="rating-star"></label>
// </span>
// <span className="rating">Location
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.location === "5"}
//     onChange={this.handleOptionChange("location")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.location === "4"}
//     onChange={this.handleOptionChange("location")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.location === "3"}
//     onChange={this.handleOptionChange("location")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.location === "2"}
//     onChange={this.handleOptionChange("location")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.location === "1"}
//     onChange={this.handleOptionChange("location")}/>
//   <label className="rating-star"></label>
// </span>
// <span className="rating">Check In
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.checkin === "5"}
//     onChange={this.handleOptionChange("checkin")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.checkin === "4"}
//     onChange={this.handleOptionChange("checkin")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.checkin === "3"}
//     onChange={this.handleOptionChange("checkin")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.checkin === "2"}
//     onChange={this.handleOptionChange("checkin")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.checkin === "1"}
//     onChange={this.handleOptionChange("checkin")}/>
//   <label className="rating-star"></label>
// </span>
// <span className="rating">Value
//   <input type="radio" className="rating-input"
//     value="5"
//     checked={this.state.value === "5"}
//     onChange={this.handleOptionChange("value")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="4"
//     checked={this.state.value === "4"}
//     onChange={this.handleOptionChange("value")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="3"
//     checked={this.state.value === "3"}
//     onChange={this.handleOptionChange("value")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="2"
//     checked={this.state.value === "2"}
//     onChange={this.handleOptionChange("value")}/>
//   <label className="rating-star"></label>
//   <input type="radio" className="rating-input"
//     value="1"
//     checked={this.state.value === "1"}
//     onChange={this.handleOptionChange("value")}/>
//   <label className="rating-star"></label>
// </span>
