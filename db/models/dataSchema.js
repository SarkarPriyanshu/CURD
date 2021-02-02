const mongoose = require('mongoose');

const Memes = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    description:{
        type:String
    },

    meta:{
        likes:{
            type:Number,
        },
        dislikes:{
            type:Number
        },
    },
    
    comments:[
        {   
            body:String
        }
    ],
    
    watched:{
        type:Number
    }
});


const memesData = new mongoose.model('Memes',Memes)

module.exports = memesData;