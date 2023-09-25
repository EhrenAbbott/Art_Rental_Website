import React from 'react'
import { useParams } from "react-router-dom"

export default function VanDetail() { 

    const params = useParams()
    const [art, setArt] = React.useState(null)

    React.useEffect(() => { 
        fetch(`https://api.artic.edu/api/v1/artworks/${params.id}`)
            .then(res => res.json())
            .then(data => setArt(data.data))
    }, [params.id])

    return (
        <div className="van-detail-container">
            {art ? (
                <div className="van-detail">
                    <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} />
                    <h2>{art.title}</h2>
                    { art.place_of_origin && <h5>Origin: {art.place_of_origin}</h5> }
                    {/* <p className="van-price"><span>${van.price}</span>/day</p> */}
                    <p>{art.medium_display}</p>
                    <button className="link-button">Rent this piece of art</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}