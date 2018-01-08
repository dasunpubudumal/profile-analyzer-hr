const express = require('express');
const request = require('request');
const https = require('https');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const urlencode = require('urlencode');
const PORT = 3000;
const functions = require('./functions');
const app = express();
const client_id = '2c77c5a8d6e0519eb3a5';
const client_secret = '04ba9edca249e4adf378919a5a1d7e36fad00e96';

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Authorize
app.post('/authorize', functions.authorize);

//Twitter REST Endpoint
app.post('/gettwitteruser/:screen_name', functions.getUser);

//Github REST endpoint
app.get('/getgithubuser/:username', (req, res) =>
  request.get('https://api.github.com/users/' + req.params.username + '?client_id=' +
    client_id + '&' + 'client_secret=' + client_secret, {headers: {'User-Agent':'profile-analyzer'}} ,
    (err, body, response) => {
      if(err) throw err;
      else {
        res.json({success: true, data: JSON.parse(body.body)});
      }
  })
);

app.listen(PORT, () => {
  console.log("Backend server is running on port ", PORT);
});
