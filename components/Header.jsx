import React from "react";
import { Link } from 'react-router-dom';
export default function Header(){ 

    return( 
        <div>
            <nav> 
                <Link className='site-logo' to="/">Rent the Gallery</Link>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Artwork</Link>
            </nav> 
        </div>
    )
}