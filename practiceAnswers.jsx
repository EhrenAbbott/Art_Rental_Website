//##########################################################################

import { NavLink, useParams } from "react-router-dom";

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

// 7.  !!!Not best practice!!! 
//  ^In reality, if you just use path='income', React will know to inherit the 
// path from its parent, so in /host/income, the /host/ part is implied/assumed if 
// you don't explicity state it that way. This way of doing it can/is done for most routes. 

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
// !!!: the below takes place within the App function on the index.jsx file as it does above, 
// this is just a consolidated depication to avoid repitition. 

    // <Route path="dashbaord" element={<HostLayout />}>
    //     <Route index element={<Dashboard />} />
    //     <Route path="income" element={<Income />} />
    // </Route>

// NOTE: Remember that in the HostLayout component there has to the <Outlet /> tag. 
// ALSO: as it is above, /dasboard would lead to the Dashboard component; so the index keyword 
// essentially makes it so that that child gets the path from the parent component AND the parent
// component still displays it contents with each child.
// NOTICE: /dashboard/income would lead to the Income component (w/ the parent still 
// being displayed). As it is above, there is NO URl endpoint that woudl lead to JUST the HostLayout
// by itself with nothing else; this is intentional, bc we woudl not want its secondary navbar 
// to get displayed with no other content. 

//##########################################################################

// 9.  
{/* <NavLink 
    to="/about"
    className={({isActive}) => isActive ? "link-class" : null }
> 
    About
</NavLink> */}

//EXPLANATION: NavLink allows us to pass a function. Whatever that function returns 
// will become its class.
// React Router will automtically pass this function an object that has a property called
// "isActive". That happens behind the scenes without explicity doing anything. 
// In the function we are destructuring the isActive Boolean property, which is possible bc
// it is part of an object. 
// The brackets are the syntax that allow su to destructure. (Otherwise we would have 
// to do somehting like OBJ.isActive).
//. So, we are saying if the isActive property is true, then the class will become "link-class"; 
// otherwise don't do anything to the class. 


//##########################################################################

// 10. 

// const linkClass = { 
//     fontWeight: "bold"
// }

// return (
//     <NavLink 
//         to="/about"
//         style={({isActive}) => isActive ? linkClass : null }
//     > 
//         About
//     </NavLink>
// )

//##########################################################################

// 11. 
{/* <>
    <NavLink to="/host" end style={({ isActive }) => isActive ? activeStyles : null}>
        Dashboard
    </NavLink>

    <NavLink to="/host/income" style={({ isActive }) => isActive ? activeStyles : null}>
        Income
    </NavLink>
</> */}

//NOTE: here it is the 'end' keyword that tells React Router to end there; so if a more
// nested route matches, it won't also math the link in the parent route. 
// ALSO: when you just set a prop name without a value, as is the case with 'end',
// React automatically interprets that as a Boolean, so 'end' would be functionally the same as end={end}

//##########################################################################

// 12.  

    // const { id } = useParams()

//NOTE: Assuming we were on a page whose route was something like /host/:id 
// (the import part being the :id), the above const id would return the value of
// that :id; so if we are at /host/34542, id would equal 34542. Because this is 
// a dynamic value, it would change depending on that that value currently is. 

//##########################################################################

// 13.  
    // <NavLink to=".">Link text</NavLink>

//##########################################################################

// 14.  
    // <Navlink to=".." relative="path">Back</Navlink>

//NOTE: the '..' tells it to go to the previous level, however as it it will infer 
// the parent ROUTE; as the route are established in this app, that would take it back to 
// the Dashboard page, as that acquires the parent route path. However we want to
// go from YouArtworkDetail to YourArtwork, which are actually siblings even thoguh one
// path is an extension of the other due to how we set up the routes. So to get it to navigate 
// back to the PATH parent and not the route parent, we would tell it this by using relative="path"
// 
//##########################################################################

// 15. A parent route is displaying its contents in a child route; 
//     Pass the state information to the child route so, on the child page/component, 
//     it can use and displayed info from the parent state. 

//--------------------Parent.jsx------------------------------------

// import React from "react"
// import { Outlet, useOutletContext } from "react-router-dom"

// export default function Parent(){ 

//     const [currentVan, setCurrentVan] = React.useState(null)

//     return( 
//         <> 
//             <h1>text text text</h1>
//             <Outlet context={{ currentVan }} />
//         </>
//     )
// }
//NOTE:  Here the context prop has two sets of curly brackets; the first 
// is to allow the transition into JS, the second is to destructure to currentVan 
// state object

//--------------------Child.jsx------------------------------------

// import React from "react"
// import { useOutletContext } from 'react-router-dom'

// export default function Child() {
    
//     const { currentVan } =  useOutletContext();
    
//     return (
//         <>
//             <h1>{currentVan.name}</h1>
//         </>
//     )
// }

//NOTE: Since currentVan is an objecct, you can access its properties w/ 
// dot notation. 

//##########################################################################

// 16.  

// import { useSearchParams } from "react-router-dom";

// export default function App(){ 

//     const [searchParams, setSearchParams] = useSearchParams()
//     console.log(searchParams.get("type"))
//     console.log(searchParams.toString())

//     return( 
//         <></>
//     )
// }

//NOTE: searchParams is an instance of an object, so it has a whole set 
// of methods that can be used.
//ALSO: note that state lives inside of its component, but the searchparams live
// up in the URL.

//##########################################################################

