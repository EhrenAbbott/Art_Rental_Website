import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Vans(){
    
    const [art, setArt] = React.useState([])
    const [page, setPage] = React.useState(1)

    function loadMore(){ 
        setPage(prevPage => prevPage + 1)
    }

    

    React.useEffect(() => { 
        fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
            .then(res => res.json())
            .then(data => setArt(data.data))
    }, [page]) 


    const mappedArt = art.map(data => data.image_id && ( 
        <div key={data.id} className='van-tile'>
            <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} /> 
            <div className='van-info'>
                <h3>{data.title}</h3> 
                { data.place_of_origin && <h5>Origin: {data.place_of_origin}</h5> }
                { data.artist_title && <p>By: {data.artist_title}</p> }
                { data.artist_title === null  && <p>Artist unknown</p> }
            </div> 
        </div>
    )) 



    return( 
        <div className='van-list-container'>  
            <div  className='van-list'>
                {mappedArt}
            </div>
            <button onClick={loadMore}>See more</button>
        </div>
    )
}

