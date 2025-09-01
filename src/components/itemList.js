import { CDN_URL } from "../utils/constants";
const ItemList=({items})=>{
    return(
        <div>
            {items.map((item)=>
            <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                
            <div className="px-2 w-9/12">
                 <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                </div>
                <div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
            </div>
            <div className="w-3/12 relative">
                <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                    <button className="bg-black text-white px-4 py-2 rounded-lg shadow">Add +</button>
                </div>
            </div>

           
        </div>
                
            )}
        </div>
    )
};
export default ItemList;
