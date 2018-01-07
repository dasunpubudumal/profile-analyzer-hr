const request = require('request');
const config = require('./config');

functions = {
  authorize: (req, res) => {
    // From twitter API
    const header = config.consumerKey + ":" + config.consumerSecret;
    const encheader =  new Buffer(header).toString('base64');
    const finalheader = 'Basic' + encheader;

    request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
      headers: {Authorization: finalheader}}, (err, response, body) => {
        if(err) throw err;
        else {
          console.log(JSON.parse(body));  //Test
          config.bearerToken = JSON.parse(body).access_token;
          res.json({success:true, data:config.bearerToken});
        }
    });
  }
};

module.exports = functions;
