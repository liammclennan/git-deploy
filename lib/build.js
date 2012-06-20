var config = require('./config'),
  exec = require('child_process').exec,
  path = require('path'),
  build = {

    pre: function (project, onDone) {
      var buildScript = path.join(config.pathToRepo(project), '/' + config.projects[project].branch + '-pre');
      exec(buildScript, { cwd: config.pathToRepo(project) }, onDone);    
    },

    post: function (project, onDone) {
      var buildScript = path.join(config.pathToRepo(project), '/' + config.projects[project].branch + '-post');
      exec(buildScript, { cwd: config.pathToRepo(project) }, onDone);    
    }
  };

module.exports = build;