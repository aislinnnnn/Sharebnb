import React from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';

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
        const lat = center.lat();
        const lng = center.lng();
        that.setState({address:""});
        that.props.history.push(`/search/?lat=${lat}&lng=${lng}`);
      }
    });
  }

  update(){
    return (e) => this.setState({address: e.currentTarget.value});
  }

  render() {
  
    return(
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <div  className="search">
            <img className="search-icon"
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png" />
            <input
              className="search-input"
              placeholder={this.props.placeholder}
              type="text"
              value={this.state.address}
              onChange={this.update()}
              />
          </div>
        </form>
      </div>
    );
  }

}
 export default withRouter(SearchBar);
