const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  mileage: Number,
  transmission: String,
  location: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model('Car', carSchema);
