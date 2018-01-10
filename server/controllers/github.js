const request = require('request');
const http = require('http');
const {githubConfig} = require('../config');
const urlencode = require('urlencode');

gitHubFunctions = {
  getUser : (req, res) => {
    request.get('https://api.github.com/users/' + req.params.username, {headers: {'User-Agent':'profile-analyzer'}} ,
      (err, body, response) => {
        if(err) throw err;
        else {
          // console.log(body);
          res.json({success: true, data: JSON.parse(body.body)});
        }
      })
  }
};

module.exports = gitHubFunctions;