// 17.  

        // Given an array and a URL with a query: 

        // /characters?type=sith

        // const swCharacters = [
        //     { name: "Luke Skywalker", type: "Jedi" },
        //     { name: "Darth Vader", type: "Sith" },
        //     { name: "Emperor Palpatine", type: "Sith" },
        //     { name: "Yoda", type: "Jedi" }
        // ] 

        // Create a variable equal to the value of the search query
       
        // Filter the contents of swCharacters to yield all objects 
        // that have a type that is the same as the search query value. 
            // So, if the URl has 'sith' as the type, make the filter produce, 
            // all of the swCharacter objects that also have a type of "sith"
        
        // Create a new variable and have its value be the results of the filter, 
        // IF the search query did actually have a value. 
        // Otherwise have the new variable be equivalent to the entire swCharacters Array
    
//--------------------HomePage.jsx------------------------------------


// import { useSearchParams } from 'react-router-dom';

// function HomePage() {

//     const [searchParams, setSearchParams] = useSearchParams();
//     const objType = searchParams.get("type")
//     console.log(objType)
    
//     const displayedChars = objType
//       ? swCharacters.filter(name =>  name.type.toLowerCase() === "sith" )
//       : swCharacters 
    
//       return( 
//         <></>
//       )
//     }

//##########################################################################

// 18.  Create a button that adds a query to the URL

    // <Link to="?type=jedi">text</Link>

//##########################################################################

// 19. Instead of using Link with the "to" prop, use a button to change 
//     the query parameters

    // <button onClick={() => setSearchParams({place_of_origin: "spain"})}>Spain</button>


//##########################################################################

// 20. Say you apply a filter in the Vans page and then click on a specific van to 
// view that van' detail page. Normall, if you went to the van detail page and then 
// clciked the back button to go back to the Vans page, your query params in the URL would 
// not be preserved and would not longer be there. 
// How would you make it so that the query params get preserved when going back to
// vans page?
// HINT: -->                                                                                                                It involves state

//--------------------Vans.jsx------------------------------------

    // <Link to={van.id} state={{ search: `?${useSearchParams.toString()}` }}></Link>


// NOTE: Here we are choosing to pass in an object with a key that we are choosing to call 'search'
// whose value will be the entire query string of our searchParams. Remember that 
// .toString() yields the entire query string EXCEPT the '?', so if you need the question 
// mark you would have to add it with string interpolation. 

// ALSO: here, state is actually refererring to "history state" and not React state; 
// the browser has the ability oto save some sort of state between one URl and the next; 
// React touter makes it easy to add things to that link state.

//--------------------VanDetail.jsx------------------------------------

// import { useLocation } from 'react-router-dom';

// export default function VanDetail(){ 
//     const location = useLocation()

//     const search = location.state?.search || ""

//     return( 
//         <Link to={`..${search}`}></Link>
//     )

// }

//NOTE:  useLocation() gives us an object with severa different properties, 
// such as pathname, search (any query string we have), hash and state.

// ALSO: the '?' in location.state?.search is a very new JS feature called "objecti chaining"; 
// It is saying: if location.search exists, check for a property called search, 
// but if that doesn't exist, it will be an empty string. 

//##########################################################################

// 21. Add a route that handles navigation to a page that is not found/doesn't exist.

    // <Route path="*" element={<h1>Page not found!</h1>} />

//##########################################################################

// 22. Refactor fetch request to exist in its own api.js file as an async function. 
// Refactor useEffect in Vans.jsx to use new async function.
// Create state to handling loading times and errors. 

//--------------------api.js------------------------------------

// export async function getArt(page){ 
//     const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
//     if (!res.ok) { 
//         throw { 
//             message: "Failed to fetch art", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data 
// }

//--------------------Vans.jsx------------------------------------

// import { getArt } from '../../api'

// export default function Vans() { 
//     const [loading, setLoading] = React. useState(false)
//     const [error, setError] = React.useState(null)
    
//     React.useEffect(() => { 
//         async function loadArt() { 
//             setLoading(true)
//             try { 
//                 const data = await getArt(page)
//                 setArt(data.data)
//             } catch(err) { 
//                 console.log(err)
//                 setError(err)
//             } finally { 
//                 setLoading(false)
//             }
//         }

//         loadArt()
//     }, [page])

//     if (loading) { 
//         return <h1>Loading...</h1>
//     }

//     if (error) { 
//         return <h1>There was an error: {error.message}</h1>
//     }

//     return( 
//         <></>
//     )
// }

//NOTE: .ok is built into fetch. 
// ALSO: 'try' is used inside an async function bc you don't know for sure if 
// it is going to work correctly, so the 'try' block tells it what to do if 
// everything works-- the happy path. 
// The 'catch' block determines what to do in the event of an error-- the sad path. 
// We create some error state and set it to true in the catch block. 
// The 'finally' block will run regardless of if the 'try' or the 'catch' 
// blocks ran, and this just sets the loading state back to false. 
// NOICE: that we also have an early return int he event of a fecth error. 

//##########################################################################

// 23. Import the three things you need to change routes to support the newer one 
// that supports API layers and laoders. 
// Refactor routes to use these new imports.

// import {
//     Route,
//     createBrowserRouter, 
//     createRoutesFromElements, 
//     RouterProvider
//   } from 'react-router-dom'

// const router = createBrowserRouter(createRoutesFromElements( 
// <Route element={<Layout />}> 
//     <Route path="/" element={<Home />}/>
// </Route>
// ))

// function App(){ 

// return (
//     <RouterProvider router={router}/>
// )
// }

//NOTE: This doesn't change anything in the UI, it is just another 
// way of making routes that has more funcitonality and will allow API layers 
// to be used

//##########################################################################

// 24.

//##########################################################################

// 25.

//##########################################################################

// 26.

//##########################################################################

// 27.

//##########################################################################

// 28.

//##########################################################################

// 29.

//##########################################################################

// 30.

//##########################################################################