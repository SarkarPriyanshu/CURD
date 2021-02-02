const dotenv = require('dotenv');
dotenv.config()

const ENV = {
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    DB_URL://db link goes here//
}

module.exports = ENV
