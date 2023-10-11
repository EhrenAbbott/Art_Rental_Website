import React from "react";
import { Link, NavLink } from 'react-router-dom';
export default function Header(){ 

    const linkStyle = { 
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "#161616",
    }

    return( 
        <div>
            <nav> 
                <Link className='site-logo' to="/">Rent the Gallery</Link>
                
                <NavLink 
                    to="dashboard" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Artist Portal
                </NavLink>

                <NavLink 
                    to="about" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    About
                </NavLink>

                <NavLink 
                    to="vans" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Artwork
                </NavLink>
                
                <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link>

            </nav> 
        </div>
    )
}