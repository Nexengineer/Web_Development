const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connecting the routes to the items
const items = require("./routes/api/items")

const app = express();

// Body Parser MiddleWare
app.use(bodyParser.json());

//db Config
const db = require('./config/keys').mongoURI;

// Connecting to mongo db.
mongoose
    .connect(db)
    .then(() => console.log('mongoDB connected....'))
    .catch(err => console.log(err));

// User Routes
app.use('/api/items', items);


const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));