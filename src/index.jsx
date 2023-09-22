import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'

import './server'

function App(){ 

  return (
    <BrowserRouter> 
      <nav> 
        <Link to="/">VanLife</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
