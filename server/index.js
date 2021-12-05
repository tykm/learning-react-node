// Using Express to create a simple web server
const PORT = process.env.PORT || 3001;      // Runs on port from .env var 'PORT' (which Heroku sets automatically) or 3001
const path = require('path');
const express = require("express");
const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Creating endpoint for {url}/api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});