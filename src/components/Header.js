import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();
    return ( <div className="flex justify-between shadow">
        <div className="logo-container">
         <img src={LOGO_URL} className="w-50"/>  
        </div>
        <div className="flex items-center">
        <ul className="flex p-4 m-4 list-none">
            <li className="px-3">Status: {onlineStatus ? "Online✅" : "Offline🔴"}</li>
            <li className="px-3"><Link to="/">Home</Link></li>
            <li className="px-3"><Link to="/about">About Us</Link></li>
            <li className="px-3"><Link to="/contact">Contact Us</Link></li>
            <li className="px-3"><Link to="/cart">Cart</Link></li>
            <li className="px-3"><Link to="/grocery">Grocery</Link></li>
            <button onClick={()=>{
                btnNameReact==="Login"?
                setBtnNameReact("Logout"):
            setBtnNameReact("Login");
            }}>{btnNameReact} </button>
            
        </ul>
        </div>
    </div>
    )
}

export default Header;