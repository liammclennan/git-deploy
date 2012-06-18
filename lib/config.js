var path = require('path'),

config = {

    data: {
        "pathToRepo": "",
        "branch": "test"    
    },

    validate: function () {
        var root = path.join(__filename, this.data.pathToRepo);
        console.log(root);
    }

};

module.exports = config;