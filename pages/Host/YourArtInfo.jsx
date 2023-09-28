import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function YourArtInfo(){ 

    const { artDetail } = useOutletContext();

    return( 
        <section className="host-van-detail-info">
            <h4>Name: <span>{artDetail.title}</span></h4>
            { artDetail.place_of_origin && <h4>Origin: <span>{artDetail.place_of_origin}</span></h4>}
            { artDetail.artist_title && <h4>Artist: <span>{artDetail.artist_title}</span></h4>}
            { artDetail.medium_display && <h4>Media/materials: <span>{artDetail.medium_display}</span></h4>}
            { artDetail.date_end && <h4>Year created: <span>{artDetail.date_end}</span></h4>}
            { artDetail.description && <h4>Description: <span>{artDetail.description}</span></h4>}
            { artDetail.inscriptions && <h4>Inscription: <span>{artDetail.inscriptions}</span></h4>}
        </section>
    )
}