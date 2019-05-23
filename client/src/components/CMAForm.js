import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import { Col, Row, Container } from "../components/Grid";

class CMAForm extends Component {
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
    
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
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
        );
      }
    }

export default CMAForm;
