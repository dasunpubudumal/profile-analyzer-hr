const request = require('request');

const {githubConfig} = require('../config');
const urlencode = require('urlencode');

gitHubFunctions = {
  getUser : (req, res) => {
    request.get('https://api.github.com/users/' + req.params.username + '?client_id=' +
      githubConfig.client_id + '&client_secret=' + githubConfig.client_secret
      , {headers: {'User-Agent':'profile-analyzer'}} ,
      (err, body, response) => {
        if(err) throw err;
        else {
          // console.log(body);
          res.json({success: true, data: JSON.parse(body.body)});
        }
      })
  },

  getRepos: (req, res) => {
    request.get('https://api.github.com/users/' + req.params.username + '/repos?client_id=' + githubConfig.client_id + '&client_secret=' + githubConfig.client_secret, {headers: {'User-Agent': 'profile-analyzer'}},
      (err, body, response) => {
        if(err) throw err;
        else {
          // console.log(JSON.parse(body.body));
          res.json({success: true, data: JSON.parse(body.body)})
        }
      });
  }
};

module.exports = gitHubFunctions;
