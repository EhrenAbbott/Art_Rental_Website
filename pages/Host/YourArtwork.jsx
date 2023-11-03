import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function YourArtwork(){ 

    const userList = [ 
        { 
            id: "345",
            art_id: [
                    
                        "1587",
                        "219455",
                        "73874",
                        "257286",
                    ] 
        },
        { 
            id: "576",
            art_id: ["26650", "66039"] 
        },     
    ]

    const [users, setUsers] = React.useState(userList)
    const [userArtData, setUserArtData] = React.useState([])
    const currentUser = users[0]
    const userArtList = currentUser.art_id
    const art = useLoaderData(userArtList)
    console.log(art)


    
    userArtList.map(item => 
    React.useEffect(() => { 
        fetch(`https://api.artic.edu/api/v1/artworks/${item}`)
            .then(res => res.json())
            .then(data => setUserArtData( prevData =>  
                [ 
                    ...prevData, 
                    data.data
                ]
            ))
    }, [])
    )

    console.log(userArtData)

    //TODO: The above user data is temporarily hard coded until user login/authentication can be added

    const mappedUserArt = userArtData.map(artwork => ( 
        <Link
            to={`${artwork.id}`}
            key={artwork.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={artwork.id}>
                <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} />
                <div className="host-van-info">
                    <h3>{artwork.title}</h3>
                    <p>${Math.floor(Math.random() * 1000)}/week</p>
                    <p>Artist: {artwork.artist_title}</p>
                    <p>{artwork.place_of_origin}</p>
                </div>
            </div>
        </Link>
    ))
    
    return( 
            <section>
                <h1 className="host-vans-title">Your listed art</h1>
                <div className="host-vans-list">
                    { 
                        currentUser.art_id.length > 0 ? ( 
                            <section> 
                                {mappedUserArt}
                            </section>
                        ) : ( 
                            <h2>No Artwork added yet</h2>
                        )
                    }
                </div>
            </section>
    )
}
