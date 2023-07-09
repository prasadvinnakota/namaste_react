import { useEffect, useState} from "react";
import { restaurantMenu_Items, SWIGGY_URL_IMAGES, restaurentList} from "../../config"


const restMenu = (id)=>
{
    const [restInfo, setRestInfo] = useState(null)
    console.log(id)

    useEffect(()=>
    {
        
        fetchMenu()  
    }, [])

    const fetchMenu = async()=>
    {
       const data = await fetch(restaurantMenu_Items + id)
       console.log(restaurantMenu_Items + id)
       const json = await data.json()
       setRestInfo(json.data)
       console.log(1)
    //    console.log(json.data.cards[0].card.card.info.cloudinaryImageId)


    }
    console.log(1)
    return restInfo;

}

export default restMenu;