const express = require("express");

// Bring in the express app
const app = express();

// Get request on the home page
app.get("/", (req, res) => {
    res.send({ test: "line!" });
});

// Log the port where it's running
app.listen(3333, () => {
    console.log("App running on port 3333")
});