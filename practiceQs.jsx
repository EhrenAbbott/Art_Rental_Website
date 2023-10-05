//##########################################################################

import { BrowserRouter, Routes, useSearchParams } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";

// 1. Import/set up Browser Router, Routes, and Route. 
//    Have .createRoot render  a component called App. 
//    In the App component, use the imports from above to 
//    create a route to another component called Home  an set its path.
//    Create a clickable link that goes to the Home component.
//    ***NOT BEST PRACTICE!*** -- proper way will be demo'd later.

//##########################################################################

// 2. Create a route parametr so that the path of /vans can take /{id} after it. 
//    When clicking on a mapped div created from an obj, have it send the user to 
//    a page called whose url is /vans/{unique-id-of-van} 
//    This page will display a component from VanDetail.jsx

//##########################################################################

// 3. Print the params of a route to the console

//##########################################################################

// 4. Building off of  #3, have this component fetch data from an api that is 
//    specific to the useParams() value being used.

//##########################################################################

// 5. Conditionally render a div depending on if there is anything saved as the state object; 
//    If so, dynamically render parts of that object; if not, display "loading"

//##########################################################################

// 6. Create a navbar component  called Header in its own file. 
//    Created a nested route in App() so that the navbar component wraps around
//    all other components of the page. 

//##########################################################################

// 7. Create a nested route so that the URLs /host/income and /host/reviews
//    work when typed into the nav bar. 

//##########################################################################

// 8. Wrap a a layout component as a route around two other routes. Set its path. 
//    Have the first nested route receive the path from the parent component. 
//    Have the second route (sibling to the first) get a route that gets added on to
//    the first as a rested route. 



//##########################################################################

// 9. Make a link whose styling gets changed when the page that it navigates to is open. 
//    So, for example,  clicking the "About" link would bring you to that page, and only while you 
//    are on that page, the link would appear in bold. 

//##########################################################################

// 10. Do #9 except use the style prop instead of the className prop.

//##########################################################################

// 11. Create two links. One of them has a route nested within the other. 
//     Make it so that the styling of the link changes when the user is one that page, 
//     BUT prevent the styling of the parent route from also changing. 

//##########################################################################

// 12. Destructure a route parameter to use its variable endpoint (is that waht it's called?)
//     as a JS variable 

//##########################################################################

// 13. If a route is acquired/inherited from a parent route using "index", 
// what would be the relative (as opposed to absolute) way to link to this route
// from another page? NB: the absolute would be <NavLink to="/host"></NavLink>

//##########################################################################

// 14. Create a link that goes back to the previous page instead of  the parent route.

//##########################################################################

// 15. A parent route is displaying its contents in a child route; 
//     Pass the state information to the child route so, on the child page/component, 
//     it can use and displayed info from the parent state. 

//##########################################################################

// 16.  Destructure an array of search parameters. 
// Assumging URL '/characters?type=sith', use the correct method
// to retrieve the type used in the search query. 
// Do the same but retrieve the entire search query. 

//##########################################################################

// 17. Given an array and a URL with a query: 

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



//##########################################################################

// 18.  Create a button that adds a query to the URL

//##########################################################################

// 19. Instead of using Link with the "to" prop, use a button to change 
//     the query parameters

//##########################################################################

// 20. Say you apply a filter in the Vans page and then click on a specific van to 
// view that van' detail page. Normall, if you went to the van detail page and then 
// clciked the back button to go back to the Vans page, your query params in the URL would 
// not be preserved and would not longer be there. 
// How would you make it so that the query params get preserved when going back to
// vans page?
// HINT: -->                                                                                                                It involves state

//##########################################################################

// 21. Add a route that handles navigation to a page that is not found/doesn't exist.

//##########################################################################

// 22. Write an async fucntion in api.jsc that gets data from an api.
//      Update useEffect in Vans.jsx to use this api function. 

//--------------------api.jsx------------------------------------


//--------------------Vans.jsx------------------------------------


//##########################################################################

// 23. Do #22 except take into account a delay with loading the data. 
// Assume an api function called getVans() that has been imported from another file. 

//##########################################################################

// 24. Building off of #22, and #23, code for the sad path, accounting for an error 
// that could occur in the fetch request. 

//--------------------Vans.jsx------------------------------------

// export async function getVans() {

//     const [error, setError] = React.useState(null)

//     React.useEffect(() => {
//         async function loadVans() {
//             setLoading(true)
//             try {
//                 const data = await getVans()
//                 setVans(data)
//             } catch (err) {
//                 setError(err)
//             } finally {
//                 setLoading(false)
//             }
//         }

//         loadVans()
//     }, [])

//     if (error) {
//         return <h1>There was an error: {error.message}</h1>
//     }

//     return ( 
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

//--------------------api.jsx------------------------------------

// const res = await fetch("/api/vans")
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans

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