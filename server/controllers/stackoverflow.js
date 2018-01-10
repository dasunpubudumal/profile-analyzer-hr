const request = require('request');
const {stackOverflowConfig} = require('../config');

stackOverflowFunctions = {
  getUser : (req, res) => {
    const URI = 'https://stackexchange.com/oauth/access_token?client_id=' +
      stackOverflowConfig.client_id + '&' + 'client_secret=' + stackOverflowConfig.client_secret +
      '&' + 'redirect_uri=' + stackOverflowConfig.redirect_uri;
    request.post(URI , {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}}, (err, response, body) => {
      if(err) throw err;
      else {
        console.log(JSON.parse(body));
        stackOverflowConfig.access_token = JSON.parse(body).access_token;
        res.json({success: true, data: stackOverflowConfig.access_token});
      }
    });
  }
};

module.exports = stackOverflowFunctions;
