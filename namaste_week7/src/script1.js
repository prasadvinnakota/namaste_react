import ReactDOM from "react-dom/client"
import React from "react"
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import BodyClassComponent from "./components/BodyClassComponent"
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

const AppLayout = ()=>
{
    return(
        <>     
        <Header/>
        <Outlet/>
        <Footer/>
        </>

    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
              path:"/restaurant/:id",
              element:<RestaurantMenu/>
            }, 
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/aboutus",
                element:<AboutUs/>,
                children:[
                    {
                       path:"profile",
                       element:<Profile/>
                    }
                    ]
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)

