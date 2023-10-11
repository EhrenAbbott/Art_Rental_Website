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

// 22. Refactor fetch request to exist in its own api.js file as an async function. 
// Refactor useEffect in Vans.jsx to use new async function.
// Create state to handling loading times and errors. 

//--------------------api.js------------------------------------


//--------------------Vans.jsx------------------------------------


//##########################################################################

// 23. Import the three things you need to change routes to support the newer one 
// that supports API layers and laoders. 
// Refactor routes to use these new imports.

//##########################################################################

// 24. Create a loader function in HomePage.jsx
//     Implement the loader in index.jsx.
//      Import useLoaderData in the correct file and imlement it correctly. 
//      With this new setup, eliminatr use of Vans state without getting rid of 
//      any functionality.

//--------------------HomePage.jsx------------------------------------

import React from 'react'
import { useLoaderData } from 'react-router-dom'

export function loader() { 

}

export default function HomePage() { 
    const vans = useLoaderData()

    return ( 
        <></>
    )
} 


//NOTE: the name of the function doesn't matter in React (but it does in
// other libraries like Remix).
// The job of the loader is simply to get the data we want. It doesn't have to 
// be a fetch request, but it usually always is. 
//ALSO: whatever we are returning in our loader is what will come back when we call 
// useLoaderData. 
// AND: This set up is different than useEffect becuase we are not fetching the data 
// inside the code of our component, React can delay the rendering of our component until 
// the loader has finished its task.  
//--------------------index.jsx------------------------------------

//*IMPORTS GO HERE*

import HomePage, { loader as HomePageLoader } from "./Home"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomePage />} loader={HomePageLoader} />
  ))

  function App() {
    return (
      <RouterProvider router={router} />
    )
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />)

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