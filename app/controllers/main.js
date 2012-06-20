var _ = require('underscore'),
  config = require('../../lib/config'),
  exec = require('child_process').exec,
  build = require('../../lib/build'),
  git = require('../../lib/git'),
  winston = require('winston');

winston.add(winston.transports.File, { filename: 'log/app.log' });

var Main = function () {

  this.index = function (req, resp, params) {
    this.respond({
    	"_": _, 
    	projects: config.projects
    }, {
      format: 'html'
    , template: 'app/views/main/index'
    });
  };

  this.deploy = function (req, resp, params) {
    var that = this;

    build.pre(params.project, postPre);
    
    function postPre(error, stdout, stderr) {
      puts.apply(this, arguments);
      git.pull(params.project, postPull);
    }
    function postPull(error, stdout, stderr) {
      puts.apply(this, arguments);
      if (error) {
        redirectToIndex();
        return;
      }
      build.post(params.project, postPost);
    }
    function postPost(error, stdout, stderr) {
      puts.apply(this, arguments);
      redirectToIndex();
    }
    function redirectToIndex() {
      that.redirect({controller: that.name, action: 'index'});
    }
  };

  config.validate();

};

function puts(error, stdout, stderr) { 
  if (stdout) winston.info(stdout); 
  if (stderr) winston.info(stderr);
  if (error) winston.info(error);
}

exports.Main = Main;


