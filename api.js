

export async function getArt(page){ 
    const res = await fetch(`https://api.artic.edu/api/v1/artworks?page=${page}`)
    const data = await res.json()
    return data 
}
