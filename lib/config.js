var path = require('path'),
fs = require('fs'),

config = {

    data: {
        "pathToRepo": "../gistblog-test/",
        "branch": "test",
    },

    root: function () {
        return path.join(__dirname, '../');
    },

    pathToRepo: function () {
        return path.join(this.root(), this.data.pathToRepo);
    },

    validate: function () {
        checkPathToRepo.call(this);

        function checkPathToRepo () {
            try {
                fs.statSync(path.join(this.pathToRepo(), '.git/'));
            } catch (e) {
                console.log('error checking config.pathToRepo');
                console.log(JSON.stringify(e));
                throw e;
            }
        }

        function checkBranch () {
            throw new Error('TODO');            
        }
    }

};

module.exports = config;

