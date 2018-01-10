const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

/*
  =======================
  CONTROLLERS
  =======================
*/

let gitHubController = require('./controllers/github');
let twitterController = require('./controllers/twitter');
let stackOverflowController = require('./controllers/stackoverflow');

/*
  =======================
  MIDDLEWARE
  =======================
*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/*
  =======================
  BACKEND ENDPOINTS
  =======================
*/

// Twitter Authorize
app.post('/authorize', twitterController.authorize);

//Twitter REST Endpoint
app.post('/gettwitteruser/:screen_name', twitterController.getUser);

//Github REST Endpoint
app.get('/getgithubuser/:username', gitHubController.getUser);

//StackOverflow REST Endpoint
app.get('/getstackofuser/:user_id', stackOverflowController.getUser);

/*
  ========================
  BACKEND SERVER
  ========================
*/

// Server declaration
app.listen(PORT, () => {
  console.log("Backend server is running on port ", PORT);
});
