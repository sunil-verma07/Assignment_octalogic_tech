const Booking = require('../models');
const mysql = require('mysql2');

// Create MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'car_rent',
});


exports.createBooking = async (req, res) => {
  try {
    const { vehicle_id, first_name, last_name, booking_date } = req.body;

    if (!vehicle_id || !first_name || !booking_date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const booking = await Booking.create({
      vehicle_id,
      first_name,
      last_name,
      booking_date
    });

    return res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getVehiclesByTypeId = (req, res) => {
    const { vehicle_type_id } = req.params;
  
    // Construct the SQL query with a WHERE clause
    const query = 'SELECT * FROM vehicles WHERE vehicle_type_id = ?';
  
    // Execute the SQL query
    pool.query(query, [vehicle_type_id], (error, results) => {
      if (error) {
        console.error('Error retrieving vehicles:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      // If no vehicles found
      if (results.length === 0) {
        return res.status(404).json({ error: 'No vehicles found with the provided vehicle_type_id' });
      }
  
      // If vehicles found, return them
      return res.status(200).json(results);
    });
  };

  exports.getVehiclesByCategoryId = (req, res) => {
    const { vehicle_category } = req.body;
  
    // Construct the SQL query with a WHERE clause
    const query = 'SELECT * FROM vehicle_types WHERE vehicle_category = ?';
  
    // Execute the SQL query
    pool.query(query, [vehicle_category], (error, results) => {
      if (error) {
        console.error('Error retrieving vehicles:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      // If no vehicles found
      if (results.length === 0) {
        return res.status(404).json({ error: 'No vehicles found with the provided vehicle_category' });
      }
  
      // If vehicles found, return them
      return res.status(200).json(results);
    });
  };