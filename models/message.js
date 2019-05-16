const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  address: { type: String, required: true },
  zip: { type: String, required: true },
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
