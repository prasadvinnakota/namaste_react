import React from "react"

const Shimmer = ()=>
{
    const logoStyle={
        backgroundColor:"grey",
        width:"200px",
        height:"100px",
    }
    const commonStyle={
        marginTop: "10px",
        backgroundColor:"grey",
        width:"70%",
        height:"10px",
    }  
    
    return(
        <div className="shimmer-card">
        <div className="shimmer-logo" style={logoStyle}>
        </div>
        <h3 className="shimmer-name" style={commonStyle}>{""}</h3>
        <h4 className="shimmer-stars" style={commonStyle}>{""}</h4>
        <h4 className="shimmer-avgrate" style={commonStyle}>{""}</h4>
        <h4 className="shimmer-deliverytime" style={commonStyle}>{""}</h4>
        </div>
    )
}

export default Shimmer;