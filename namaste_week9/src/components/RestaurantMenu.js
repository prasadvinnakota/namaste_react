import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { restaurantMenu_Items, SWIGGY_URL_IMAGES, restaurentList} from "../config"
import restMenu from "./utils/restMenu"

const RestaurantMenu = ()=>
{
    // const [resInfo, setResInfo] = useState(null)
    // const [limit, setLimit] = useState(5);
    // const total = 15
    // const [allData, setAllData] = useState([])


    const params = useParams()
    
    const id = params.id

    const resInfo = restMenu(id)
    console.log(resInfo)
    // useEffect(()=>
    // {
    //   fetchMenu()  
    // //   allData.push(restaurentList.slice[0,limit])
    // //   console.log(allData)
    // }, [])

    // const fetchMenu = async()=>
    // {
    //    const data = await fetch(restaurantMenu_Items + id)
    //    const json = await data.json()
    //    setResInfo(json.data)
    //    console.log(resInfo)
    // //    console.log(json.data.cards[0].card.card.info.cloudinaryImageId)


    // }


    return(
        <div className="restaurant-info">
         <img alt="res-logo" style={{height:"300px", width:"300px", marginTop:"10px"}} src={SWIGGY_URL_IMAGES+resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId} className="res-logo"/>

        <div className="res-menu" onScroll={(e)=>console.log(e.currentTarget.scrollTop, e.currentTarget.clientHeight, e.currentTarget.scrollHeight)}>
        <ul>
        {
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.map(
                (item)=>
                {
                    return(
                        <li key={item.card.info.id}>{item.card.info.name}</li>
                    )
                }
            )
        }
        </ul>
     </div>
         </div>
    )
}

export default RestaurantMenu;