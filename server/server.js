const express = require('express');
const request = require('request');
const https = require('https');
const cors = require('cors');
const {config, githubConfig} = require('./config');
const bodyParser = require('body-parser');
const urlencode = require('urlencode');
const PORT = 3000;
const functions = require('./functions');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Authorize
app.post('/authorize', functions.authorize);

//Twitter REST Endpoint
app.post('/gettwitteruser/:screen_name', functions.getUser);

//Github REST endpoint
app.get('/getgithubuser/:username', (req, res) =>
  request.get('https://api.github.com/users/' + req.params.username + '?client_id=' +
    githubConfig.client_id + '&' + 'client_secret=' + githubConfig.client_secret, {headers: {'User-Agent':'profile-analyzer'}} ,
    (err, body, response) => {
      if(err) throw err;
      else {
        res.json({success: true, data: JSON.parse(body.body)});
      }
  })
);

// Server declaration
app.listen(PORT, () => {
  console.log("Backend server is running on port ", PORT);
});
