

export async function getArt(page){ 
    const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
    if (!res.ok) { 
        throw { 
            message: "Failed to fetch Art", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.data 
}

export async function getArtDetail(params){ 
    const res = await fetch(`https://api.artic.edu/api/v1/artworks/${params}`)
    if (!res.ok) { 
        throw { 
            message: "Failed to fetch ArtDetail", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    // console.log(data.data)
    return data.data 
}


// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }