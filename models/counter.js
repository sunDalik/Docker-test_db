const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    dateTime: String,
    clientInfo: String
});

module.exports.Counter = mongoose.model('Counter', counterSchema);