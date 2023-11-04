import React from 'react'
import { useState } from 'react'
import { Link, useSearchParams, useLoaderData, useRevalidator } from 'react-router-dom'
import { getArt } from '../../api'


export function loader(){
    return getArt()
}



export default function Vans(){
    
    // const [art, setArt] = React.useState([])
    // const [page, setPage] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams()
    // const [loading, setLoading] = React. useState(false)
    const [error, setError] = React.useState(null)
    
    const art = useLoaderData()
    console.log("useLoaderData (below):")
    console.log(art)


    const typeFilter = searchParams.get("place_of_origin")
    console.log(`typeFilter: ${typeFilter}`)

    //TODO create API functions and to use in useEffect for other components fetching data

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
    

    //TODO implement loading state for other components using fetch requests
    //TODO implement error state and error handlign for other components using fetch requests. 

    // if (loading) { 
    //     return <h1>Loading...</h1>
    // }

    if (error) { 
        return <h1>There was an error: {error.message}</h1>
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
            {/* <div className='page-btn-div'>
                { page > 1 && <button className='page-btn' onClick={loadFewer}>Prev page</button>}
                <button className='page-btn' onClick={(loadMore)}>Next page</button>
            </div> */}
        </div>
    )
}

