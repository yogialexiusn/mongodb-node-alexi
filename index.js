const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// route
app.use("/api", productRoute);

// log node running
app.listen(3000, () => {
    console.log('Server running in port 3000')
});

// database
mongoose.connect("mongodb+srv://yogialexiusn_db_user:sjNg6sPBPmnuqAVR@cluster0.df8oywz.mongodb.net/")
    .then(() => {
        console.log("Connected to database")
    })
    .catch(() => {
        console.log("Failed Connected to database")
    })