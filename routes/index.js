const express = require('express');
const router = express.Router();
const bookingController = require('../controllers');

router.post('/bookings', bookingController.createBooking);

router.get('/vehicles/:vehicle_type_id', bookingController.getVehiclesByTypeId);

router.get('/vehicles_category', bookingController.getVehiclesByCategoryId);


module.exports = router;
