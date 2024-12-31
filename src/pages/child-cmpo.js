import React, { Component } from 'react'

export default class Childpage extends Component {
     constructor(){
        super()
        this.state = {
            name:'',
            email:'',
        }
     }

     onChnage(e){
        this.setState({ [e.target.name] : e.target.value}); 
     }
     
  render() {
    return (
      <div> 
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <h1>Onchnage Input</h1>
        <input type='text' name="name" onChange={(e)=> this.onChnage(e)}  placeholder='Enter Your Name'/>
        <input type='text' name="email" onChange={(e)=> this.onChnage(e)}  placeholder='Enter Your Email'/>
        <button type='buttom'>Submit</button> 
      </div>
    )
  }
}
