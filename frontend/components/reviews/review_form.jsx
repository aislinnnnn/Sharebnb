import React from 'react';
import { withRouter } from 'react-router';
import { merge } from 'lodash';

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

    handleOptionChange(accuracy){
      return(e) => this.setState({
        [accuracy]: e.currentTarget.value
      });
    }

    render(){
      const {body, accuracy, communication, cleanliness, location,checkin, value} = this.state;
      return(
        <div className="review-form">
          <form
            onSubmit={this.handleSubmit}
            >
            <span className="rating">Accuracy
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.accuracy === "5"}
                onChange={this.handleOptionChange("accuracy")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.accuracy === "4"}
                onChange={this.handleOptionChange("accuracy")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.accuracy === "3"}
                onChange={this.handleOptionChange("accuracy")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.accuracy === "2"}
                onChange={this.handleOptionChange("accuracy")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.accuracy === "1"}
                onChange={this.handleOptionChange("accuracy")}/>
              <label className="rating-star"></label>
            </span>
            <span className="rating">Communication
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.communication === "5"}
                onChange={this.handleOptionChange("communication")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.communication === "4"}
                onChange={this.handleOptionChange("communication")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.communication === "3"}
                onChange={this.handleOptionChange("communication")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.communication === "2"}
                onChange={this.handleOptionChange("communication")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.communication === "1"}
                onChange={this.handleOptionChange("communication")}/>
              <label className="rating-star"></label>
            </span>
            <span className="rating">Cleanliness
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.cleanliness === "5"}
                onChange={this.handleOptionChange("cleanliness")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.cleanliness === "4"}
                onChange={this.handleOptionChange("cleanliness")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.cleanliness === "3"}
                onChange={this.handleOptionChange("cleanliness")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.cleanliness === "2"}
                onChange={this.handleOptionChange("cleanliness")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.cleanliness === "1"}
                onChange={this.handleOptionChange("cleanliness")}/>
              <label className="rating-star"></label>
            </span>
            <span className="rating">Location
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.location === "5"}
                onChange={this.handleOptionChange("location")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.location === "4"}
                onChange={this.handleOptionChange("location")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.location === "3"}
                onChange={this.handleOptionChange("location")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.location === "2"}
                onChange={this.handleOptionChange("location")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.location === "1"}
                onChange={this.handleOptionChange("location")}/>
              <label className="rating-star"></label>
            </span>
            <span className="rating">Check In
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.checkin === "5"}
                onChange={this.handleOptionChange("checkin")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.checkin === "4"}
                onChange={this.handleOptionChange("checkin")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.checkin === "3"}
                onChange={this.handleOptionChange("checkin")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.checkin === "2"}
                onChange={this.handleOptionChange("checkin")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.checkin === "1"}
                onChange={this.handleOptionChange("checkin")}/>
              <label className="rating-star"></label>
            </span>
            <span className="rating">Value
              <input type="radio" className="rating-input"
                value="5"
                checked={this.state.value === "5"}
                onChange={this.handleOptionChange("value")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="4"
                checked={this.state.value === "4"}
                onChange={this.handleOptionChange("value")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="3"
                checked={this.state.value === "3"}
                onChange={this.handleOptionChange("value")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="2"
                checked={this.state.value === "2"}
                onChange={this.handleOptionChange("value")}/>
              <label className="rating-star"></label>
              <input type="radio" class="rating-input"
                value="1"
                checked={this.state.value === "1"}
                onChange={this.handleOptionChange("value")}/>
              <label className="rating-star"></label>
            </span>
            <textarea
              value={body}
              onChange={this.handleOptionChange('body')}
              />
            {this.renderErrors()}
            <input
              type="submit"
              value="Submit Review"
              />
          </form>
        </div>
      );
    }

}

export default withRouter(ReviewForm);
