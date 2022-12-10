// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body; // destructure the request body
  
    // Insert the new user into the database
    db.collection('users').insertOne({
      username,
      password,
      email,
    }, (err, result) => {
      if (err) {
        // Return an error if the insertion fails
        console.error(err);
        res.status(500).send('Error signing up user');
      } else {
        // Return a success response if the insertion succeeds
        res.send({ success: true });
      }
    });
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
