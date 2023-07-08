import ReactDOM from "react-dom/client"
import React from "react"
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer"
const AppLayout = ()=>
{
    return(
        <>     
        <Header/>
        <Body/>
        <Footer/>
        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)

