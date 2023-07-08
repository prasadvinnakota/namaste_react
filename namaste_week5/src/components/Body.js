import { useState } from "react";
import { restaurentList } from "../config";
import RestroCard from "./RestrCard";

function filterData(searchText, restaurentListOnScreen)
{
    const filteredRestaurantList = restaurentListOnScreen.filter((restaurant)=>
    {
        return restaurant.data.name.toLowerCase().includes(searchText)
    })

    return filteredRestaurantList;
}

const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [restaurentListOnScreen, setRestaurentListtOnScreen] = useState(restaurentList)
    return (
        <>
            <div className="search-container">
                <input type="text" value={searchText} className="search" onChange={(e) => {
                    setSearchText(e.target.value)
                }}></input>
                <h1>{searchText}</h1>
                <button className="search-button" onClick={()=>{setRestaurentListtOnScreen(filterData(searchText, restaurentList))}}>Serach</button>
            </div>
            <div className="restro-container">
                {restaurentListOnScreen.map((restaurent, index) => {
                    return <RestroCard key={restaurent.data.id} restaurant={restaurent.data} />
                })}
            </div>
        </>
    )
}

export default Body;