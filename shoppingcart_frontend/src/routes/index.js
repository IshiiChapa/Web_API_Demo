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