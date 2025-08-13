// server.js
'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// ⬇️ Make sure the file names (and folders) match EXACTLY on Linux/Render
const { connectDB } = require('./Config/configdB');   // e.g. ./Config/configDB if that's the actual file
const JoinusRouter  = require('./Routes/Joinus.Route');
const GetquoteRouter= require('./Routes/Getquote.Route');
const ContactRouter = require('./Routes/Contact.Route');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ------------------------- CORS (allowlist) ------------------------- */
const allowed = new Set([
  'http://localhost:3001',
  'https://yng-ecommerce-site.vercel.app', // your prod frontend (no trailing slash)
  'https://yng-ecommerce-site.onrender.com'// add if you host frontend on Render
]);

const corsOptions = {
  origin(origin, cb) {
    // allow server-to-server / curl (no Origin) and allowed browsers
    if (!origin || allowed.has(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS: ' + origin));
  },
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false // set true ONLY if you use cookies (then origin must be exact, no "*")
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // preflight with same options

/* ------------------------- Parsers & logs --------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Lightweight request log (helps when debugging CORS/paths in Render logs)
app.use((req, _res, next) => {
  console.log('REQ', req.method, req.originalUrl, 'Origin:', req.headers.origin || '-');
  next();
});

/* ------------------------- Health check ----------------------------- */
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

/* ------------------------- DB connect (safe) ------------------------ */
(async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ connectDB failed:', err);
    // Keep the server running so /healthz still works; decide if you want to process.exit(1) instead.
  }
})();

/* ------------------------- API routes ------------------------------- */
// Compose to: POST /api/join , /api/get-quote , /api/contact (depending on your route files)
app.use('/api', JoinusRouter);
app.use('/api', GetquoteRouter);
app.use('/api', ContactRouter);

/* ------------------------- 404 & error handlers --------------------- */
app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, message: 'API route not found', path: req.originalUrl });
});

app.use((err, _req, res, _next) => {
  console.error('💥 Unhandled error:', err);
  if (err && typeof err.message === 'string' && err.message.startsWith('Not allowed by CORS')) {
    return res.status(403).json({ ok: false, message: err.message });
  }
  res.status(500).json({ ok: false, message: 'Internal server error' });
});

/* ------------------------- Start server ----------------------------- */
app.listen(PORT, '0.0.0.0', () => {
  console.log('Render PORT env =', process.env.PORT);
  console.log(`🚀 API listening on http://0.0.0.0:${PORT}`);
});

module.exports = app;
