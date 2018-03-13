import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      address:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const geocoder = new google.maps.Geocoder();
    const address = this.state.address;
    const that = this;
    geocoder.geocode({'address':address}, function(results, status){
      if (status === 'OK') {
        const center = results[0].geometry.location;
        that.props.map.setCenter(center);
        that.props.map.setZoom(12);
      } else {
        console.log(status);
      }
    });

  }

  update(){
    return (e) => this.setState({address: e.currentTarget.value});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Address:</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.update()}
              />
        </form>
      </div>
    );
  }

}
 export default withRouter(SearchBar);
