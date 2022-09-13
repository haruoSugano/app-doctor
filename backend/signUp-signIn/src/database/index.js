const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app-doctor-cadastro', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
