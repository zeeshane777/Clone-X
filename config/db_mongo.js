const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (mongoURI, dbName) => {
    mongoose.connect(mongoURI, {dbName: dbName})
    .then(() => console.log('connexion à mongo reussi!'))
    .catch(error => console.log(`erreur de connexion mongo : ${error}`))
}

module.exports = connectDB