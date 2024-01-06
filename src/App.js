import './App.css';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Component } from 'react';
 

export default class App extends Component {
  constructor(){
      super()
      this.state = {
          search:""
      }
  }
 
  changeSearch = (data)=>{
      this.setState({search:data})
  }
  render() {
  return (
    <> 
  <BrowserRouter>  
  <Menu/>
  <Routes>
    <Route path="/" element={<Home search={this.state.search} q="All" />} /> 
    <Route path="/Politics" element={<Home search={this.state.search} q="Politics" />} /> 
    <Route path="/Science" element={<Home search={this.state.search} q="Science" />} /> 
    <Route path="/Techonolgy" element={<Home search={this.state.search} q="Technology" />} /> 
    <Route path="/Sports" element={<Home search={this.state.search} q="Sports" />} /> 
    <Route path="/Jokes" element={<Home search={this.state.search} q="Jokes" />} /> 
    <Route path="/Cricket" element={<Home search={this.state.search} q="Cricket" />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )};
} 
