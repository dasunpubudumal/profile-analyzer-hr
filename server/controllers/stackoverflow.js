const request = require('request');
const {stackOverflowConfig} = require('../config');

stackOverflowFunctions = {
  getUser : (req, res) => {
    const URL = 'https://api.stackexchange.com/users/' + req.params.user_id + '?order=desc&sort=reputation&site=stackoverflow';

    request.get(URL, {headers: {'Content-Type': 'application/json'}} ,(err, body, response) => {
      if(err) throw err;
      else {
        console.log(body);
        // res.json({success: true, data: JSON.parse(body)});
      }
    });
  }
};

module.exports = stackOverflowFunctions;
