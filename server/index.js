// Using Express to create a simple web server
const PORT = process.env.PORT || 3001;      // Runs on port from .env var 'PORT' (which Heroku sets automatically) or 3001
const express = require("express");
const app = express();

// Creating endpoint for {url}/api
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});