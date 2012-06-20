var path = require('path'),
fs = require('fs'),

config = {

    projects: {
        gistblog: {
            "pathToRepo": "../gistblog-test/",
            "branch": "test",
        }
    },

    root: function () {
        return path.join(__dirname, '../');
    },

    pathToRepo: function (project) {
        return path.join(this.root(), this.projects[project].pathToRepo);
    },

    validate: function () {

        for (var project in this.projects) {
            checkPathToRepo.call(this, project);    
        }        

        function checkPathToRepo (project) {
            try {
                fs.statSync(path.join(this.pathToRepo(project), '.git/'));
            } catch (e) {
                console.log('error checking config.pathToRepo - ' + project);
                console.log(JSON.stringify(e));
                throw e;
            }
        }
    }

};

module.exports = config;

