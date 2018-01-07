const request = require('request');
const config = require('./config');

functions = {
  authorize: function(req, res) {
    const header = config.consumerkey + ':' +config.consumersecret;
    const encheader = new Buffer(header).toString('base64');
    const finalheader = 'Basic ' + encheader;

    request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
      headers: {Authorization: finalheader}}, function(error, response, body) {
      if(error)
        console.log(error);
      else {
        console.log(body);
        config.bearertoken = JSON.parse(body).access_token;
        res.json({success: true, data:config.bearertoken});
      }

    })
  }
};

module.exports = functions;
