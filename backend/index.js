//import the require dependencies installed using npm
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.set('view engine', 'ejs');

var getMaintainanceRequests = require('./routes/MaintainancePageRoutes/MaintainanceRoutes-CRUD');

//use cors to allow cross origin resource sharing
app.options('*', cors())
app.use(cors({ origin: ['http://127.0.0.1:3000', "*"], methods: ["GET", "POST", "PUT", "DELETE"], credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Allow Access Control - cors to allow from all levels
app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
        res.setHeader('Cache-Control', 'no-cache');
    next();
  });

//routes
app.use("/maintainancePage",getMaintainanceRequests)


//backedn would run on port 3002
app.listen(3002 , function () {
    console.log("Server listening on port 3002");
});

//used to start the server + add routes