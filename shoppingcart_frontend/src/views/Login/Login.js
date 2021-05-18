import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';
import Loginview from './LoginView'
import ReactCom, { Component } from 'react';
import axios from 'axios'



class Login extends Component{

  //  handleLogin = async googleData => {
  //   const res = await fetch("/api/v1/auth/google", {
  //       method: "POST",
  //       body: JSON.stringify({
  //       token: googleData.tokenId
  //     }),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   console.log(res,"wwwww")
  //   const data = await res.json()
  // }
 
  constructor(){
    super()
    this.state = {
        email : '',
        password : '',
        fields: {},
        errors: {}
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    
}
handleLogin = (res) =>{
  console.log('res')
}
changeEmail(event){
  this.setState({
      email:event.target.value
  })
}
changePassword(event){
  this.setState({
      password:event.target.value
  })
}
    onSubmit(){
      const registered = {
        email : this.state.email,
        password : this.state.password
    }
    console.log(registered,"sfsf")
    axios.Get('http://localhost:2000/api/login', registered)
        .then(response=> console.log(response.data))
    }

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Email
      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
     }

     if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
           formIsValid = false;
           errors["email"] = "Email is not valid";
         }
    }  

      //password
      if(!fields["password"]){
         formIsValid = false;
         errors["password"] = "Cannot be empty";
      }

      if(typeof fields["password"] !== "undefined"){
         if(!fields["password"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["password"] = "Only letters";
         }        
      }
 
     this.setState({errors: errors});
     return formIsValid;
 }
 handleChange(field, e){         
  let fields = this.state.fields;
  fields[field] = e.target.value;        
  this.setState({fields});
}


render(){
  return(
    <Loginview
      handleLogin = {this.handleLogin}
      changeEmail = {this.changeEmail}
      changePassword = {this.changePassword}
      handleValidation = {this.handleValidation}
      handleChange = {this.handleChange}
      onSubmit = {this.onSubmit}
      state = {this.state}/>
    );
}
}
export default Login;