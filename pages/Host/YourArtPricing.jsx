import React from 'react'
import { useOutletContext } from 'react-router-dom'


export default function YourArtPricing(){ 

    const { artDetail } = useOutletContext();

    return( 
        <> 
            <h3 className="host-van-price">$100<span>/day</span></h3>
        </>
    )
}