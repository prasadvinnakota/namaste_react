import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header = ()=>
{
    const [buttonName, setButtonName] = useState("Login")
    return(
    <div className="header">
    <div className="logo-container">
    <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo" className="logo"/>
    </div>
    <div className="nav-items">
    <ul>
    <Link to="/"><li>Home</li></Link>
    <Link to="/aboutus"><li>About Us</li></Link>
    <li>Contact</li>
    <li>Cart</li>
    <button className="login-logout" onClick={()=>
    {
        buttonName==="Login"? setButtonName("Logout"): setButtonName("Login")
    }}>
    {buttonName}
    </button>
    </ul>
    </div>
    </div>    
    )
}

export default Header;