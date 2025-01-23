/**
 * @file server.js 
 * @brief Entry point and server for Aiden Ballard's personal website.
 */

// Import dependencies
const express = require('express');
const path = require('path');


// Initialize Express app
const app = express();

// serve files from frontend dir
app.use(express.static(path.join(__dirname, 'frontend')));

// porting for the localhost
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
