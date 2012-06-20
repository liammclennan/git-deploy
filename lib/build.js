var config = require('./config'),
  exec = require('child_process').exec,
  path = require('path'),
  build = {
    run: function (project, onDone) {      
      var buildScript = path.join(config.pathToRepo(project), '/' + config.projects[project].branch);
      exec(buildScript, { cwd: config.pathToRepo(project) }, onDone);    
    }
  };

module.exports = build;