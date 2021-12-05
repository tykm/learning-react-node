// Using Express to create a simple web server
const PORT = process.env.PORT || 3001;      // Runs on port from .env var 'PORT' (which Heroku sets automatically) or 3001
const express = require("express");
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});