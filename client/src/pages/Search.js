import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Navbar from '../components/Navbar';
import SearchHeader from "../components/SearchHeader";
import "../styles/SearchHeader.css";
import SimpleMap from "../components/SimpleMap";
import Geocode from "react-geocode";

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyBNjK-4QEbG4WDz58VnROVulgwJL4Lz4jE");

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();
  

class Search extends Component {
  state = {
    address: "",
    zip: "",
  };


     // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    handleFormSubmit = event => {
      event.preventDefault();
      if(this.state.address){
        Geocode.fromAddress(this.state.address
        ).then(
          response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({address:"", zip:""})
            console.log(lat, lng);
          },
          error => {
            alert('Address Not Found, Please Review Your Search Address...')
          }
        );
    }
    if(this.state.address === "411 cadiz street"){
      alert(this.state.address + " is 0-2 miles from the rail");
    } else if (this.state.address === "4900 mckinney ave"){
      alert(this.state.address + " is 4-6 miles from the rail")
    } else {
      alert (this.state.address + " is 4+ miles from the rail")
    }
  };

    render() {
      return (
        <div>
        <Navbar />
        <SearchHeader />
        <Container fluid>
        <Row>  
        <div className="searchHead">
        <p className="searchAbout">Property Acquisition Stats</p>
        <p className="goalState">Search your property to see if your home, family or business may be effected
        </p>
        </div>
        </Row>
          <Row>
          <Col size="md-4 stats">
            <div>
            <i class="fas fa-globe-americas"></i>
        <p className="goalState">Overall, between 7,957 and 8,218 acres of existing land would be converted for transportation use.
        </p>
      </div>
      <div>
      <i class="fas fa-house-damage"></i>
        <p className="goalState">Between 272 and 298 residences and 49 to 68 commercial buildings will be acquired for the construction of the rail.
        </p>
      </div>
      
      <div className="radius">
      <p className="danger">Directly Effected</p>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p className="danger">Property is 0-2 miles from rail</p>
      <p className="warningText">Indirectly Effected</p>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p className="warning">Property is 2-4 miles from rail</p>
      <p className="successText">Not Effected</p>
      <div class="spinner-grow text-success" role="status">
      <span class="sr-only">Loading...</span>
      </div>
      <p className="success">Property is 4+ miles from rail</p>
      </div>
      </Col>
            <Col size="md-6 searchForm">
              <form>
                <Input
                  value={this.state.address}
                  onChange={this.handleInputChange}
                  name="address"
                  placeholder="Address (required)"
                />
                <Input
                  value={this.state.zip}
                  onChange={this.handleInputChange}
                  name="zip"
                  placeholder="Zip (required)"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Search
                </FormBtn>
              </form>
              <div className="map">
              <SimpleMap />
              </div>
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
  }



export default Search;