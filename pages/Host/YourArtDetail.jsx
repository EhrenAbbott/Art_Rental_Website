import React from "react";
import { useParams } from "react-router-dom";

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
        <div>
            <img width={150} src={`https://www.artic.edu/iiif/2/${artDetail.image_id}/full/843,/0/default.jpg`} /> 
            <h2>{artDetail.title}</h2>
            <p>{artDetail.artist_title}</p>
            <p>{artDetail.place_of_origin}</p>
        </div>
    )
}