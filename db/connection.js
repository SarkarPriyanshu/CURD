const mongoose = require('mongoose');
const ENV = require('../config/config')

mongoose.connect(ENV.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(() => console.log(`Connected Congrats...`))
.catch(err => console.log(`Not Connected !!: ${err}`));

