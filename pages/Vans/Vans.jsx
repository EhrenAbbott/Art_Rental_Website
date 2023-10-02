import React from 'react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


export default function Vans(){
    
    const [art, setArt] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("place_of_origin")
    // console.log(typeFilter)

    function loadMore(){ 
        setPage(prevPage => prevPage + 1)
    }

    function loadFewer(){ 
        setPage(prevPage => prevPage - 1)
    }

    

    React.useEffect(() => { 
        fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
            .then(res => res.json())
            .then(data => setArt(data.data))
    }, [page]) 

    // console.log(art)

    const filteredArt = typeFilter 
        ? art.filter(item => item.place_of_origin.toLowerCase() === typeFilter)
        : art 
    
    console.log(filteredArt)

    const mappedArt = filteredArt.map(data => data.image_id && ( 
        <Link 
            to={`${data.id}`}
            state={{ search: `?${searchParams.toString()}`}}
        >
            <div className='van-tile'>
                    <img src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`} /> 
                    <div className='van-info'>
                        <h3>{data.title}</h3> 
                        { data.place_of_origin && <h5>Origin: {data.place_of_origin}</h5> }
                        { data.artist_title && <p>By: {data.artist_title}</p> }
                        { data.artist_title === null  && <p>Artist unknown</p> }
                    </div> 
            </div>
        </Link>
    )) 



    return( 
        <div className='van-list-container'>
            <div className='van-list-filter-buttons'>
                <button 
                    onClick={() => setSearchParams({place_of_origin: "spain"})}
                    className={`van-type spain ${typeFilter === "spain" ? "selected" : ""}`}
                >
                    Spain
                </button> 

                <button
                    onClick={() => setSearchParams({place_of_origin: "korea"})}
                    className={`van-type korea ${typeFilter === "korea" ? "selected" : ""}`}
                >
                    Korea
                </button>

                <button 
                    onClick={() => setSearchParams({place_of_origin: "germany"})} 
                    className={`van-type germany ${typeFilter === "germany" ? "selected" : ""}`}
                >
                    Germany
                </button>

                { typeFilter && <button 
                    onClick={() => setSearchParams({})}
                >
                    Clear
                </button>}

            </div>
            <div className='van-list'>
                {mappedArt}
            </div> 
            <div className='page-btn-div'>
                { page > 1 && <button className='page-btn' onClick={loadFewer}>Prev page</button>}
                <button className='page-btn' onClick={loadMore}>Next page</button>
            </div>
        </div>
    )
}

