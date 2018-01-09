const request = require('request');
const http = require('http');
const {config} = require('./config');
const urlencode = require('urlencode');

functions = {
  //Get the bearer token to send authorized requests.
  authorize: (req, res) => {
    const header = urlencode(config.consumerKey) + ':' + urlencode(config.consumerSecret);
    const encheader = new Buffer(header).toString('base64');
    const finalheader = 'Basic ' + encheader;

    /* Check the documentation for required headers.
     * https://developer.twitter.com/en/docs/basics/authentication/overview/application-only
     */
    request.post('https://api.twitter.com/oauth2/token', { form: {'grant_type': 'client_credentials' },
      headers: {
      Authorization: finalheader,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}, function(error, response, body) {
      if(error) throw error;
      else {
        // console.log(JSON.parse(body).access_token);  //This is wht is logged in the native console.
        config.bearertoken = JSON.parse(body).access_token;
        res.json({success: true, data: config.bearertoken});  // This is logged in browser console.
      }
    });
  },

  //Get user details by screen name.
  getUser: (req, res) => {
    const bearheader = 'Bearer ' + config.bearertoken; //finalheader here is the bearer token.
    request.get('https://api.twitter.com/1.1/users/show.json?screen_name='.concat(req.params.screen_name),
      {headers: {Authorization: bearheader},
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}, (err, body, response) => {
        if(err) throw err;
        else { res.json({success: true, data: JSON.parse(body.body)})}
      });
  }

};


module.exports = functions;
