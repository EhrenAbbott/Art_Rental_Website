import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function YourArtPhotos(){ 

    const { artDetail } = useOutletContext();

    return( 
        <h1>Your art Photos</h1>
    )
}