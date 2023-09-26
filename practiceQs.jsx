//##########################################################################

import { BrowserRouter, Routes } from "react-router-dom";

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

// 9.

//##########################################################################

// 10.

//##########################################################################