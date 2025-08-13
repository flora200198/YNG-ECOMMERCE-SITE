const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./Config/configdB'); // check exact filename case
const Joinus   = require('./Routes/Joinus.Route');
const Getquote = require('./Routes/Getquote.Route');
const Contact  = require('./Routes/Contact.Route');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Exact origins (no trailing slash). Add ALL frontends you actually use.


// Allow only the official frontend domain
app.use(cors({
  origin: 'https://yng-ecommerce-site.vercel.app',
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false // set to true only if you use cookies/credentials
}));
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // replaces bodyParser
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
