var config = require('./config'),
  exec = require('child_process').exec,
  git = {
    pull: function (project, onDone) {
      exec("git pull origin " + config.projects[project].branch, { cwd: config.pathToRepo(project) }, onDone);            
    }
  };

module.exports = git;