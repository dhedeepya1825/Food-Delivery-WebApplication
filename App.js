import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>{
    return ( <div className="header">
        <div className="logo-container">
         <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" className="logo"/>  
        </div>
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>
    </div>
    )
}


const RestaurantCard=({resName,cuisine})=>{
    return (
        <div className="res-card" style={{backgroundColor:"lightblue"}}> 
          <img alt="res-card" src="https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=3840&q=75" className="res-logo"/>  
        <h3>{resName}</h3>
        <h4 >{cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 Minutes</h4>
        </div>
    )
};

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="FrenchFries, Peri-Peri"/>
            
            </div>

        </div>
    )
};


const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);