import React from 'react' 
import { Component } from 'react'
import ItemView from './Itemview'
import axios from 'axios'

class itemview extends Component{

    state = { 
        products:[]
    }

    componentDidMount()
    {
        axios.get('http://localhost:2000/api/product')
        .then((response)=>{
            console.log(response.data)
            this.setState({
                products:response.data
            })
        })
        .catch(ex=> console.log(ex.data));
    }
    

    render(){
        return(
            <ItemView
            state = {this.state}/>
        )
    }

}
export default itemview;