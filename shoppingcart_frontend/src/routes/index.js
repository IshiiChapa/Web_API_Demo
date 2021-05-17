import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "../views/Login/Login"
import Signup from "../views/Signup/Signup"
import Home from "../views/Home"
import ItemView from "../views/Home/Container"

export default () => (
    <BrowserRouter>
    <Route path='/login' exact component={Login}/>
    <Route path='/signup' exact component={Signup}/>
    <Route path='/itemview' exact component={ItemView}/>
    </BrowserRouter>
)