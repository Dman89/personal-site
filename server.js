const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const cors = require('cors')
app.use(morgan('combined'));
app.use(cors()); // Allows CORS(Cross Origin GET Request)
app.use(bodyParser.json({type: '*/*'}));
app.use("/", express.static('public'));


const port = process.env.PORT || 3000;
// const server = http.createServer(app);
app.listen(port, function() {
  console.log('Server Listening on localhost:' + port);
});

module.exports = app;
