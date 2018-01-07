const request = require('request');
const config = require('./config');

functions = {
  authorize: function(req, res) {
    const header = config.consumerkey + ':' + config.consumersecret;
    const encheader = new Buffer(header).toString('base64');
    const finalheader = 'Basic ' + encheader;

    request.post('https://api.twitter.com/oauth2/token', { form: {'grant_type': 'client_credentials' },
      headers: { Authorization: finalheader, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}, function(error, response, body) {
      if(error) throw error;
      else {
        console.log(body);  //This is wht is logged in the native console.
        config.bearertoken = JSON.parse(body).access_token;
        res.json({success: true, data: config.bearertoken});  // This is logged in browser console.
      }
    });
  }
};

module.exports = functions;
