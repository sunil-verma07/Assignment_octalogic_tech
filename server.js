const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const dotenv = require('dotenv')
require('./connection.js')


const bookingRoute = require('./routes')


dotenv.config()
const app = express()
const port = process.env.PORT || 5000;


app.use(express.urlencoded({extended: true})); 

app.use(express.json());

app.use('/api',bookingRoute)



app.listen(port, () => console.log(`Listening on port ${port}`))