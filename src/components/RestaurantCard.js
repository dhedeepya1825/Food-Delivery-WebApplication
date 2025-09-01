import {CDN_URL} from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;
    return (
        <div className="m-4 p-4 w-60 h-85 bg-gray-200 shadow"> 
          <img  src={CDN_URL+ cloudinaryImageId} className="w-100 h-40 rounded-lg"/>  
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
        </div>
    )
};

// higher order component
export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;