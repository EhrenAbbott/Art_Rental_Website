import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans from './Vans.jsx'

function App(){ 

  return (
    <BrowserRouter> 
      <nav> 
        <Link to="/">VanLife</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
