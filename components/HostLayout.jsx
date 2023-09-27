import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout(){ 

    const linkStyle = { 
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "#161616",
    }

    return( 
        <> 
            <header> 

                <NavLink 
                    to="." 
                    end
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="yourartwork" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Your Artwork
                </NavLink>

                <NavLink 
                    to="reviews" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Reviews
                </NavLink>

            </header>
            <Outlet />
        </>
    )
}