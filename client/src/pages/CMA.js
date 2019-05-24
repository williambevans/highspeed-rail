import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Navbar from '../components/Navbar';
var Zillow  = require('node-zillow')
  

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
        
 
        var zwsid = "X1-ZWz17wwn5065fv_3jtqm";
        var zillow = new Zillow(zwsid)
        var parameters = {
          zpid: 1111111
        };
        zillow.get('GetZestimate', parameters)
          .then(function(results) {
            console.log(results);
            return results;
            // results here is an object { message: {}, request: {}, response: {}} 
          })
        
        this.setState({address: ""});
    }
  };

    render() {
      return (
        <div>
        <Navbar />
        <Container fluid>
        <Row>  
        <div className="searchHead">
        <p className="searchAbout">Rail Demolition Stats</p>
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
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p>property is 0-2 miles from rail</p>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p>property is 2-4 miles from rail</p>
      <div class="spinner-grow text-success" role="status">
       <span class="sr-only">Loading...</span>
      </div>
      <p>property is 4-6 miles from rail</p>
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
            </Col>
          </Row>
        </Container>
        </div>
      );
    }
  }



export default Search;
