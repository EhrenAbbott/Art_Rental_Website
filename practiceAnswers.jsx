//##########################################################################

// 1.  ***NOT BEST PRACTICE!***
//--------------------index.jsx------------------------------------

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// function App(){ 
//     return( 
//         <BrowserRouter> 
//             <Link to="/home">Home</Link>
//             <Routes>
//                 <Route path="/home" element={<Home />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }  

// function Home(){ 
//     <h1>home</h1>
// }


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//NOTE: Vite had <React.StrictMode></React.StrictMode> wrapping around <App />; I tried 
// deleting this and wrapping <App /> with <BrowserRouter instead and that work; leaving the StrictMode 
// tags and wrapping that with BrowserRouter also worked, so, I'm not sure what the function of the 
// StrictMode tags is here. 
//IMPORTANT: using the link and routing as it is here, there will not be a page refresh; 
// this is good because this means than state will maintain their valuea and won't be reset.

//--------------------TERMINAL------------------------------------

// yarn add react-router-dom

//##########################################################################

// 2.  
//--------------------Vans.jsx------------------------------------

// import React from "react"
// import { Link } from "react-router-dom"

// export default function Vans() {
//     const [vans, setVans] = React.useState([])

//     const vanElements = vans.map(van => (
//         <div>
//             <Link to={`/vans/${van.id}`}>
//                 <div className="van-info">
//                     <h3>text</h3>
//                 </div>
//             </Link>
//         </div>
//     ))

//     return (
//         <div>
//             {vanElements}
//         </div>
//     )
// }

//--------------------Index.jsx------------------------------------

// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Vans from "./pages/Vans"
// import VanDetail from "./pages/VanDetail"

// function App() {
//   return (
//     <BrowserRouter>
//         <Link to="/vans">Vans</Link>
//       <Routes>
//         <Route path="/vans" element={<Vans />} />
//         <Route path="/vans/:id" element={<VanDetail />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(<App />);