const express = require('express');
const router = express.Router();
const {
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurants,
  getRestaurant
} = require('../controllers/restaurantController');

router.route('/')
  .post(createRestaurant)
  .get(getRestaurants);

router.route('/:id')
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;