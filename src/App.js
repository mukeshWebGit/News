import './App.css';   
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
 

function App() {
  return (
    <> 
  <BrowserRouter> 
  <Routes>
    <Route path="/" element={<Home q="All" />} /> 
    <Route path="/Politics" element={<Home q="Politics" />} /> 
    <Route path="/Science" element={<Home q="Science" />} /> 
    <Route path="/Techonolgy" element={<Home q="Techonolgy" />} /> 
    <Route path="/Sports" element={<Home q="Sports" />} /> 
    <Route path="/Jokes" element={<Home q="Jokes" />} /> 
    <Route path="/Cricket" element={<Home q="Cricket" />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
