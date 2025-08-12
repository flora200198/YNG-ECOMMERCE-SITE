const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
const cors = require('cors');
const connectDB = require('./Config/configdB').connectDB;
require('dotenv').config(); 
const Joinus = require('./Routes/Joinus.Route');
const Getquote = require('./Routes/Getquote.Route');
const Contact = require('./Routes/Contact.Route');
// const connectDB = require('./Config/configdB').connectDB;



const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
connectDB(); // Connect to MongoDB
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// Import routes
app.use('/api', Joinus);
app.use('/api', Getquote);
app.use('/api', Contact);
// connectDB(); // Connect to MongoDB

app.get('/', (req, res) => {
    res.send('Hello World!');
    });


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}
);
module.exports = app; 
