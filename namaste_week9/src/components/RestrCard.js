import { SWIGGY_URL_IMAGES } from "../config";

const RestroCard = ({restaurant})=>
{
    const {name, cloudinaryImageId, avgRating, costForTwo, deliveryTime} = restaurant
    return(
        <div className="restro-card">
        <img src={SWIGGY_URL_IMAGES+
        cloudinaryImageId} alt="res-logo" className="res-logo"/>
        <h3>{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo/100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestroCard;