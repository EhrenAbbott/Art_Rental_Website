

export async function getArt(page){ 
    const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
    if (!res.ok) { 
        throw { 
            message: "Failed to fetch art", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data 
}
