import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "../views/Login/Login"
import Signup from "../views/Signup/Signup"
import Home from "../views/Home"
import ItemView from "../views/Home/Container"
import Checkout from "../views/Home/Checkout"
import AddressForm from "../views/Home/AddressForm"
import PaymentForm from "../views/Home/PaymentForm"
import Review from "../views/Home/Review"
import Pricing from "../views/Home/Pricing"
// const express=require('express');
// const cors=require('cors');
// const app=express();
// const swaggerJSDoc=require('swagger-jsdoc');
// const swaggerUI=require('swagger-ui-express');


// const swaggerOptions={
//     definition:{
//         openapi:'3.0.0',
//         info:{
//             title:"Rstuarent API",
//             version:'1.0.0',
//             contact:{

//             },
//             servers:["http://localhost:3000"]

//         }

//     },
//     apis:["index.js"]
// }

// const swaggerDocs=swaggerJSDoc(swaggerOptions);
// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));



export default () => (
    <BrowserRouter>
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={Signup}/>
    <Route path='/itemview' exact component={ItemView}/>
    <Route path='/checkout' exact component={Checkout}/>
    <Route path='/addressform' exact component={AddressForm}/>
    <Route path='/PaymentForm' exact component={PaymentForm}/>
    <Route path='/Review' exact component={Review}/>
    <Route path='/Pricing' exact component={Pricing}/>


    </BrowserRouter>
)

// app.use(express.json());
// /**
//  * @swagger
//  * definition:
//  *   type:string
//  *   required:true
//  * Product:
//  *    type:string
//  *     required:true
//  * name:
//  *  type:String
//  * description: name of the product
//  * example:'thanduri chichen pizza'
//  * price:
//  *  type:sring
//  * imgURL:
//  *   type:string
//  * 
//  * 
//  * 
//  */