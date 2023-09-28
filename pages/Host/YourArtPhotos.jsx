import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function YourArtPhotos(){ 

    const { artDetail } = useOutletContext();

    return( 
        <img src={`https://www.artic.edu/iiif/2/${artDetail.image_id}/full/843,/0/default.jpg`} className="host-van-detail-image" />

    )
}