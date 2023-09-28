import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function YourArtInfo(){ 

    const { artDetail } = useOutletContext();

    return( 
        <h1>{artDetail.id}</h1>
    )
}