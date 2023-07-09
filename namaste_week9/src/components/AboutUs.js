import React from "react"
import { Outlet } from "react-router-dom";

const AboutUs = ()=>
{
    return(
        <>
        <h1>A Food Delivery App With Super Discounts And Low Prices.</h1>
        <Outlet/>
        </>
    )
}

export default AboutUs;