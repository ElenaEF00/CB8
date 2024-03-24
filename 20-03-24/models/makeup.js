const mongoose = require("mongoose");

const makeupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: false,
  },
  brand: {
    type: String,
    required: false,
    default: false,
  },
  price: {
    type: Number,
    required: true,
    default: false,
  },
  category: {
    type: String,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("Makeup", makeupSchema);
