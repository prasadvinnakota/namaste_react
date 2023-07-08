import React from "react"
import {useRouteError} from "react-router-dom"

const Error = ()=>
{
    const error = useRouteError()
    return(
        <>
        <h1>OOPS! Please Check The Route</h1>
        <h2>{error.status}</h2>
        <h2>{error.statusText}</h2>
        </>
    )
}

export default Error;