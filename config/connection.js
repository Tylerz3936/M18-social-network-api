const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/config');

module.exports = mongoose.connection;