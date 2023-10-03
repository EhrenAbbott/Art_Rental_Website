import React from 'react'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


export default function Vans(){
    
    const [art, setArt] = React.useState([])
    const [page, setPage] = React.useState(1)
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("place_of_origin")
    // console.log(`typeFilter: ${typeFilter}`)


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
        ? art.filter(item => item.place_of_origin === typeFilter)
        : art 
    

    const mappedArt = filteredArt.map(data => data.image_id && ( 
        <Link 
            to={`${data.id}`}
            state={{ 
                search: `?${searchParams.toString()}`,
                type: typeFilter
            }}
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

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }



    return( 
        <div className='van-list-container'>
            <div className='van-list-filter-buttons'>
                <button 
                    onClick={() => handleFilterChange("place_of_origin", "Spain")}
                    className={`van-type spain ${typeFilter === "Spain" ? "selected" : ""}`}
                >
                    Spain
                </button> 

                <button 
                    onClick={() => handleFilterChange("place_of_origin", "France")}
                    className={`van-type france ${typeFilter === "France" ? "selected" : ""}`}
                >
                    France
                </button> 

                <button 
                    onClick={() => handleFilterChange("place_of_origin", "England")}
                    className={`van-type england ${typeFilter === "England" ? "selected" : ""}`}
                >
                    England
                </button>

                <button
                    onClick={() => handleFilterChange("place_of_origin", "Korea")}
                    className={`van-type korea ${typeFilter === "Korea" ? "selected" : ""}`}
                >
                    Korea
                </button>

                <button 
                    onClick={() => handleFilterChange("place_of_origin", "Germany")}
                    className={`van-type germany ${typeFilter === "Germany" ? "selected" : ""}`}
                >
                    Germany
                </button>

                <button 
                    onClick={() => handleFilterChange("place_of_origin", "United States")}
                    className={`van-type united_states ${typeFilter === "United States" ? "selected" : ""}`}
                >
                    United States
                </button>

                { typeFilter && <button 
                    onClick={() => setSearchParams({})}
                >
                    Clear Filter
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

