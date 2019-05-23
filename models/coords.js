const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coordsSchema = new Schema({
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
});

const Coords = mongoose.model("Coords", coordsSchema);

module.exports = Coords;