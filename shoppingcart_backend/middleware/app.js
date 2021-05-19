const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require('dotenv')
const signup = require('./routes/signup')
const auth = require('./routes/auth')
const productlist = require('./routes/product')
const cors = require('cors')
const morgan = require("morgan");
const {v4:uuidv4} = require("uuid");
const path = require("path");
const fs = require("fs")
const { O_APPEND } = require('constants')



env.config()
mongoose.connect(process.env.DATABASE_CONNECTION_URL, () => console.log("Database Connected"))

morgan.token('id',function getId(req){
    return req.id
  })
  morgan.token('param',function(req,res,param){
      return"user token";
  })

  app.use (assignid);

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'),{flag:'a'})
app.use(function(req,res,next){
    console.log("Request Date:"+ new Date());
    next();
    })
    
    app.use(function(req,res){
        res.status(404);
        res.send("File Not Found")
     })
         
    app.use(morgan(':id:param :method :status:url"HTTP/:http-version"'));
    app.use(morgan(':id:param :method :status:url"HTTP/:http-version"',{stream:accessLogStream}));
     

app.get('/',(req,res)=>{
   
    req.end("Morgan Logger App");
})

function assignid(req,res,next){
  req.id= uuidv4();
  next();
}
app.listen(2000, ()=> console.log("Server is up and Running...."))