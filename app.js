const express =  require('express');
const connectDB = require('./config/db_mongo');
const ENV = require('./config/env');
const app = express;

connectDB(ENV.MONGO_URI, ENV.DB_NAME);







module.exports = app;