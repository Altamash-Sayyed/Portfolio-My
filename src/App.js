 import './App.css';
 import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
 
 
function App() { 
     
  return (
    <div  >  
      <div className='bg-black'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar /> }/>
       {/* <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/skill" element={<Skill />} />*/}
       <Route path="/contact" element={<Contact />} /> 
        </Routes>
        </BrowserRouter>
       </div>


    </div>
  );
}

export default App;
