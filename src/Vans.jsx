import React from 'react'
import { Link } from 'react-router-dom'

export default function Vans(){ 

    const [vans, setVans] = React.useState([])

    React.useEffect(() => { 
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setVans(data.data.memes))  
    }, []) 

    console.log(vans)

    const mappedVans = vans.map(data => ( 
        <div ley={data.id} className='van-tile'> 
            <img src={data.url}/>
            <div className="van-info"> 
                <h3>{data.name}</h3>
                <p>${data.height}<span>/day</span></p>
            </div>
        </div>
    ))
    



    return(  
        <div className='van-list-container'>
            <div className='van-list'>
                {mappedVans}
            </div>
        </div>
    )
}