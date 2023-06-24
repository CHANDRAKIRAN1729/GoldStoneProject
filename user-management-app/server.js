const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());

// Enable CORS for all routes
app.use(cors());
// Database
require('./db');

// Routes
app.use('/api/users', require('./routes/users.js'));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});