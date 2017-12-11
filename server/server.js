const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const app = express();
const cors = require('cors');
const db = require('./database');
var server = http.createServer(app);
app.use(morgan('combined'));
app.use(cors()); // Allows CORS(Cross Origin GET Request)

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(bodyParser.json({type: '*/*'}));
app.use("/", express.static(publicPath));
app.listen(port, function() {
  console.log('Server Listening on localhost:' + port);
});

module.exports = app;
