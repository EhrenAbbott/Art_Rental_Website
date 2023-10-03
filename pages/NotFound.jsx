import React from 'react'; 
import { Link } from 'react-router-dom'

export default function NotFound(){ 

    return ( 
        <div className='not-found-container'>
            <h1>Page not found</h1>
            <Link className='not-found' to="..">Return to home</Link>
        </div>
    )
}