var config = require('./config'),
  exec = require('child_process').exec,
  path = require('path'),
  build = {
    run: function (onDone) {      
      var buildScript = path.join(config.pathToRepo(), '/' + config.data.branch);
      exec(buildScript, { cwd: config.pathToRepo() }, onDone);    
    }
  };

module.exports = build;