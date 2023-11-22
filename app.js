const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can use any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});