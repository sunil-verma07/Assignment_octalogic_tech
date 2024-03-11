const { DataTypes } = require('sequelize');
const sequelize = require('../connection')

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
    },
    booking_date: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'bookings',
    timestamps: false
} );

module.exports = Booking;