require('dotenv').config();

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONN, (err, db) => {
    if (err) {
        console.log("connection failed with message");
        console.log(err);
        return;
    } else {
        http.createServer(app);
        app(db).listen(port, () => {
            database = db;
            console.log(`Server is running on port ${port}`);
        });        
    }
});