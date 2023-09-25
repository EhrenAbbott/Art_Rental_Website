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

//##########################################################################

// 3. 
// import React from "react"
// import { useParams } from "react-router-dom"

// export default function VanDetail() {
//     const params = useParams()
//     console.log(params)
   
//     return <h1>text</h1>
// }

//##########################################################################

// 4. 

// import React from 'react'
// import { useParams } from "react-router-dom"

// export default function VanDetail() { 

//     const params = useParams()

//     React.useEffect(() => { 
//         fetch(`https://api.artic.edu/api/v1/artworks/${params.id}`)
//             .then(res => res.json())
//             .then(data => console.log(data.data))
//     }, [params.id])

//     return( 
//         <h1>text</h1>
//     )
// }

//NOTE: remember that how you use the API url will vary from api to api; in this case
//    the params vairable represents the ID for a specific piece of art, so that gets 
//    plugged into the url at a spot determined by the api to retrieve all of the data for 
//    ONLY that particular piece of art. Also remember that hoe you navigate throguht that json object
//    to get the right value will depend on how that api organizes/nests its info. 
//##########################################################################

// 5.
// import React from "react"

// export default function VanDetail() {
    
//     const [van, setVan] = React.useState(null)

//     return (
//         <div>
//             {van ? (
//                 <div>
//                     <h2>{van.name}</h2>
//                 </div>
//             ) : <h2>Loading...</h2>}
//         </div>
//     )
// }

//##########################################################################

// 6. 
//--------------------Header.jsx------------------------------------

// import React from "react";
// import { Outlet } from "react-router-dom";

// export default function Header(){ 

//     return( 
//         <div>
//             <nav> 
//                 <h1>text</h1>
//             </nav> 
//             <Outlet />
//         </div>
//     )

//--------------------index.jsx------------------------------------

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './Home.jsx'
// import About from './About.jsx'
// import Header from './Header'

// function App(){ 

//   return (
//     <BrowserRouter> 
//       <Routes>
//         <Route element={<Header />}> 
//           <Route path="/" element={<Home />}/>
//           <Route path="/about" element={<About />}/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//NOTE: notice that Outlet has to be used as a sort of placeholder for the
// other components that Header will get wrapped around. 
// And in App an additonal Route element is wrapped around the other routes, except 
// this one is NOT self-closing

//##########################################################################

// 7. 

//--------------------index.jsx------------------------------------

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import Host from './Host.jsx'
// import Income from './Income.jsx'
// import Reviews from './Reviews.jsx'

// function App(){ 
//     <BrowserRouter> 
//         <Routes> 
//             <Route path="/host" element={<Host />}> 
//                 <Route path="/host/income" element={<Income />} />
//                 <Route path="/host/reviews" element={<Reviews />} />
//             </Route>
//         </Routes>
//     </BrowserRouter>
// }

//--------------------Host.jsx------------------------------------

// import React from "react"
// import {Outlet} from "react-router-dom"

// export default function Dashboard() {
//     return (
//         <>
//             <h1>Dashboard goes here</h1>
//             <Outlet />
//         </>
//     )
// }

// NOTE: notice that the big difference between #6 and this problem is that there is 
//  NO path prop for the previous quesition; this means that component gets wrapped around 
// the encomposed pages visaully, BUT it does not actually create a navigable route that can be
// entered as a URL. However, bc in this problem the wrapped Route has an element and a path,
// it both creates a URL path that can be used AND it makes the component appear as visual elements 
// of its child component
// ALSO: notice that regardless of if path and element are both being passed in as props, 
// you still need to use <Outlet /> in the parent component/route.



//##########################################################################

// 8.

//##########################################################################

// 9.

//##########################################################################

// 10.

//##########################################################################