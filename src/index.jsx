import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans from './Vans.jsx'
import VanDetail from './VanDetail.jsx'




function App(){ 

  return (
    <BrowserRouter> 
      <nav> 
        <Link className='site-logo' to="/">Rent the Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Artwork</Link>
      </nav>
      <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:id' element={<VanDetail/> }/>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
