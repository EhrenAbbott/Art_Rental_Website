import React from "react";
import { useParams, NavLink, Link } from "react-router-dom";

export default function YourArtDetail(){ 

    const [artDetail, setArtDetail] = React.useState([])

    const { id } = useParams()

    React.useEffect(() => { 
        fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
            .then(res => res.json())
            .then(data => setArtDetail(data.data))
    }, [])

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
            </div>
        </section>
    )
}