var config = require('./config'),
  exec = require('child_process').exec,
  git = {

    pull: function (onDone) {
      exec("git pull origin " + config.data.branch, { cwd: config.pathToRepo() }, onDone);            
    }

  };

module.exports = git;