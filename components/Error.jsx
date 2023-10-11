import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error(){ 
    const error = useRouteError()
    console.log(error)

    return( 
        <>
            <h1>Error: {error.message}</h1>
            { error.status  && <pre>{error.status}</pre>}
            { error.statusText && <pre>{error.statusText}</pre>}
        </>
    )
}