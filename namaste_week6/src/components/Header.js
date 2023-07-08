import React from "react"
import { useState } from "react"

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
    <a href="http://localhost:1234/"><li>Home</li></a>
    <li>About Us</li>
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