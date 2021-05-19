const mongo = require('mongoose')
const category = require('./category')
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
   // category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
})

module.exports = mongo.model('product',productlist)