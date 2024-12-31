import './App.css';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Component } from 'react';
import Test from './pages/test';
 

export default class App extends Component {
  constructor(){
      super()
      this.state = {
          search:"",
          language:"hi",
          pageSize:9
      }
  }
 
  changeSearch = (data)=>{
      this.setState({search:data})
  }
  chnangeLang = (data) => {
    this.setState({language:data})
  }
  chnangePageSize = (data) => {
    this.setState({pageSize:data})
  }
  render() {
  return (
    <> 
   
  <BrowserRouter>  
  <Menu chnangeLang={this.chnangeLang} chnangePageSize={this.chnangePageSize} changeSearch={this.changeSearch}/>

  <Routes>
    <Route path="/" element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="All"  />} /> 
    <Route path="/Politics" element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Politics" />} /> 
    <Route path="/Science" element={<Home  language={this.state.language}search={this.state.search} pageSize={this.state.pageSize} q="Science" />} /> 
    <Route path="/Technology" element={<Home  language={this.state.language}search={this.state.search} pageSize={this.state.pageSize} q="Technology" />} /> 
    <Route path="/Sports" element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Sports" />} /> 
    <Route path="/Jokes" element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Jokes" />} /> 
    <Route path="/Cricket" element={<Home language={this.state.language} search={this.state.search} pageSize={this.state.pageSize} q="Cricket" />} /> 
    <Route path="/Login" element={ <Test/>} /> 
    </Routes>
    </BrowserRouter>
   
    </>
  )};
} 
