import { useState, useEffect } from "react";
import { restaurentList } from "../config";
import RestroCard from "./RestrCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

function filterData(searchText, restaurentListOnScreen) {
    const filteredRestaurantList = restaurentListOnScreen.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText)
    })

    return filteredRestaurantList;
}

const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [restaurentListOnScreen, setRestaurentListtOnScreen] = useState([])
    const [allRestaurents, setAllRestaurents] = useState([])

    const mockDataRestautListForShowingShimemer = restaurentList;


    useEffect(() => {
        const fetchDataFromCall = fetchData()
        
    }, [])

    async function fetchData() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            setRestaurentListtOnScreen(json?.data?.cards[2]?.data?.data?.cards)
            setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards)
        }
        catch (error) {
              throw {message:"Unable to fetch data, Internal error"}
        }

    }
    

    return allRestaurents?.length === 0 ? (<>
        <div className="search-container">
            <input type="text" value={searchText} className="search" onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>
            <h1>{searchText}</h1>
            <button disabled={true} className="search-button" onClick={() => { setRestaurentListtOnScreen(filterData(searchText, allRestaurents)) }}>Serach</button>
        </div>
        <div className="restro-container">
            {
                mockDataRestautListForShowingShimemer?.map((restaurent, index) => {
                    return <Shimmer key={restaurent.data.id} />
                })
            }
        </div>
    </>) : (<>
        <div className="search-container">
            <input type="text" value={searchText} className="search" onChange={(e) => {
                setSearchText(e.target.value)
            }}></input>
           <button className="search-button" onClick={() => { 
                setRestaurentListtOnScreen(filterData(searchText, restaurentList))                 
            
            }}>Serach</button>
        </div>
        <div className="restro-container">
            {
                restaurentListOnScreen?.length>0?
                (restaurentListOnScreen?.map((restaurent, index) => {
                    return (
                        <Link  key={restaurent.data.id} to={`/restaurant/${restaurent.data.id}`}>
                        <RestroCard restaurant={restaurent.data} />
                        </Link>
                        )

                })):(<h1>Nothing to show</h1>)
            }
        </div>
    </>)

}

export default Body;