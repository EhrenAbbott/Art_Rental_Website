import React from 'react'
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom"
import { getArtDetail } from '../../api'


export function loader({ params }) { 
    return getArtDetail(params.id)
}

export default function VanDetail() { 

 
    const location = useLocation();
    const search = location.state?.search || ""
    const art = useLoaderData()
    console.log("useLoaderData (below):")
    console.log(art)


    const backButtonText = location.state.type === "United States" ? "the United States" : location.state.type

    //TODO: fix back button in art YourArtwork detail page so that pricing and photos links 
    // return to ArtDetail page instead of Info

    return (
        <div className="van-detail-container">
                <div className="van-detail">
                    <Link
                        to={`..${search}`}
                        relative="path"
                        className="back-button art-detail-back-button"
                    >&larr;
                        <span>
                            { location.state.type === null
                                ? "Back to all art" 
                                : `Back to art from ${backButtonText}`
                                }
                        </span>
                    </Link>

                    <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} />
                    <h2>{art.title}</h2>
                    { art.place_of_origin && <h5>Origin: {art.place_of_origin}</h5> }
                    <p>{art.medium_display}</p>
                    <button className="link-button">Rent this piece of art</button>
                </div>
        </div>
    )
}

