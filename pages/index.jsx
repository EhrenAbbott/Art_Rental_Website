import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import '/index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans from './Vans/Vans.jsx'
import VanDetail from './Vans/VanDetail.jsx'
import Layout from '../components/Layout'
import Income from "/pages/Host/Income.jsx"
import Reviews from "/pages/Host/Reviews.jsx"
import Dashboard from "/pages/Host/Dashboard.jsx"
import HostLayout from '../components/HostLayout.jsx'




function App(){ 

  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail/> }/>
          <Route path='dashboard' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />}/>
            <Route path='reviews' element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
