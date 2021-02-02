const dotenv = require('dotenv');
dotenv.config()

const ENV = {
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    DB_URL:"mongodb+srv://test123:test123@tmcuster.spyrr.mongodb.net/Memes?retryWrites=true&w=majority"
}

module.exports = ENV