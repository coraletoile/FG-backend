const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5001;



const uri = process.env.MY_URI


// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

// MongoDB Connection
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('connected to database');
  } catch {
    console.log('error')
  }
}
connect();

// Example Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
