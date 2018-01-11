const request = require('request');
const merge = require('merge-json');

gitHubFunctions = {
  getUser : (req, res) => {
    request.get('https://api.github.com/users/' + req.params.username, {headers: {'User-Agent':'profile-analyzer'}} ,
      (err, body, response) => {
        if(err) throw err;
        else {
          res.json({success: true, data: JSON.parse(body.body)});
        }
      });
  }
};

module.exports = gitHubFunctions;
