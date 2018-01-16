const request = require('request');

stackOverflowFunctions = {
  getUser : (req, res) => {
    const URL = 'https://api.stackexchange.com/users/' + req.params.user_id + '?order=desc&sort=reputation&site=stackoverflow';

    request({method: 'GET', uri: URL, gzip: true},(err, body, response) => {
      if(err) throw err;
      else {
          // console.log(JSON.parse(body.body));
          res.json({success: true, data: JSON.parse(body.body)});
      }
    });
  },

};

module.exports = stackOverflowFunctions;
