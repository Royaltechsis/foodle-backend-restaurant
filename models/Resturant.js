const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Restaurant name is required'],
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  cuisine: {
    type: String,
    required: [true, 'Cuisine type is required']
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);