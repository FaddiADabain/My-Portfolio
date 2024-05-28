// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve the Vite index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
