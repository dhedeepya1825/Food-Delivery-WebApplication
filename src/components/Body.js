import RestaurantCard,{withPromotedLabel} from "./RestaurantCard.js";
import {useState,useEffect} from "react";
import Shimmer  from "./Shimmer.js";
import {Link} from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.js";
const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchText,setSearchText]=useState("");
    const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
                console.log(json);
    const restaurantCard = json?.data?.cards?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return <h1>Looks like you are offline</h1>
    }
    if(listOfRestaurants.length===0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="flex">
                    <div className="m-4 p-4">
                        <input className="border border-solid border-black" type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className="rounded px-4 py-2 bg-green-100 m-4" onClick={
                        ()=>{
                            const filteredList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredList);
                        }
                    }>Search</button>
                </div>
                <div className="m-4 p-4 flex-items-center" >
                <button className="rounded py-2 px-4 bg-blue-100 m-4" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating >= 4.5);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
        filteredRestaurants.map((restaurant)=>(
                   <Link key={restaurant.info.id} 
                   to={"/restaurants/"+restaurant.info.id}>
                    {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                </Link>
                ))
            }
            </div>

        </div>
    );
};

export default Body;