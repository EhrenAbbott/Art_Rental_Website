import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, 
  RouterProvider,
  createBrowserRouter, 
  createRoutesFromElements,
  Routes, 
  Route 
} from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans from './Vans.jsx'
import VanDetail from './VanDetail.jsx'
import Header from '../components/Header'
import Layout from '../components/Layout'

const router = createBrowserRouter(createRoutesFromElements( 

))


function App(){ 

  return (
    <BrowserRouter> 
      <Routes>
        <Route element={<Header />}> 
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<VanDetail/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
