const path = require('path');

module.exports = {
    development: {
        connectionString: 'mongodb://localhost:27017/live-demo',
        rootFolder: path.join(__dirname, "./../")
    },
    production: {}
};