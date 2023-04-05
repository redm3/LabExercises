const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

let userRoutes = require("./routes/userRoutes")
app.use('/api/users', userRoutes)

// parse requests of content-type -application/json

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});