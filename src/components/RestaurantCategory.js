import ItemList from "./itemList";
import { useState } from "react";
const RestaurantCategory=({data})=>{
    console.log(data);
    const [showItems,setShowItems]=useState(false);
    const handleClick=()=>{
        setShowItems(!showItems);
    };
    return (<div>
        <div className="w-6/12 m-auto bg-gray-50 shadow p-4 my-4" >
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-g">{data.title}({data?.itemCards.length})</span>
            <span>⬇</span>
            </div>
           {showItems&&<ItemList items={data?.itemCards} />}     
           
               
        </div>
       
    </div>
    )
};
export default RestaurantCategory;