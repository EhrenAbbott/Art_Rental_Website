import React from "react";
import { useParams, NavLink, Link, Outlet, useOutletContext, useLoaderData } from "react-router-dom";
import { getArtDetail } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) { 
    await requireAuth()
    return getArtDetail(params.id)
}

export default function YourArtDetail(){ 

    const { id } = useParams()
    const artDetail = useLoaderData()

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    console.log(artDetail)

    
    return ( 
        <section> 
            <NavLink
                to=".."
                relative="path"
                className="back-button"
            >&larr; 
               <span>Back to all art</span>
            </NavLink>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img width={150} src={`https://www.artic.edu/iiif/2/${artDetail.image_id}/full/843,/0/default.jpg`} /> 
                    <div className="host-van-detail-info-text">
                        <h2>{artDetail.title}</h2>
                        <p>{artDetail.artist_title}</p>
                        <p>{artDetail.place_of_origin}</p>
                    </div>
                </div>
                <nav className="host-van-detail-nav"> 

                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>

                </nav>
                <Outlet context={{ artDetail }}/>
            </div>
        </section>
    )
}