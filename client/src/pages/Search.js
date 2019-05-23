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
            console.log(lat, lng);
          },
          error => {
            alert('Address Not Found, Please Review Your Search Address...')
          }
        );
        this.setState({address: ""});
    }
  };

    render() {
      return (
        <div>
        <Navbar />
        <SearchHeader />
        <Container fluid>
          <Row>
          <Col size="md-6">
            <div>
        <p className="searchAbout">Rail Demolition Stats</p>
        <p className="goalState">Overall, between 7,957 and 8,218 acres of existing land would be converted for transportation use, depending on the build alternative. Between 272 and 298 residences and 49 to 68 commercial buildings will be acquired for the construction of the rail. Search your property to see if your home, family or business may be effected
        </p>
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