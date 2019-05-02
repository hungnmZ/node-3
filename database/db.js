let mongoose = require('mongoose');
let config = require('config');

let port = process.env.MONGO_PORT || config.get("MONGO_PORT");
let path = process.env.MONGO_PATH || config.get("MONGO_PATH");

module.exports = mongoose.createConnection(`mongodb://${path}:${port}/todo`, {useNewUrlParser : true}, function (err) {
    if (err)
        console.log(err);
    else console.log ('Connected successfully to server');
});