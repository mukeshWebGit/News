import './App.css';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Component } from 'react';
 

export default class App extends Component {
  constructor(){
      super()
      this.state = {
          search:"",
          language:"hi"
      }
  }
 
  changeSearch = (data)=>{
      this.setState({search:data})
  }
  chnangeLang = (data) => {
    this.setState({language:data})
    console.log(data)
  }
  render() {
  return (
    <> 
  <BrowserRouter>  
  <Menu chnangeLang={this.chnangeLang} />
  <Routes>
    <Route path="/" element={<Home language={this.state.language} search={this.state.search} q="All"  />} /> 
    <Route path="/Politics" element={<Home language={this.state.language} search={this.state.search} q="Politics" />} /> 
    <Route path="/Science" element={<Home  language={this.state.language}search={this.state.search} q="Science" />} /> 
    <Route path="/Technology" element={<Home  language={this.state.language}search={this.state.search} q="Technology" />} /> 
    <Route path="/Sports" element={<Home language={this.state.language} search={this.state.search} q="Sports" />} /> 
    <Route path="/Jokes" element={<Home language={this.state.language} search={this.state.search} q="Jokes" />} /> 
    <Route path="/Cricket" element={<Home language={this.state.language} search={this.state.search} q="Cricket" />} /> 
    </Routes>
    </BrowserRouter>
    </>
  )};
} 
