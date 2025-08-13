const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const connectDB = require('./Config/configdB').connectDB;
require('dotenv').config(); 
const Joinus = require('./Routes/Joinus.Route');
const Getquote = require('./Routes/Getquote.Route');
const Contact = require('./Routes/Contact.Route');
// const connectDB = require('./Config/configdB').connectDB;



const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
connectDB(); // Connect to MongoDB
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Import routes
app.use('/api', Joinus);
app.use('/api', Getquote);
app.use('/api', Contact);
// connectDB(); // Connect to MongoDB

app.get('/', (req, res) => {
    res.send('Hello World!');
    });


app.listen(PORT, '0.0.0.0', () => {
  console.log(`API listening on http://0.0.0.0:${PORT}`);
}
);
module.exports = app; 
