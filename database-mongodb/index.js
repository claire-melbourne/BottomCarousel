const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:3000';

const db = mongoose.connect(mongoUri);

module.exports = db;