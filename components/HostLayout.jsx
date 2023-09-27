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
                    to="/dashboard" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="/dashboard/income" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="/dashboard/reviews" 
                    style={({isActive}) => isActive ? linkStyle : null}
                >
                    Reviews
                </NavLink>

            </header>
            <Outlet />
        </>
    )
}