const express = require("express");
const route = express.Router();
const accounts = require("./routerdb");


//GET request
route.get('/accounts',(req,res)=>{
    res.json({userData:accounts});
})


//GET param request

route.get('/accounts/:id',(req,res)=>{
   const accountid = Number(req.params.id)
   const getAccount = accounts.find((account) =>account.id===accountid)
   if(!getAccount){
       res.status(500).send("Accound not found");
   }else{
       res.json({userData:[getAccount]});
   }

});

route.get('/accounts/:username',(req,res)=>{
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((account) =>account.id===accountid)
    if(!getAccount){
        res.status(500).send("Accound not found");
    }else{
        res.json({userData:[getAccount]});
    }
 
 });

 route.get('/accounts/:id/:username',(req,res)=>{
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((account) =>account.id===accountid)
    if(!getAccount){
        res.status(500).send("Accound not found");
    }else{
        res.json({userData:[getAccount]});
    }
 
 });


module.exports = route;