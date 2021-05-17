const mongo = require('mongoose')
const productlist = new mongo.Schema({
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    imgURL:{
        type:String,
        required:true
    }
})

module.exports = mongo.model('product',productlist)