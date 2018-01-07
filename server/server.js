const express = require('express');
const request = require('request');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const urlencode = require('urlencode');
const PORT = 3000;
const functions = require('./functions');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Authorize
app.post('/authorize', functions.authorize);

//REST Endpoint
app.post('/gettwitteruser/', functions.getUser);

app.listen(PORT, () => {
  console.log("Backend server is running on port ", PORT);
});
