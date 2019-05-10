//FileName : index.js

//import express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require ('mongoose');

// Import routes
let apiRoutes = require("./api-routes")

//initialize app
let app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/resthub');

var db = mongoose.connection;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api', apiRoutes)

//setup server port
var port = process.env.PORT || 3000;

//send message to default URL
app.get('/', (req, res) => res.send('Hello this is resthub with Express'));

//launch app to listen to specified port
app.listen(port, function(){
    console.log("Running resthub on port " + port);
})