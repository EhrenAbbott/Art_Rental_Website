import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostLayout(){ 

    return( 
        <> 
            <header> 
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard/income">Income</Link>
                <Link to="/dashboard/reviews">Reviews</Link>
            </header>
            <Outlet />
        </>
    )
}