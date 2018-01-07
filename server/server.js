const express = require('express');
const request = require('request');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const functions = require('./functions');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Rest endpoints
app.post('/authorize', functions.authorize);

app.listen(PORT, () => {
  console.log("Backend server is running on port ", PORT);
});
