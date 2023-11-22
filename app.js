const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the public directory
app.use(express.static('docs'));

// Route for '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

// Route for '/teste'
app.get('/teste', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'teste.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});