var path = require('path'),
fs = require('fs'),

config = {

    data: {
        "pathToRepo": "",
        "branch": "test"    
    },

    root: function () {
        return path.join(__dirname, '../');
    },

    validate: function () {
        checkPathToRepo.call(this);
        checkBranch.call(this);

        function checkPathToRepo () {
            var pathToRepo = path.join(this.root(), this.data.pathToRepo);
            try {
                fs.statSync(path.join(pathToRepo, '.git/'));
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