const express = require('express');
const app = express();
const morgen = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

function createExpressApp(database) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use('/uploads', express.static('uploads'));

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }
        next();
    });

    app.use('/user', userRoutes(database));
    app.use('/product', productRoutes(database));

    return app;
};

module.exports = createExpressApp;