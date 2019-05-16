import axios from "axios";

export default {
  // Gets all books
  getMessages: function() {
    return axios.get("/api/messages");
  },
  // Deletes the message with the given id
  deleteMessages: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  // Saves a book to the database
  saveMessage: function(messageData) {
    return axios.post("/api/messages", messageData);
  }
};