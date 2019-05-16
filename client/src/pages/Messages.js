import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Messages extends Component {
  state = {
    messages: [],
    address: "",
    zip: "",
    message: ""
  };

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages = () => {
    API.getMessages()
      .then(res => 
      this.setState({ messages: res.data, address:"", zip:"", message:"" }))
      .catch(err => console.log(err));
  };

   // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.address && this.state.zip) {
      API.saveMessage({
        address: this.state.address,
        zip: this.state.zip,
        message: this.state.message
      })
        .then(res => this.loadMessages())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Leave a detailed message if you or someone you know is being affected by the rail</h1>
            </Jumbotron>
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
              <TextArea
                value={this.state.message}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Message (required)"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Message
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>High-Speed Chat</h1>
            </Jumbotron>
            {this.state.messages.length ? (
              <List>
                {this.state.messages.map(message => (
                  <ListItem key={message._id}>
                    <a href={"/messages/" + message._id}>
                      <strong>
                        Address: {message.address} 
                        <br></br>
                        Zip Code: {message.zip}
                        <br></br>
                        Message: {message.message}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
