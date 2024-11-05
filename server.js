const express = require('express');
const server = express();
const routes = require('./routes/routes'); 
const cors = require('cors');
const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/Automobiles';

// Connect to MongoDB
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check the database connection
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

server.use(cors());
server.use(express.json());
server.use(routes);
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
