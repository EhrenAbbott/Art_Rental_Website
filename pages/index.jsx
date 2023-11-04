import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'
import '/index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Vans, { loader as vansLoader } from './Vans/Vans.jsx'
import VanDetail, {loader as vanDetailLoader} from './Vans/VanDetail.jsx'
import Layout from '../components/Layout'
import Income from "/pages/Host/Income.jsx"
import Reviews from "/pages/Host/Reviews.jsx"
import Dashboard from "/pages/Host/Dashboard.jsx"
import HostLayout from '../components/HostLayout.jsx'
import YourArtwork from './Host/YourArtwork.jsx'
import YourArtDetail, { loader as yourArtDetailLoader } from './Host/YourArtDetail.jsx'
import YourArtInfo from './Host/YourArtInfo.jsx'
import YourArtPhotos from './Host/YourArtPhotos.jsx'
import YourArtPricing from './Host/YourArtPricing.jsx'
import NotFound from './NotFound.jsx'
import Error from '../components/Error.jsx'
import Login from './Login.jsx'
import { requireAuth } from '../utils.js'

const router = createBrowserRouter(createRoutesFromElements( 
  <Route element={<Layout />}> 
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route 
      path="login" 
      element={<Login/>}
    />
    <Route 
      path='vans' 
      element={<Vans />} 
      loader={vansLoader} 
      errorElement={<Error/>}
    />
    <Route 
      path='vans/:id' 
      element={<VanDetail/>} 
      loader={vanDetailLoader}
    />
    <Route path='dashboard' element={<HostLayout />}>

      <Route 
        index 
        element={<Dashboard />}
        loader={async () =>  await requireAuth()}  
      />
      <Route 
        path='income' 
        element={<Income />}
        loader={async () =>  await requireAuth()}  

      />
      <Route 
        path='reviews' 
        element={<Reviews />}
        loader={async () =>  await requireAuth()}  

      />
      <Route 
        path="yourartwork" 
        element={<YourArtwork />}
        loader={async () =>  await requireAuth()}  
      />
      <Route 
        path="yourartwork/:id" 
        element={<YourArtDetail />}
        loader={yourArtDetailLoader}
      >
        <Route 
          index 
          element={<YourArtInfo />}
          loader={async () =>  await requireAuth()}  

        />
        <Route 
          path="photos" 
          element={<YourArtPhotos />}
          loader={async () =>  await requireAuth()}  

        />
        <Route 
          path="pricing" 
          index 
          element={<YourArtPricing />}
          loader={async () =>  await requireAuth()}  

        />

      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App(){ 

  return (
    <RouterProvider router={router}/>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App />);
