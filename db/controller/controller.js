const db = require('../models/dataSchema')

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:`Can't create there is some wrong input!!`});
        return
    }else{
        let memes = new db({
            title:req.body.title,
            url:req.body.url,
            description:req.body.description,
            meta:{
                likes:req.body.meta.likes,
                dislikes:req.body.meta.dislikes
            },
            comments:[],
            watched:req.body.watched
        });

        memes.save()
        .then((data) => res.send(data))
        .catch(err => res.send({message:`Error Occured : ${err}`}))
    }
}

exports.findAll = (req,res) => {
    db.find({})
    .then(data => res.send(data))
    .catch(err => res.send({message:`Can't find the data : ${err}`})) 
}