const express = require('express');
const { connectDB } = require('./Config/configdB');
const cors = require('cors');
require('dotenv').config();
 // check exact filename case
// const Joinus   = require('./Routes/Joinus.Route');
// const Getquote = require('./Routes/Getquote.Route');
// const Contact  = require('./Routes/Contact.Route');

console.log('Loading Joinus.Route...');
const Joinus = require('./Routes/Joinus.Route');
console.log('Loaded Joinus.Route');

console.log('Loading Getquote.Route...');
const Getquote = require('./Routes/Getquote.Route');
console.log('Loaded Getquote.Route');

console.log('Loading Contact.Route...');
const Contact = require('./Routes/Contact.Route');
console.log('Loaded Contact.Route');
const PORT = process.env.PORT || 10000;
const app = express();
app.use(cors());

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // replaces bodyParser
connectDB();

// Routes
app.use('/api', Joinus);
app.use('/api', Getquote);
app.use('/api', Contact);

// Simple health check
app.get('/healthz', (_req, res) => res.send('ok'));

// Helpful request logger while debugging CORS
app.use((req, _res, next) => {
  console.log('REQ', req.method, req.originalUrl, 'Origin:', req.headers.origin);
  next();
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API listening on http://0.0.0.0:${PORT}`);
});

module.exports = app;
