import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function YourArtPricing(){ 

    const { artDetail } = useOutletContext();

    return( 
        <h1>Your art Pricing</h1>
    )
}