// Import Express module
const express = require('express');

require('dotenv').config();
// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;


// Endpoint 1: /api/name
app.get('/api/name', (req, res) => {
  res.json({

    name: "Mukhtar Hamza Musa",
    email: "mukhtarhamzamusa67@gmail.com",
    tasks: [
      "learn nodejs",
      "build simple APIs",
      "practice Express.js"
    ]
  });
});

// Endpoint 2: /api/contact
app.get('/api/contact', (req, res) => {
  res.json({
    email: "mukhtarhamzamusa67@gmail.com",
    phone: "+2348168564035",
    address: "Federal University of Technology Babura, Jigawa State"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
